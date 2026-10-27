    (function () {
            var SUPPORTED_LANGS = ['en', 'id', 'ms', 'fil', 'vi', 'th', 'ja', 'zh', 'fr', 'pt', 'ko'];
      var CLAIMDAILY_LANGS = window.CLAIMDAILY_LANG || (window.CLAIMDAILY_LANG = {});
      var _langLoading = {};
      function loadLanguage(lang, callback) {
        if (lang === 'en' || CLAIMDAILY_LANGS[lang]) { callback(true); return; }
        if (_langLoading[lang]) { _langLoading[lang].push(callback); return; }
        _langLoading[lang] = [callback];
        var s = document.createElement('script');
        s.src = 'assets/lang/' + lang + '.js';
        function done(ok) {
          var cbs = _langLoading[lang] || [];
          delete _langLoading[lang];
          cbs.forEach(function (cb) { cb(ok); });
        }
        s.onload = function () { done(!!CLAIMDAILY_LANGS[lang]); };
        s.onerror = function () { done(false); };
        document.head.appendChild(s);
      }
      var currentLang = detectInitialLanguage();
      var langNames = { en: 'English', id: 'Bahasa Indonesia', ms: 'Bahasa Melayu', fil: 'Filipino', vi: 'Tiếng Việt', th: 'ภาษาไทย', ja: '日本語', zh: '中文', fr: 'Français', pt: 'Português (Brasil)', ko: '한국어' };
      var langToggle = document.querySelector('.lang-toggle');
      var langMenu = document.querySelector('.lang-menu');
      var langCurrent = document.querySelector('[data-lang-current]');
      var langOptions = document.querySelectorAll('.lang-option');
      var i18nOriginals = [];
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        i18nOriginals.push({ el: el, key: el.getAttribute('data-i18n'), html: el.innerHTML });
      });
      var i18nAttrOriginals = [];
      document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
        el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
          var parts = pair.split(':');
          var attrName = parts[0].trim();
          i18nAttrOriginals.push({ el: el, attr: attrName, key: parts[1].trim(), value: el.getAttribute(attrName) });
        });
      });
      function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
        var dict = CLAIMDAILY_LANGS[lang];
        i18nOriginals.forEach(function (item) {
          item.el.innerHTML = dict && dict[item.key] ? dict[item.key] : item.html;
        });
        i18nAttrOriginals.forEach(function (item) {
          var value = dict && dict[item.key] ? dict[item.key] : item.value;
          if (value === null) { item.el.removeAttribute(item.attr); } else { item.el.setAttribute(item.attr, value); }
        });
        langOptions.forEach(function (opt) {
          var isActive = opt.getAttribute('data-lang') === lang;
          opt.classList.toggle('active', isActive);
          opt.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        if (langCurrent) langCurrent.textContent = langNames[lang] || 'English';
      }
      function detectInitialLanguage() {
        try {
          var saved = localStorage.getItem('claimdaily:lang');
          if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
        } catch (e) {}
        var nav = (navigator.language || 'en').split('-')[0].toLowerCase();
        if (nav === 'tl') nav = 'fil';
        return SUPPORTED_LANGS.indexOf(nav) !== -1 ? nav : 'en';
      }
      function closeLangMenu() {
        langMenu.hidden = true;
        langToggle.setAttribute('aria-expanded', 'false');
      }
      langToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        var willOpen = langMenu.hidden;
        langMenu.hidden = !willOpen;
        langToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
      var langRequestSeq = 0;
      langOptions.forEach(function (opt) {
        opt.addEventListener('click', function () {
          var chosen = opt.getAttribute('data-lang');
          try { localStorage.setItem('claimdaily:lang', chosen); } catch (e) {}
          closeLangMenu();
          langToggle.focus();
          var seq = ++langRequestSeq;
          loadLanguage(chosen, function () {
            if (seq === langRequestSeq) setLanguage(chosen);
          });
        });
      });
      document.addEventListener('click', function (event) {
        if (!langMenu.hidden && !event.target.closest('.lang-switch')) closeLangMenu();
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !langMenu.hidden) { closeLangMenu(); langToggle.focus(); }
      });
      if (currentLang === 'en' || CLAIMDAILY_LANGS[currentLang]) {
        setLanguage(currentLang);
      } else {
        loadLanguage(currentLang, function () { setLanguage(currentLang); });
      }

      var copyButtons = document.querySelectorAll('.copy-btn[data-copy]');
      var toast = document.querySelector('.toast');
      var toastTimer;
      function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
      }
      function fallbackCopy(text) {
        var area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(area);
        return ok;
      }
      copyButtons.forEach(function (copyButton) {
        copyButton.addEventListener('click', function () {
          var text = copyButton.getAttribute('data-copy');
          var activeDict = CLAIMDAILY_LANGS[currentLang];
          var successMessage = copyButton.getAttribute('data-copy-message') || (activeDict && activeDict.copyOk) || 'Text copied';
          var failureMessage = (activeDict && activeDict.copyFail) || "Couldn't copy the text";
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
              showToast(successMessage);
            }).catch(function () {
              showToast(fallbackCopy(text) ? successMessage : failureMessage);
            });
          } else {
            showToast(fallbackCopy(text) ? successMessage : failureMessage);
          }
        });
      });

      var faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(function (item) {
        item.addEventListener('toggle', function () {
          if (!item.open) return;
          faqItems.forEach(function (otherItem) {
            if (otherItem !== item) otherItem.open = false;
          });
        });
      });

      var carousel = document.querySelector('[data-carousel]');
      if (carousel) {
        var carouselViewport = carousel.querySelector('[data-carousel-viewport]');
        var carouselSlides = carousel.querySelectorAll('.carousel-slide');
        var carouselDots = carousel.querySelectorAll('[data-carousel-dot]');
        var carouselPrev = carousel.querySelector('[data-carousel-prev]');
        var carouselNext = carousel.querySelector('[data-carousel-next]');
        var carouselIndex = 0;
        var carouselScrollFrame;

        function updateCarousel(index, shouldScroll) {
          carouselIndex = Math.max(0, Math.min(index, carouselSlides.length - 1));
          carouselDots.forEach(function (dot, dotIndex) {
            dot.setAttribute('aria-current', dotIndex === carouselIndex ? 'true' : 'false');
          });
          carouselPrev.disabled = carouselIndex === 0;
          carouselNext.disabled = carouselIndex === carouselSlides.length - 1;
          if (shouldScroll) {
            carouselViewport.scrollLeft = carouselIndex * carouselViewport.clientWidth;
          }
        }

        carouselPrev.addEventListener('click', function () { updateCarousel(carouselIndex - 1, true); });
        carouselNext.addEventListener('click', function () { updateCarousel(carouselIndex + 1, true); });
        carouselDots.forEach(function (dot) {
          dot.addEventListener('click', function () {
            updateCarousel(Number(dot.getAttribute('data-carousel-dot')), true);
          });
        });
        carouselViewport.addEventListener('scroll', function () {
          window.cancelAnimationFrame(carouselScrollFrame);
          carouselScrollFrame = window.requestAnimationFrame(function () {
            var nextIndex = Math.round(carouselViewport.scrollLeft / carouselViewport.clientWidth);
            if (nextIndex !== carouselIndex) updateCarousel(nextIndex, false);
          });
        }, { passive: true });
        carouselViewport.addEventListener('keydown', function (event) {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            updateCarousel(carouselIndex - 1, true);
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            updateCarousel(carouselIndex + 1, true);
          }
        });
        window.addEventListener('resize', function () {
          carouselViewport.scrollLeft = carouselIndex * carouselViewport.clientWidth;
        });
        updateCarousel(0, false);
      }

      var qrStages = document.querySelectorAll('[data-qr-stage]');
      qrStages.forEach(function (stage) {
        var cover = stage.querySelector('[data-qr-cover]');
        var scanTimer;
        cover.addEventListener('click', function () {
          stage.classList.add('revealed');
          cover.setAttribute('aria-expanded', 'true');
          window.clearTimeout(scanTimer);
          stage.classList.remove('scanning');
          void stage.offsetWidth;
          stage.classList.add('scanning');
          scanTimer = window.setTimeout(function () { stage.classList.remove('scanning'); }, 1000);
        });
      });

      var tipPills = document.querySelectorAll('[data-tip-method]');
      var tipPanels = document.querySelectorAll('[data-tip-panel]');
      function selectTipMethod(method) {
        tipPills.forEach(function (pill) {
          var isActive = pill.getAttribute('data-tip-method') === method;
          pill.classList.toggle('active', isActive);
          pill.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        tipPanels.forEach(function (panel) {
          var isActive = panel.getAttribute('data-tip-panel') === method;
          panel.hidden = !isActive;
          panel.classList.remove('tip-enter');
          if (isActive) {
            void panel.offsetWidth;
            panel.classList.add('tip-enter');
          }
        });
      }
      tipPills.forEach(function (pill) {
        pill.addEventListener('click', function () {
          selectTipMethod(pill.getAttribute('data-tip-method'));
        });
      });

      var tipCard = document.querySelector('.tip-card');
      if (tipCard && 'IntersectionObserver' in window) {
        tipCard.classList.add('will-reveal');
      }

      // Reveal all .will-reveal elements on scroll (single observer)
      var revealEls = document.querySelectorAll('.will-reveal');
      if (revealEls.length && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
      } else {
        // No IO support: show everything
        revealEls.forEach(function (el) { el.classList.add('in-view'); });
      }

      var scrollButton = document.querySelector('.scroll-top');
      var sentinel = document.querySelector('.scroll-sentinel');
      var observer = new IntersectionObserver(function (entries) {
        scrollButton.hidden = !entries[0].isIntersecting;
      }, { threshold: 0 });
      observer.observe(sentinel);
      scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }());
