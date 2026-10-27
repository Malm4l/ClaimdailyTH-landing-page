    (function () {
      var translations = {
        id: {
          heroTitle: 'Malas login dan redeem code setiap hari? biar bot kbara yang urus itu semua',
          heroCopy: 'Bot otomatis untuk Daily Check-In &amp; Redeem Code. Laporan hasil dikirim langsung ke DM Instagram kamu, sepenuhnya gratis.',
          heroCta: 'Daftar via DM Instagram',
          heroSecondary: 'Lihat cara kerjanya ↓',
          trustAria: 'Keunggulan layanan',
          trust1: 'Check-In Rewards Event di web',
          trust2: 'Kode terbaru dipantau',
          trust3: 'Notifikasi via Instagram',
          featTitle: 'Akun tetap terurus tanpa rutinitas tambahan.',
          featIntro: 'Tiga pekerjaan utama yang berjalan untuk menjaga klaim harian dan kode redeem akunmu.',
          f1t: 'Daily Check-In Rewards Event di web',
          f1p: 'Klaim harian diproses secara rutin agar reward tidak mudah terlewat.',
          f2t: 'Redeem code terbaru',
          f2p: 'Setiap hari memantau kode baru dari Discord official, lalu dicoba ke semua akun yang terdaftar.',
          f3t: 'Notifikasi DM Instagram',
          f3p: 'Ringkasan hasil dikirim lewat DM ke semua user, gratis, tanpa syarat paket.',
          priceKicker: 'Tanpa password',
          priceTitle: 'Gratis, aman, dan hanya follow',
          priceIntro: 'Tidak ada harga, tidak ada paket. Kami tidak pernah meminta password atau login game kamu. Satu-satunya syarat adalah follow Instagram kami.',
          pc1t: 'Satu-satunya syarat',
          pc1p: 'Follow IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>. Itu saja. Tidak ada pembayaran, tidak ada paket, tidak ada biaya tersembunyi.',
          pc2t: 'Masa layanan',
          pc2p: 'Aktif selama bot berjalan, atau sampai kamu berhenti bermain. UID-mu terus diproses setiap hari.',
          pc3t: 'Aturan tegas: unfollow / ganti username',
          pc3p1: 'Ketika unfollow atau ganti username IG, otomatis UID-mu langsung terputus dari bot tanpa peringatan.',
          pc3p2: 'Habis ganti username IG dan mau pakai bot lagi? Follow lagi dengan username barumu, lalu DM <code>please add &lt;UID&gt;</code> untuk daftar ulang.',
          reportTitle: 'Contoh Laporan Harian',
          reportIntro: 'Setiap laporan merangkum hasil check-in dan redeem code dalam satu pesan yang mudah dibaca. Geser untuk melihat contoh lainnya.',
          carPrevAria: 'Lihat laporan sebelumnya',
          carNextAria: 'Lihat laporan berikutnya',
          carViewAria: 'Galeri contoh laporan harian',
          dotsAria: 'Pilih contoh laporan',
          dot1Aria: 'Tampilkan laporan 1',
          dot2Aria: 'Tampilkan laporan 2',
          dot3Aria: 'Tampilkan laporan 3',
                    dot4Aria: 'Tampilkan laporan 4',
          slide1Aria: 'Contoh laporan 1 dari 4',
          slide2Aria: 'Contoh laporan 2 dari 4',
          slide3Aria: 'Contoh laporan 3 dari 4',
                    slide4Aria: 'Contoh laporan 4 dari 4',
          altBjorn: 'Screenshot laporan harian asli untuk akun Bjorn berisi hasil daily check-in dan empat redeem code',
          altKbara: 'Screenshot laporan harian asli untuk akun Kbara berisi hasil daily check-in dan dua redeem code',
          altNight: 'Screenshot laporan harian asli untuk akun Nightlord berisi hasil dua daily check-in dan empat redeem code',
          altKimz: 'Screenshot laporan harian asli untuk akun Kimz berisi hasil daily check-in dan empat redeem code',
          swipeHint: 'Geser ke kanan atau kiri untuk melihat laporan lainnya.',
          orderKicker: 'Pendaftaran',
          orderTitle: 'Daftar dalam 3 langkah.',
          orderIntro: 'Tidak ada formulir dan tidak ada pembayaran. Cukup follow, kirim DM, lalu tunggu verifikasi.',
          orderNote: 'Kami hanya membutuhkan UID akunmu, tanpa password dan tanpa login ke dalam game.',
          altContact: 'Ada pertanyaan sebelum mencoba? Chat aja dulu ke IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> atau <strong>(VNW) kbara (S514)</strong> di in-game.',
          s1t: 'Follow IG @kb4r4',
          s1p: 'Follow dulu akun Instagram <strong>@kb4r4</strong>. Ini satu-satunya syarat untuk memakai bot.',
          s1btn: 'Buka Instagram @kb4r4',
          s2t: 'Kirim DM: please add &lt;UID&gt;',
          s2p: 'Kirim DM ke @kb4r4 dengan format <code>please add &lt;UID&gt;</code>. Contoh: <code>please add 1234567890123</code>. Ganti &lt;UID&gt; dengan UID akun Top Heroes kamu.',
          s2btn: 'Salin format DM',
          copyDmMsg: 'Format DM disalin. Tinggal tempel UID-mu',
          s3t: 'Tunggu verifikasi',
          s3p: 'Follow-mu diverifikasi dulu. Setelah terverifikasi, UID-mu langsung diproses dan didaftarkan. Laporan harian dikirim ke DM Instagram kamu, gratis.',
          donTitle: 'Terbantu? Traktir Kopi',
          donIntro: 'Bot ini 100% gratis dan akan tetap gratis. Kalau kamu merasa terbantu dan ingin mendukung operasionalnya, tip sepenuhnya sukarela. Tidak wajib, dan tidak memengaruhi layananmu sama sekali.',
          dc1t: 'QRIS',
          altQris: 'Kode QRIS untuk tip sukarela',
          dc1p: 'Scan dengan aplikasi bank atau e-wallet apa pun. Nominal bebas, seikhlasnya.',
          dc1note: 'Untuk negara ASEAN, QRIS ini juga bisa discan langsung pakai aplikasi bank atau e-wallet negaramu.',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Tip crypto juga bisa lewat USDC di jaringan Solana. Biaya transfernya kecil dan prosesnya cepat.',
          altUsdc: 'Kode QR alamat wallet USDC jaringan Solana untuk tip crypto',
          dc2btn: 'Salin alamat wallet',
          copyWalletMsg: 'Alamat wallet USDC disalin',
          dc2note: 'Pastikan mengirim USDC lewat <strong>jaringan Solana</strong>. Kirim lewat jaringan lain bisa membuat dana hilang.',
          qrCoverLabel: 'Ketuk untuk menampilkan kode QR',
          tipPickerAria: 'Pilih metode tip',
          faqTitle: 'Pertanyaan yang sering ditanya',

          q1: 'Bot ini bisa apa aja?',
          a1: 'Layanan bot yang mengerjakan daily Check-In Rewards Event di web dan redeem code secara otomatis.',
          q2: 'Apakah akun saya aman?',
          a2: 'Ya, risikonya sangat kecil, karena ini cuma otomasi fitur resmi di web mereka. Bot melakukan persis apa yang kamu lakukan manual: klaim check-in harian dan redeem kode resmi di situs resmi. Tidak pernah masuk ke dalam game, tidak mengubah apa pun, dan kami hanya butuh UID-mu.',
          q3: 'Apakah UID saya aman dibagikan?',
          a3: 'Ya, aman. UID hanya bisa dipakai untuk membuka halaman store (klaim check-in harian dan redeem kode). UID tidak bisa dipakai untuk masuk ke dalam game, mengganti password, atau memindahkan item. Login game (Google/Facebook/Apple) terpisah sepenuhnya dari UID store. Bot tidak pernah meminta password apa pun.',
          q4: 'Apa saja yang bot lakukan dengan akun saya?',
          a4: 'Hanya dua hal: klaim check-in harian dan redeem kode gift resmi. Tidak menyentuh hal lain.',
          q6: 'Bagaimana cara daftar?',
          a6: 'Follow IG @kb4r4, lalu kirim DM dengan format please add &lt;UID&gt;. Setelah follow-mu terverifikasi, UID-mu langsung diproses, tanpa pembayaran apa pun.',
          q7: 'Apakah saya harus membayar?',
          a7: 'Tidak. Layanan ini 100% gratis. Satu-satunya syarat adalah follow IG @kb4r4. Kalau kamu merasa terbantu dan ingin mendukung, ada tip sukarela via QRIS (Indonesia) atau USDC (Solana) untuk crypto di bagian tip. Tidak wajib, dan tidak memengaruhi layananmu.',
          q8: 'Apa yang terjadi kalau saya unfollow / ganti username IG?',
          a8: 'UID-mu langsung dikeluarkan dari bot, tanpa peringatan. Mau pakai bot lagi? Follow lagi dengan username barumu, lalu DM please add &lt;UID&gt; untuk daftar ulang.',
          q9: 'Sampai kapan layanan ini berlaku?',
          a9: 'Selama bot masih berjalan, atau sampai kamu berhenti bermain.',
          q10: 'Gimana cara berhenti pakai bot ini?',
          a10: 'Tinggal DM ke @kb4r4 dengan format: please remove my uid. UID-mu langsung dikeluarkan dari bot. Kalau nanti mau pakai lagi, DM lagi please add &lt;UID&gt;.',
          q11: 'Apa yang terjadi setelah saya kirim DM pendaftaran?',
          a11: 'Kamu akan ditanya dua hal singkat: (1) apakah kamu mau dikirimi laporan harian hasil check-in dan redeem code lewat DM, dan (2) laporan itu mau pakai bahasa apa. Cukup jawab dengan bahasamu sendiri. Setelah itu, UID-mu langsung diproses.',
          footerText: 'Layanan bot daily Check-In Rewards Event di web &amp; redeem code Top Heroes',
          scrollTopAria: 'Kembali ke atas',
          copyOk: 'Teks disalin',
          copyFail: 'Tidak dapat menyalin teks'
        },
        ms: {
          heroTitle: 'Malas log masuk dan tebus kod setiap hari? biar bot kbara uruskan semuanya',
          heroCopy: 'Bot automatik untuk Daily Check-In &amp; Redeem Code. Laporan hasil dihantar terus ke DM Instagram anda, sepenuhnya percuma.',
          heroCta: 'Daftar melalui DM Instagram',
          heroSecondary: 'Lihat cara ia berfungsi ↓',
          trustAria: 'Kelebihan perkhidmatan',
          trust1: 'Check-In Rewards Event di web',
          trust2: 'Kod terkini dipantau',
          trust3: 'Notifikasi melalui Instagram',
          featTitle: 'Akaun anda kekal terurus tanpa rutin tambahan.',
          featIntro: 'Tiga tugas utama yang memastikan tuntutan harian dan kod tebus anda berjalan lancar.',
          f1t: 'Daily Check-In Rewards Event di web',
          f1p: 'Tuntutan harian diproses secara rutin supaya ganjaran tidak mudah terlepas.',
          f2t: 'Kod tebus terkini',
          f2p: 'Memantau kod baharu setiap hari dari Discord rasmi, kemudian dicuba pada semua akaun yang berdaftar.',
          f3t: 'Notifikasi DM Instagram',
          f3p: 'Ringkasan hasil dihantar melalui DM kepada semua pengguna, percuma, tanpa syarat pakej.',
          priceKicker: 'Tanpa kata laluan',
          priceTitle: 'Percuma, selamat, dan hanya perlu follow',
          priceIntro: 'Tiada harga, tiada pakej. Kami tidak pernah meminta kata laluan atau log masuk permainan anda. Satu-satunya syarat ialah follow Instagram kami.',
          pc1t: 'Satu-satunya syarat',
          pc1p: 'Follow IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>. Itu sahaja. Tiada bayaran, tiada pakej, tiada yuran tersembunyi.',
          pc2t: 'Tempoh perkhidmatan',
          pc2p: 'Aktif selagi bot berjalan, atau sehingga anda berhenti bermain. UID anda terus diproses setiap hari.',
          pc3t: 'Peraturan tegas: unfollow / tukar nama pengguna',
          pc3p1: 'Apabila anda unfollow atau menukar nama pengguna IG, UID anda diputuskan secara automatik daripada bot tanpa amaran.',
          pc3p2: 'Sudah tukar nama pengguna IG dan mahu guna bot lagi? Follow semula dengan nama pengguna baharu anda, kemudian DM <code>please add &lt;UID&gt;</code> untuk daftar semula.',
          reportTitle: 'Contoh Laporan Harian',
          reportIntro: 'Setiap laporan merangkumkan hasil check-in dan kod tebus dalam satu mesej yang mudah dibaca. Leret untuk melihat contoh lain.',
          carPrevAria: 'Lihat laporan sebelumnya',
          carNextAria: 'Lihat laporan seterusnya',
          carViewAria: 'Galeri contoh laporan harian',
          dotsAria: 'Pilih contoh laporan',
          dot1Aria: 'Tunjuk laporan 1',
          dot2Aria: 'Tunjuk laporan 2',
          dot3Aria: 'Tunjuk laporan 3',
                    dot4Aria: 'Tunjuk laporan 4',
          slide1Aria: 'Contoh laporan 1 daripada 4',
          slide2Aria: 'Contoh laporan 2 daripada 4',
          slide3Aria: 'Contoh laporan 3 daripada 4',
                    slide4Aria: 'Contoh laporan 4 daripada 4',
          altBjorn: 'Tangkapan skrin laporan harian asal untuk akaun Bjorn yang menunjukkan hasil daily check-in dan empat kod tebus',
          altKbara: 'Tangkapan skrin laporan harian asal untuk akaun Kbara yang menunjukkan hasil daily check-in dan dua kod tebus',
          altNight: 'Tangkapan skrin laporan harian asal untuk akaun Nightlord yang menunjukkan hasil dua daily check-in dan empat kod tebus',
          altKimz: 'Tangkapan skrin laporan harian asal untuk akaun Kimz yang menunjukkan hasil daily check-in dan empat kod tebus',
          swipeHint: 'Leret ke kiri atau kanan untuk melihat laporan lain.',
          orderKicker: 'Pendaftaran',
          orderTitle: 'Daftar dalam 3 langkah.',
          orderIntro: 'Tiada borang dan tiada bayaran. Cuma follow, hantar DM, kemudian tunggu pengesahan.',
          orderNote: 'Kami hanya perlukan UID akaun anda, tanpa kata laluan, dan tanpa log masuk ke permainan anda.',
          altContact: 'Ada soalan sebelum mencuba? Sembang sahaja dulu di IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> atau <strong>(VNW) kbara (S514)</strong> dalam permainan.',
          s1t: 'Follow IG @kb4r4',
          s1p: 'Follow akaun Instagram <strong>@kb4r4</strong> dahulu. Itu satu-satunya syarat untuk menggunakan bot.',
          s1btn: 'Buka Instagram @kb4r4',
          s2t: 'Hantar DM: please add &lt;UID&gt;',
          s2p: 'Hantar DM kepada @kb4r4 dengan format <code>please add &lt;UID&gt;</code>. Contoh: <code>please add 1234567890123</code>. Gantikan &lt;UID&gt; dengan UID akaun Top Heroes anda.',
          s2btn: 'Salin format DM',
          copyDmMsg: 'Format DM disalin. Tinggal tampal UID anda',
          s3t: 'Tunggu pengesahan',
          s3p: 'Follow anda disahkan dahulu. Selepas disahkan, UID anda terus diproses dan didaftarkan. Laporan harian dihantar ke DM Instagram anda, percuma.',
          donTitle: 'Terbantu? Belanja saya kopi',
          donIntro: 'Bot ini 100% percuma dan akan kekal percuma. Jika anda rasa terbantu dan mahu menyokong kos operasinya, tip adalah sepenuhnya sukarela. Tidak wajib, dan tidak menjejaskan perkhidmatan anda langsung.',
          dc1t: 'QRIS',
          altQris: 'Kod QRIS untuk tip sukarela',
          dc1p: 'Imbas dengan mana-mana aplikasi bank atau e-dompet. Jumlah bebas, ikut kesudian anda.',
          dc1note: 'Untuk negara ASEAN, QRIS ini juga boleh diimbas terus menggunakan aplikasi bank atau e-dompet negara anda.',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Tip crypto juga boleh melalui USDC di rangkaian Solana. Yuran pemindahan rendah dan prosesnya pantas.',
          altUsdc: 'Kod QR alamat dompet USDC di rangkaian Solana untuk tip crypto',
          dc2btn: 'Salin alamat dompet',
          copyWalletMsg: 'Alamat dompet USDC disalin',
          dc2note: 'Pastikan anda menghantar USDC melalui <strong>rangkaian Solana</strong>. Menghantar melalui rangkaian lain boleh menyebabkan dana anda hilang.',
          qrCoverLabel: 'Ketuk untuk paparkan kod QR',
          tipPickerAria: 'Pilih kaedah tip',
          faqTitle: 'Soalan yang kerap ditanya',

          q1: 'Apa yang bot ini boleh buat?',
          a1: 'Perkhidmatan bot yang menguruskan daily Check-In Rewards Event di web dan kod tebus secara automatik.',
          q2: 'Adakah akaun saya selamat?',
          a2: 'Ya, risikonya sangat kecil, kerana ini cuma automasi ciri rasmi di laman web mereka. Bot membuat tepat apa yang anda biasa buat secara manual: tuntutan daftar masuk harian dan penebusan kod rasmi di laman rasmi. Tidak pernah masuk ke dalam permainan, tidak mengubah apa-apa, dan kami hanya perlukan UID anda.',
          q3: 'Adakah UID saya selamat dikongsi?',
          a3: 'Ya, selamat. UID hanya boleh digunakan untuk membuka halaman kedai (tuntutan check-in harian dan penebusan kod). UID tidak boleh digunakan untuk memasuki permainan anda, menukar kata laluan, atau memindahkan item. Log masuk permainan anda (Google/Facebook/Apple) berasingan sepenuhnya daripada UID kedai anda. Bot tidak pernah meminta sebarang kata laluan.',
          q4: 'Apa yang bot buat dengan akaun saya?',
          a4: 'Hanya dua perkara: tuntut check-in harian dan tebus kod hadiah rasmi. Ia tidak menyentuh apa-apa yang lain.',
          q6: 'Bagaimana cara daftar?',
          a6: 'Follow IG @kb4r4, kemudian hantar DM dengan format please add &lt;UID&gt;. Selepas follow anda disahkan, UID anda terus diproses, tanpa sebarang bayaran.',
          q7: 'Adakah saya perlu membayar?',
          a7: 'Tidak. Perkhidmatan ini 100% percuma. Satu-satunya syarat ialah follow IG @kb4r4. Jika anda rasa terbantu dan mahu menyokong, anda boleh beri tip sukarela melalui QRIS (Indonesia) atau USDC (Solana) untuk pengguna crypto di bahagian tip. Tidak wajib, dan tidak menjejaskan perkhidmatan anda.',
          q8: 'Apa yang berlaku jika saya unfollow / tukar nama pengguna IG?',
          a8: 'UID anda dikeluarkan daripada bot serta-merta, tanpa amaran. Mahu guna bot lagi? Follow semula dengan nama pengguna baharu anda, kemudian DM please add &lt;UID&gt; untuk daftar semula.',
          q9: 'Berapa lama perkhidmatan ini bertahan?',
          a9: 'Selagi bot masih berjalan, atau sehingga anda berhenti bermain.',
          q10: 'Bagaimana cara berhenti menggunakan bot ini?',
          a10: 'Cuma DM @kb4r4 dengan: please remove my uid. UID anda akan dikeluarkan daripada bot serta-merta. Jika anda mahu menggunakannya lagi nanti, cuma DM please add &lt;UID&gt; semula.',
          q11: 'Apa yang berlaku selepas saya hantar DM pendaftaran?',
          a11: 'Anda akan ditanya dua soalan ringkas: (1) sama ada anda mahu dikirimi laporan harian hasil check-in dan kod tebus melalui DM, dan (2) laporan itu mahu menggunakan bahasa apa. Jawab sahaja dengan bahasa anda sendiri. Selepas itu, UID anda terus diproses.',
          footerText: 'Perkhidmatan bot daily Check-In Rewards Event di web &amp; kod tebus Top Heroes',
          scrollTopAria: 'Kembali ke atas',
          copyOk: 'Teks disalin',
          copyFail: 'Tidak dapat menyalin teks'
        },
        fil: {
          heroTitle: 'Tinatamad ka bang mag-log in at mag-redeem ng mga code araw-araw? Hayaan mong si bot kbara ang bahala sa lahat',
          heroCopy: 'Isang awtomatikong bot para sa Daily Check-In &amp; Redeem Codes. Ang mga ulat ng resulta ay direktang ipinapadala sa iyong Instagram DM, libre para sa lahat.',
          heroCta: 'Mag-sign up sa Instagram DM',
          heroSecondary: 'Tingnan kung paano ito gumagana ↓',
          trustAria: 'Mga tampok ng serbisyo',
          trust1: 'Check-In Rewards Event sa web',
          trust2: 'Binabantayan ang pinakabagong mga code',
          trust3: 'Mga abiso sa pamamagitan ng Instagram',
          featTitle: 'Nananatiling inaasikaso ang iyong account, walang dagdag na routine.',
          featIntro: 'Tatlong pangunahing trabaho na nagpapanatiling nasa oras ang iyong mga pang-araw-araw na claim at redeem code.',
          f1t: 'Daily Check-In Rewards Event sa web',
          f1p: 'Regular na pinoproseso ang mga pang-araw-araw na claim, kaya mas maliit ang tsansang may makaligtaang reward.',
          f2t: 'Pinakabagong mga redeem code',
          f2p: 'Araw-araw na binabantayan ang mga bagong code mula sa official Discord, saka sinusubukan sa lahat ng rehistradong account.',
          f3t: 'Mga abiso sa Instagram DM',
          f3p: 'Ipinapadala ang mga buod ng resulta sa pamamagitan ng DM sa lahat ng user, libre, walang kondisyon sa package.',
          priceKicker: 'Walang password na kailangan',
          priceTitle: 'Libre, ligtas, at follow lang',
          priceIntro: 'Walang presyo, walang package. Hindi namin hinihingi ang password o game login mo. Kailangan mo lang i-follow ang Instagram namin.',
          pc1t: 'Ang tanging kailangan',
          pc1p: 'I-follow ang IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>. Iyon lang. Walang bayad, walang package, walang nakatagong bayarin.',
          pc2t: 'Panahon ng serbisyo',
          pc2p: 'Aktibo habang tumatakbo ang bot, o hanggang tumigil ka sa paglalaro. Patuloy na pinoproseso ang UID mo araw-araw.',
          pc3t: 'Mahigpit na patakaran: unfollow / palitan ang username',
          pc3p1: 'Kapag nag-unfollow ka o nagpalit ng IG username, awtomatikong madidiskonekta ang UID mo sa bot nang walang babala.',
          pc3p2: 'Nagpalit ka ng IG username at gusto mong gamitin ulit ang bot? Mag-follow ulit gamit ang bago mong username, saka mag-DM ng <code>please add &lt;UID&gt;</code> para mag-sign up ulit.',
          reportTitle: 'Mga Halimbawa ng Pang-araw-araw na Ulat',
          reportIntro: 'Bawat ulat ay nagbubuod ng mga resulta ng check-in at redeem code sa isang madaling basahing mensahe. Mag-swipe para makita ang iba pang halimbawa.',
          carPrevAria: 'Tingnan ang nakaraang ulat',
          carNextAria: 'Tingnan ang susunod na ulat',
          carViewAria: 'Gallery ng mga halimbawa ng pang-araw-araw na ulat',
          dotsAria: 'Pumili ng halimbawa ng ulat',
          dot1Aria: 'Ipakita ang ulat 1',
          dot2Aria: 'Ipakita ang ulat 2',
          dot3Aria: 'Ipakita ang ulat 3',
                    dot4Aria: 'Ipakita ang ulat 4',
          slide1Aria: 'Halimbawa ng ulat 1 sa 4',
          slide2Aria: 'Halimbawa ng ulat 2 sa 4',
          slide3Aria: 'Halimbawa ng ulat 3 sa 4',
                    slide4Aria: 'Halimbawa ng ulat 4 sa 4',
          altBjorn: 'Screenshot ng orihinal na pang-araw-araw na ulat para sa Bjorn account na nagpapakita ng mga resulta ng daily check-in at apat na redeem code',
          altKbara: 'Screenshot ng orihinal na pang-araw-araw na ulat para sa Kbara account na nagpapakita ng mga resulta ng daily check-in at dalawang redeem code',
          altNight: 'Screenshot ng orihinal na pang-araw-araw na ulat para sa Nightlord account na nagpapakita ng dalawang resulta ng daily check-in at apat na redeem code',
          altKimz: 'Screenshot ng orihinal na pang-araw-araw na ulat para sa Kimz account na nagpapakita ng mga resulta ng daily check-in at apat na redeem code',
          swipeHint: 'Mag-swipe pakaliwa o pakanan para makita ang iba pang ulat.',
          orderKicker: 'Pagpaparehistro',
          orderTitle: 'Mag-sign up sa 3 hakbang.',
          orderIntro: 'Walang form at walang bayad. Mag-follow lang, magpadala ng DM, saka maghintay ng beripikasyon.',
          orderNote: 'Kailangan lang namin ang UID ng account mo: walang password, at walang pag-log in sa iyong laro.',
          altContact: 'May tanong bago subukan? Mag-chat ka muna sa IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> o kay <strong>(VNW) kbara (S514)</strong> sa in-game.',
          s1t: 'I-follow ang IG @kb4r4',
          s1p: 'I-follow muna ang Instagram account na <strong>@kb4r4</strong>. Ito ang tanging kailangan para magamit ang bot.',
          s1btn: 'Buksan ang Instagram @kb4r4',
          s2t: 'Magpadala ng DM: please add &lt;UID&gt;',
          s2p: 'Magpadala ng DM kay @kb4r4 gamit ang format na <code>please add &lt;UID&gt;</code>. Halimbawa: <code>please add 1234567890123</code>. Palitan ang &lt;UID&gt; ng UID ng iyong Top Heroes account.',
          s2btn: 'Kopyahin ang format ng DM',
          copyDmMsg: 'Nakopya ang format ng DM. I-paste na lang ang UID mo',
          s3t: 'Maghintay ng beripikasyon',
          s3p: 'Bineberipika muna ang iyong follow. Kapag naberipika na, agad na pinoproseso at inirerehistro ang UID mo. Ipinapadala ang mga pang-araw-araw na ulat sa iyong Instagram DM, libre.',
          donTitle: 'Nakatulong ba? Traktiran mo ako ng kape',
          donIntro: '100% libre ang bot na ito at mananatiling libre. Kung nakatulong ito sa iyo at gusto mong suportahan ang gastos sa pagpapatakbo nito, ang tip ay lubos na boluntaryo. Hindi kailangan, at hindi ito nakakaapekto sa iyong serbisyo.',
          dc1t: 'QRIS',
          altQris: 'QRIS code para sa boluntaryong tip',
          dc1p: 'I-scan gamit ang anumang bank app o e-wallet. Anumang halaga, ayon sa gusto mo.',
          dc1note: 'Para sa mga bansang ASEAN, maaari ring direktang i-scan ang QRIS na ito gamit ang bank app o e-wallet app ng iyong bansa.',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Maaari ka ring mag-tip gamit ang crypto sa pamamagitan ng USDC sa Solana network. Mababang bayad sa paglilipat at mabilis na pagproseso.',
          altUsdc: 'QR code ng USDC wallet address sa Solana network para sa mga crypto na tip',
          dc2btn: 'Kopyahin ang wallet address',
          copyWalletMsg: 'Nakopya ang USDC wallet address',
          dc2note: 'Siguraduhing nagpapadala ka ng USDC sa pamamagitan ng <strong>Solana network</strong>. Ang pagpapadala sa ibang network ay maaaring magresulta sa pagkawala ng iyong pondo.',
          qrCoverLabel: 'I-tap upang ipakita ang QR code',
          tipPickerAria: 'Pumili ng paraan ng tip',
          faqTitle: 'Mga madalas itanong',

          q1: 'Ano ang kayang gawin ng bot na ito?',
          a1: 'Isang serbisyo ng bot na awtomatikong humahawak sa pang-araw-araw na web Check-In Rewards Event at mga redeem code.',
          q2: 'Ligtas ba ang account ko?',
          a2: 'Oo, napakaliit ng panganib, dahil automation lang ito ng opisyal na web features ng laro. Ginagawa ng bot ang eksaktong ginagawa mo nang manu-mano: pang-araw-araw na check-in claims at opisyal na code redemptions sa opisyal na site. Hindi kailanman pumapasok sa loob ng laro, walang binabago, at UID lang ang kailangan namin.',
          q3: 'Ligtas bang ibahagi ang UID ko?',
          a3: 'Oo, ligtas ito. Magagamit lang ang UID para buksan ang store page (mga pang-araw-araw na check-in claim at pag-redeem ng code). Hindi magagamit ang UID para makapasok sa iyong laro, baguhin ang password mo, o ilipat ang mga item. Ang iyong game login (Google/Facebook/Apple) ay lubos na hiwalay sa iyong store UID. Hindi kailanman humihingi ang bot ng anumang password.',
          q4: 'Ano ang ginagawa ng bot sa account ko?',
          a4: 'Dalawang bagay lang: mag-claim ng pang-araw-araw na check-in at mag-redeem ng mga opisyal na gift code. Hindi ito humahawak ng iba pa.',
          q6: 'Paano ako magsa-sign up?',
          a6: 'I-follow ang IG @kb4r4, saka magpadala ng DM gamit ang format na please add &lt;UID&gt;. Kapag naberipika na ang iyong follow, agad na pinoproseso ang UID mo, nang walang anumang bayad.',
          q7: 'Kailangan ko bang magbayad?',
          a7: 'Hindi. 100% libre ang serbisyong ito. Ang tanging kailangan ay i-follow ang IG @kb4r4. Kung nakatulong ito sa iyo at gusto mong suportahan, maaari kang magbigay ng boluntaryong tip sa pamamagitan ng QRIS (Indonesia) o USDC (Solana) para sa mga crypto na user sa seksyon ng tip. Hindi kailangan, at hindi ito nakakaapekto sa iyong serbisyo.',
          q8: 'Ano ang mangyayari kung mag-unfollow ako / magpalit ng IG username?',
          a8: 'Agad na inaalis ang UID mo sa bot, nang walang babala. Gusto mong gamitin ulit ang bot? Mag-follow ulit gamit ang bago mong username, saka mag-DM ng please add &lt;UID&gt; para mag-sign up ulit.',
          q9: 'Hanggang kailan tatagal ang serbisyong ito?',
          a9: 'Hanggang tumatakbo pa ang bot, o hanggang tumigil ka sa paglalaro.',
          q10: 'Paano ako titigil sa paggamit ng bot na ito?',
          a10: 'Mag-DM lang kay @kb4r4 ng: please remove my uid. Agad na aalisin ang UID mo sa bot. Kung gusto mong gamitin ito ulit sa susunod, mag-DM lang ulit ng please add &lt;UID&gt;.',
          q11: 'Ano ang mangyayari pagkatapos kong ipadala ang DM para mag-sign up?',
          a11: 'Tatanungin ka ng dalawang mabilis na tanong: (1) gusto mo bang makatanggap ng pang-araw-araw na ulat ng iyong mga resulta ng check-in at redeem code sa DM, at (2) anong wika ang gusto mo para sa mga ulat. Sagutin mo lang sa sarili mong wika. Pagkatapos niyan, agad nang ipoproseso ang UID mo.',
          footerText: 'Serbisyo ng bot para sa pang-araw-araw na web Check-In Rewards Event &amp; redeem code ng Top Heroes',
          scrollTopAria: 'Bumalik sa itaas',
          copyOk: 'Nakopya ang teksto',
          copyFail: 'Hindi makopya ang teksto'
        },
        vi: {
          heroTitle: 'Lười đăng nhập và nhập code mỗi ngày? Hãy để bot kbara lo hết',
          heroCopy: 'Bot tự động cho Daily Check-In &amp; Redeem Code. Dịch vụ này MIỄN PHÍ 100%, chỉ cần follow IG @kb4r4, và báo cáo kết quả sẽ được gửi thẳng vào DM Instagram của bạn, miễn phí cho mọi người dùng.',
          heroCta: 'Đăng ký qua DM Instagram',
          heroSecondary: 'Xem cách hoạt động ↓',
          trustAria: 'Điểm nổi bật của dịch vụ',
          trust1: 'Check-In Rewards Event trên web',
          trust2: 'Theo dõi các mã mới nhất',
          trust3: 'Thông báo qua Instagram',
          featTitle: 'Tài khoản của bạn luôn được chăm sóc, không cần thêm thói quen nào.',
          featIntro: 'Ba công việc chính giúp việc nhận thưởng hằng ngày và redeem code của bạn luôn đúng tiến độ.',
          f1t: 'Daily Check-In Rewards Event trên web',
          f1p: 'Việc nhận thưởng hằng ngày được xử lý đều đặn, để phần thưởng ít bị bỏ lỡ hơn.',
          f2t: 'Redeem code mới nhất',
          f2p: 'Mỗi ngày theo dõi mã mới từ Discord chính thức, sau đó thử trên tất cả tài khoản đã đăng ký.',
          f3t: 'Thông báo qua DM Instagram',
          f3p: 'Tóm tắt kết quả được gửi qua DM cho mọi người dùng, miễn phí, không điều kiện gói.',
          priceKicker: 'Không cần mật khẩu',
          priceTitle: 'Miễn phí, an toàn, chỉ cần follow',
          priceIntro: 'Không có giá, không có gói. Chúng tôi không bao giờ yêu cầu mật khẩu hay đăng nhập game. Điều kiện duy nhất là follow Instagram của chúng tôi.',
          pc1t: 'Yêu cầu duy nhất',
          pc1p: 'Follow IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>. Chỉ vậy thôi. Không thanh toán, không gói, không phí ẩn.',
          pc2t: 'Thời gian dịch vụ',
          pc2p: 'Hoạt động chừng nào bot còn chạy, hoặc cho đến khi bạn ngừng chơi. UID của bạn vẫn được xử lý mỗi ngày.',
          pc3t: 'Quy định nghiêm ngặt: unfollow / đổi tên người dùng',
          pc3p1: 'Khi bạn unfollow hoặc đổi tên người dùng IG, UID của bạn sẽ tự động bị ngắt khỏi bot mà không có cảnh báo.',
          pc3p2: 'Đã đổi tên người dùng IG và muốn dùng lại bot? Hãy follow lại bằng tên người dùng mới, rồi DM <code>please add &lt;UID&gt;</code> để đăng ký lại.',
          reportTitle: 'Ví dụ báo cáo hằng ngày',
          reportIntro: 'Mỗi báo cáo tóm tắt kết quả check-in và redeem code trong một tin nhắn dễ đọc. Vuốt để xem các ví dụ khác.',
          carPrevAria: 'Xem báo cáo trước',
          carNextAria: 'Xem báo cáo tiếp theo',
          carViewAria: 'Thư viện ví dụ báo cáo hằng ngày',
          dotsAria: 'Chọn ví dụ báo cáo',
          dot1Aria: 'Hiển thị báo cáo 1',
          dot2Aria: 'Hiển thị báo cáo 2',
          dot3Aria: 'Hiển thị báo cáo 3',
                    dot4Aria: 'Hiển thị báo cáo 4',
          slide1Aria: 'Ví dụ báo cáo 1 trên 4',
          slide2Aria: 'Ví dụ báo cáo 2 trên 4',
          slide3Aria: 'Ví dụ báo cáo 3 trên 4',
                    slide4Aria: 'Ví dụ báo cáo 4 trên 4',
          altBjorn: 'Ảnh chụp màn hình báo cáo hằng ngày gốc cho tài khoản Bjorn hiển thị kết quả daily check-in và bốn redeem code',
          altKbara: 'Ảnh chụp màn hình báo cáo hằng ngày gốc cho tài khoản Kbara hiển thị kết quả daily check-in và hai redeem code',
          altNight: 'Ảnh chụp màn hình báo cáo hằng ngày gốc cho tài khoản Nightlord hiển thị hai kết quả daily check-in và bốn redeem code',
          altKimz: 'Ảnh chụp màn hình báo cáo hằng ngày gốc cho tài khoản Kimz hiển thị kết quả daily check-in và bốn redeem code',
          swipeHint: 'Vuốt sang trái hoặc phải để xem các báo cáo khác.',
          orderKicker: 'Đăng ký',
          orderTitle: 'Đăng ký trong 3 bước.',
          orderIntro: 'Không biểu mẫu, không thanh toán. Chỉ cần follow, gửi DM, rồi chờ xác minh.',
          orderNote: 'Chúng tôi chỉ cần UID tài khoản của bạn: không cần mật khẩu, và không đăng nhập vào game của bạn.',
          altContact: 'Có câu hỏi trước khi thử? Cứ nhắn trước qua IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> hoặc <strong>(VNW) kbara (S514)</strong> trong game.',
          s1t: 'Follow IG @kb4r4',
          s1p: 'Hãy follow tài khoản Instagram <strong>@kb4r4</strong> trước. Đó là yêu cầu duy nhất để dùng bot.',
          s1btn: 'Mở Instagram @kb4r4',
          s2t: 'Gửi DM: please add &lt;UID&gt;',
          s2p: 'Gửi DM đến @kb4r4 theo định dạng <code>please add &lt;UID&gt;</code>. Ví dụ: <code>please add 1234567890123</code>. Thay &lt;UID&gt; bằng UID tài khoản Top Heroes của bạn.',
          s2btn: 'Sao chép định dạng DM',
          copyDmMsg: 'Đã sao chép định dạng DM. Chỉ cần dán UID của bạn',
          s3t: 'Chờ xác minh',
          s3p: 'Lượt follow của bạn sẽ được xác minh trước. Sau khi xác minh, UID của bạn sẽ được xử lý và đăng ký ngay. Báo cáo hằng ngày được gửi vào DM Instagram của bạn, miễn phí.',
          donTitle: 'Thấy hữu ích? Mời tôi một ly cà phê',
          donIntro: 'Bot này miễn phí 100% và sẽ luôn miễn phí. Nếu bạn thấy nó hữu ích và muốn hỗ trợ chi phí vận hành, tip hoàn toàn tự nguyện. Không bắt buộc, và không ảnh hưởng gì đến dịch vụ của bạn.',
          dc1t: 'QRIS',
          altQris: 'Mã QRIS cho tip tự nguyện',
          dc1p: 'Quét bằng bất kỳ ứng dụng ngân hàng hoặc ví điện tử nào. Số tiền tùy ý, theo lòng của bạn.',
          dc1note: 'Đối với các nước ASEAN, mã QRIS này cũng có thể được quét trực tiếp bằng ứng dụng ngân hàng hoặc ví điện tử của nước bạn.',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Bạn cũng có thể tip crypto qua USDC trên mạng Solana. Phí chuyển thấp và xử lý nhanh.',
          altUsdc: 'Mã QR địa chỉ ví USDC trên mạng Solana cho tip crypto',
          dc2btn: 'Sao chép địa chỉ ví',
          copyWalletMsg: 'Đã sao chép địa chỉ ví USDC',
          dc2note: 'Hãy chắc chắn bạn gửi USDC qua <strong>mạng Solana</strong>. Gửi qua mạng khác có thể khiến bạn mất tiền.',
          qrCoverLabel: 'Chạm để hiện mã QR',
          tipPickerAria: 'Chọn phương thức tip',
          faqTitle: 'Câu hỏi thường gặp',

          q1: 'Bot này làm được gì?',
          a1: 'Một dịch vụ bot tự động xử lý Check-In Rewards Event hằng ngày trên web và redeem code.',
          q2: 'Tài khoản của tôi có an toàn không?',
          a2: 'Có, rủi ro rất nhỏ, vì đây chỉ là tự động hóa các tính năng web chính thức của trò chơi. Bot làm chính xác những gì bạn thường làm thủ công: nhận thưởng check-in hằng ngày và redeem mã chính thức trên trang chính thức. Không bao giờ vào trong game, không thay đổi gì, và chúng tôi chỉ cần UID của bạn.',
          q3: 'Chia sẻ UID của tôi có an toàn không?',
          a3: 'Có, an toàn. UID chỉ có thể dùng để mở trang cửa hàng (nhận check-in hằng ngày và redeem code). UID không thể dùng để vào game của bạn, đổi mật khẩu, hay chuyển vật phẩm. Đăng nhập game của bạn (Google/Facebook/Apple) hoàn toàn tách biệt với UID cửa hàng. Bot không bao giờ yêu cầu bất kỳ mật khẩu nào.',
          q4: 'Bot làm gì với tài khoản của tôi?',
          a4: 'Chỉ hai việc: nhận check-in hằng ngày và redeem gift code chính thức. Không động vào bất cứ thứ gì khác.',
          q6: 'Làm sao để đăng ký?',
          a6: 'Follow IG @kb4r4, rồi gửi DM theo định dạng please add &lt;UID&gt;. Sau khi lượt follow của bạn được xác minh, UID của bạn sẽ được xử lý ngay, hoàn toàn không thanh toán.',
          q7: 'Tôi có phải trả tiền không?',
          a7: 'Không. Dịch vụ này miễn phí 100%. Yêu cầu duy nhất là follow IG @kb4r4. Nếu bạn thấy hữu ích và muốn hỗ trợ, bạn có thể để lại tip tự nguyện qua QRIS (Indonesia) hoặc USDC (Solana) cho người dùng crypto ở mục tip. Không bắt buộc, và không ảnh hưởng đến dịch vụ của bạn.',
          q8: 'Điều gì xảy ra nếu tôi unfollow / đổi tên người dùng IG?',
          a8: 'UID của bạn sẽ bị loại khỏi bot ngay lập tức, không có cảnh báo. Muốn dùng lại bot? Hãy follow lại bằng tên người dùng mới, rồi DM please add &lt;UID&gt; để đăng ký lại.',
          q9: 'Dịch vụ này kéo dài bao lâu?',
          a9: 'Chừng nào bot còn chạy, hoặc cho đến khi bạn ngừng chơi.',
          q10: 'Làm sao để ngừng sử dụng bot này?',
          a10: 'Chỉ cần DM cho @kb4r4 với: please remove my uid. UID của bạn sẽ bị loại khỏi bot ngay lập tức. Nếu sau này muốn dùng lại, chỉ cần DM please add &lt;UID&gt; một lần nữa.',
          q11: 'Điều gì xảy ra sau khi tôi gửi DM đăng ký?',
          a11: 'Bạn sẽ được hỏi hai câu hỏi ngắn: (1) bạn có muốn nhận báo cáo hằng ngày về kết quả check-in và redeem code qua DM không, và (2) bạn muốn báo cáo bằng ngôn ngữ nào. Chỉ cần trả lời bằng ngôn ngữ của bạn. Sau đó, UID của bạn sẽ được xử lý ngay.',
          footerText: 'Dịch vụ bot Check-In Rewards Event hằng ngày trên web &amp; redeem code của Top Heroes',
          scrollTopAria: 'Về đầu trang',
          copyOk: 'Đã sao chép văn bản',
          copyFail: 'Không thể sao chép văn bản'
        },
        th: {
          heroTitle: 'ขี้เกียจล็อกอินและแลกโค้ดทุกวันใช่ไหม? ให้บอท kbara จัดการให้ทั้งหมด',
          heroCopy: 'บอทอัตโนมัติสำหรับ Daily Check-In &amp; Redeem Code บริการนี้ฟรี 100% แค่กดติดตาม IG @kb4r4 และรายงานผลจะถูกส่งตรงไปยัง DM Instagram ของคุณ ฟรีสำหรับผู้ใช้ทุกคน',
          heroCta: 'สมัครผ่าน DM Instagram',
          heroSecondary: 'ดูวิธีการทำงาน ↓',
          trustAria: 'จุดเด่นของบริการ',
          trust1: 'Check-In Rewards Event บนเว็บ',
          trust2: 'ติดตามโค้ดล่าสุดให้',
          trust3: 'แจ้งเตือนผ่าน Instagram',
          featTitle: 'บัญชีของคุณได้รับการดูแลเสมอ โดยไม่ต้องเพิ่มกิจวัตรใด ๆ',
          featIntro: 'งานหลักสามอย่างที่ช่วยให้การรับรางวัลรายวันและโค้ดแลกของคุณเป็นไปตามกำหนด',
          f1t: 'Daily Check-In Rewards Event บนเว็บ',
          f1p: 'การรับรางวัลรายวันจะถูกดำเนินการเป็นประจำ เพื่อให้รางวัลไม่พลาดง่าย ๆ',
          f2t: 'Redeem code ล่าสุด',
          f2p: 'ติดตามโค้ดใหม่ทุกวันจาก Discord อย่างเป็นทางการ แล้วนำไปลองกับทุกบัญชีที่ลงทะเบียน',
          f3t: 'การแจ้งเตือนผ่าน DM Instagram',
          f3p: 'สรุปผลจะถูกส่งผ่าน DM ให้ผู้ใช้ทุกคน ฟรี ไม่มีเงื่อนไขแพ็กเกจ',
          priceKicker: 'ไม่ต้องใช้รหัสผ่าน',
          priceTitle: 'ฟรี ปลอดภัย แค่กดติดตาม',
          priceIntro: 'ไม่มีราคา ไม่มีแพ็กเกจ เราไม่ขอรหัสผ่านหรือการล็อกอินเกมของคุณ เงื่อนไขเดียวคือกดติดตาม Instagram ของเรา',
          pc1t: 'เงื่อนไขเดียว',
          pc1p: 'กดติดตาม IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a> แค่นั้นเอง ไม่ต้องจ่ายเงิน ไม่มีแพ็กเกจ ไม่มีค่าธรรมเนียมแอบแฝง',
          pc2t: 'ระยะเวลาบริการ',
          pc2p: 'ทำงานตราบใดที่บอทยังเปิดอยู่ หรือจนกว่าคุณจะหยุดเล่น UID ของคุณจะถูกดำเนินการทุกวัน',
          pc3t: 'กฎเข้มงวด: เลิกติดตาม / เปลี่ยนชื่อผู้ใช้',
          pc3p1: 'เมื่อคุณเลิกติดตามหรือเปลี่ยนชื่อผู้ใช้ IG UID ของคุณจะถูกตัดออกจากบอทโดยอัตโนมัติโดยไม่มีการเตือน',
          pc3p2: 'เปลี่ยนชื่อผู้ใช้ IG แล้วอยากใช้บอทอีก? กดติดตามอีกครั้งด้วยชื่อผู้ใช้ใหม่ของคุณ แล้ว DM <code>please add &lt;UID&gt;</code> เพื่อสมัครใหม่',
          reportTitle: 'ตัวอย่างรายงานรายวัน',
          reportIntro: 'แต่ละรายงานสรุปผลการเช็กอินและโค้ดแลกไว้ในข้อความเดียวที่อ่านง่าย ปัดเพื่อดูตัวอย่างอื่น',
          carPrevAria: 'ดูรายงานก่อนหน้า',
          carNextAria: 'ดูรายงานถัดไป',
          carViewAria: 'แกลเลอรีตัวอย่างรายงานรายวัน',
          dotsAria: 'เลือกตัวอย่างรายงาน',
          dot1Aria: 'แสดงรายงาน 1',
          dot2Aria: 'แสดงรายงาน 2',
          dot3Aria: 'แสดงรายงาน 3',
                    dot4Aria: 'แสดงรายงาน 4',
          slide1Aria: 'ตัวอย่างรายงาน 1 จาก 4',
          slide2Aria: 'ตัวอย่างรายงาน 2 จาก 4',
          slide3Aria: 'ตัวอย่างรายงาน 3 จาก 4',
                    slide4Aria: 'ตัวอย่างรายงาน 4 จาก 4',
          altBjorn: 'ภาพหน้าจอรายงานรายวันต้นฉบับของบัญชี Bjorn แสดงผลการเช็กอินรายวันและโค้ดแลกสี่โค้ด',
          altKbara: 'ภาพหน้าจอรายงานรายวันต้นฉบับของบัญชี Kbara แสดงผลการเช็กอินรายวันและโค้ดแลกสองโค้ด',
          altNight: 'ภาพหน้าจอรายงานรายวันต้นฉบับของบัญชี Nightlord แสดงผลการเช็กอินรายวันสองรายการและโค้ดแลกสี่โค้ด',
          altKimz: 'ภาพหน้าจอรายงานรายวันต้นฉบับของบัญชี Kimz แสดงผลการเช็กอินรายวันและโค้ดแลกสี่โค้ด',
          swipeHint: 'ปัดไปทางซ้ายหรือขวาเพื่อดูรายงานอื่น',
          orderKicker: 'การสมัคร',
          orderTitle: 'สมัครใน 3 ขั้นตอน',
          orderIntro: 'ไม่มีแบบฟอร์ม ไม่ต้องจ่ายเงิน แค่กดติดตาม ส่ง DM แล้วรอการยืนยัน',
          orderNote: 'เราต้องการแค่ UID บัญชีของคุณ ไม่ต้องใช้รหัสผ่าน และไม่ต้องล็อกอินเข้าเกมของคุณ',
          altContact: 'มีคำถามก่อนลองใช้? ทักมาก่อนได้ที่ IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> หรือ <strong>(VNW) kbara (S514)</strong> ในเกม',
          s1t: 'กดติดตาม IG @kb4r4',
          s1p: 'กดติดตามบัญชี Instagram <strong>@kb4r4</strong> ก่อน นั่นคือเงื่อนไขเดียวในการใช้บอท',
          s1btn: 'เปิด Instagram @kb4r4',
          s2t: 'ส่ง DM: please add &lt;UID&gt;',
          s2p: 'ส่ง DM ไปที่ @kb4r4 ในรูปแบบ <code>please add &lt;UID&gt;</code> ตัวอย่าง: <code>please add 1234567890123</code> แทน &lt;UID&gt; ด้วย UID บัญชี Top Heroes ของคุณ',
          s2btn: 'คัดลอกรูปแบบ DM',
          copyDmMsg: 'คัดลอกรูปแบบ DM แล้ว แค่วาง UID ของคุณลงไป',
          s3t: 'รอการยืนยัน',
          s3p: 'การติดตามของคุณจะถูกยืนยันก่อน เมื่อยืนยันแล้ว UID ของคุณจะถูกดำเนินการและลงทะเบียนทันที รายงานรายวันจะถูกส่งไปยัง DM Instagram ของคุณ ฟรี',
          donTitle: 'ช่วยได้ไหม? เลี้ยงกาแฟฉันหน่อย',
          donIntro: 'บอทนี้ฟรี 100% และจะฟรีตลอดไป หากคุณรู้สึกว่ามันช่วยได้และอยากสนับสนุนค่าดำเนินการ ทิปเป็นเรื่องสมัครใจล้วน ๆ ไม่จำเป็น และไม่มีผลต่อบริการของคุณเลย',
          dc1t: 'QRIS',
          altQris: 'รหัส QRIS สำหรับทิปโดยสมัครใจ',
          dc1p: 'สแกนด้วยแอปธนาคารหรือ e-wallet ใดก็ได้ จำนวนเงินตามใจคุณ',
          dc1note: 'สำหรับประเทศในอาเซียน QRIS นี้สามารถสแกนได้โดยตรงด้วยแอปธนาคารหรือ e-wallet ของประเทศคุณเช่นกัน',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'คุณยังสามารถให้ทิป crypto ผ่าน USDC บนเครือข่าย Solana ค่าธรรมเนียมการโอนต่ำและดำเนินการรวดเร็ว',
          altUsdc: 'รหัส QR ของที่อยู่กระเป๋า USDC บนเครือข่าย Solana สำหรับทิป crypto',
          dc2btn: 'คัดลอกที่อยู่กระเป๋า',
          copyWalletMsg: 'คัดลอกที่อยู่กระเป๋า USDC แล้ว',
          dc2note: 'โปรดแน่ใจว่าคุณส่ง USDC ผ่าน <strong>เครือข่าย Solana</strong> การส่งผ่านเครือข่ายอื่นอาจทำให้เงินของคุณสูญหาย',
          qrCoverLabel: 'แตะเพื่อแสดง QR code',
          tipPickerAria: 'เลือกวิธีให้ทิป',
          faqTitle: 'คำถามที่พบบ่อย',

          q1: 'บอทนี้ทำอะไรได้บ้าง?',
          a1: 'บริการบอทที่จัดการ Check-In Rewards Event รายวันบนเว็บและโค้ดแลกโดยอัตโนมัติ',
          q2: 'บัญชีของฉันปลอดภัยไหม?',
          a2: 'ปลอดภัย ความเสี่ยงต่ำมาก เพราะนี่เป็นเพียงระบบอัตโนมัติของฟีเจอร์เว็บทางการของเกมเอง บอททำสิ่งที่คุณทำด้วยมือเป๊ะๆ: เช็คอินรับรางวัลรายวันและแลกโค้ดทางการบนเว็บไซต์ทางการ ไม่เข้าไปในเกม ไม่เปลี่ยนแปลงอะไร และเราต้องการแค่ UID ของคุณ',
          q3: 'การแชร์ UID ของฉันปลอดภัยไหม?',
          a3: 'ปลอดภัย UID ใช้ได้เพียงเพื่อเปิดหน้าร้านค้า (การรับเช็กอินรายวันและการแลกโค้ด) เท่านั้น UID ไม่สามารถใช้เข้าถึงเกมของคุณ เปลี่ยนรหัสผ่าน หรือย้ายไอเทมได้ การล็อกอินเกมของคุณ (Google/Facebook/Apple) แยกออกจาก UID ร้านค้าอย่างสิ้นเชิง บอทไม่เคยขอรหัสผ่านใด ๆ',
          q4: 'บอททำอะไรกับบัญชีของฉันบ้าง?',
          a4: 'เพียงสองอย่าง: รับเช็กอินรายวันและแลกโค้ดของขวัญทางการ ไม่แตะต้องอย่างอื่นเลย',
          q6: 'ฉันจะสมัครได้อย่างไร?',
          a6: 'กดติดตาม IG @kb4r4 แล้วส่ง DM ในรูปแบบ please add &lt;UID&gt; เมื่อการติดตามของคุณได้รับการยืนยัน UID ของคุณจะถูกดำเนินการทันที โดยไม่ต้องจ่ายเงินใด ๆ',
          q7: 'ฉันต้องจ่ายเงินไหม?',
          a7: 'ไม่ บริการนี้ฟรี 100% เงื่อนไขเดียวคือกดติดตาม IG @kb4r4 หากคุณรู้สึกว่ามันช่วยได้และอยากสนับสนุน คุณสามารถให้ทิปโดยสมัครใจผ่าน QRIS (อินโดนีเซีย) หรือ USDC (Solana) สำหรับผู้ใช้ crypto ได้ในส่วนทิป ไม่จำเป็น และไม่มีผลต่อบริการของคุณ',
          q8: 'จะเกิดอะไรขึ้นถ้าฉันเลิกติดตาม / เปลี่ยนชื่อผู้ใช้ IG?',
          a8: 'UID ของคุณจะถูกลบออกจากบอททันทีโดยไม่มีการเตือน อยากใช้บอทอีก? กดติดตามอีกครั้งด้วยชื่อผู้ใช้ใหม่ของคุณ แล้ว DM please add &lt;UID&gt; เพื่อสมัครใหม่',
          q9: 'บริการนี้จะอยู่ได้นานแค่ไหน?',
          a9: 'ตราบใดที่บอทยังทำงานอยู่ หรือจนกว่าคุณจะหยุดเล่น',
          q10: 'ฉันจะหยุดใช้บอทนี้ได้อย่างไร?',
          a10: 'แค่ส่ง DM ไปที่ @kb4r4 ว่า: please remove my uid UID ของคุณจะถูกลบออกจากบอททันที หากภายหลังอยากใช้อีก แค่ส่ง DM please add &lt;UID&gt; อีกครั้ง',
          q11: 'หลังจากฉันส่ง DM สมัครแล้วจะเกิดอะไรขึ้น?',
          a11: 'คุณจะถูกถามคำถามสั้น ๆ สองข้อ: (1) คุณต้องการรับรายงานรายวันเกี่ยวกับผลการเช็กอินและโค้ดแลกผ่าน DM หรือไม่ และ (2) คุณต้องการให้รายงานเป็นภาษาอะไร ตอบด้วยภาษาของคุณเองได้เลย หลังจากนั้น UID ของคุณจะถูกดำเนินการทันที',
          footerText: 'บริการบอท Check-In Rewards Event รายวันบนเว็บ &amp; โค้ดแลกของ Top Heroes',
          scrollTopAria: 'กลับไปด้านบน',
          copyOk: 'คัดลอกข้อความแล้ว',
          copyFail: 'ไม่สามารถคัดลอกข้อความได้'
        },
        ja: {
          heroTitle: '毎日のログインとコード入力が面倒？bot kbara におまかせ',
          heroCopy: 'Daily Check-In &amp; Redeem Code のための自動ボット。このサービスは 100% 無料です。IG @kb4r4 をフォローするだけで、結果レポートが Instagram の DM に直接届きます。全ユーザー無料です。',
          heroCta: 'Instagram DM で登録',
          heroSecondary: '使い方を見る ↓',
          trustAria: 'サービスの特徴',
          trust1: 'ウェブの Check-In Rewards Event',
          trust2: '最新コードを監視',
          trust3: 'Instagram で通知',
          featTitle: '追加の手間なく、アカウントは常にケアされます。',
          featIntro: '毎日の受け取りと引き換えコードを順調に保つ、3つの主な仕事です。',
          f1t: 'ウェブの Daily Check-In Rewards Event',
          f1p: '毎日の受け取りを定期的に処理するので、報酬を取り逃しにくくなります。',
          f2t: '最新の引き換えコード',
          f2p: '公式 Discord から毎日新しいコードを監視し、登録済みのすべてのアカウントで試します。',
          f3t: 'Instagram DM 通知',
          f3p: '結果の要約は DM で全ユーザーに送信されます。無料、パッケージ条件なし。',
          priceKicker: 'パスワード不要',
          priceTitle: '無料・安全・フォローするだけ',
          priceIntro: '価格もパッケージもありません。パスワードやゲームへのログインは一切求めません。唯一の条件は Instagram をフォローすることです。',
          pc1t: '唯一の条件',
          pc1p: 'IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a> をフォロー。それだけです。支払いなし、パッケージなし、隠れた料金なし。',
          pc2t: 'サービス期間',
          pc2p: 'ボットが稼働中の限り有効、またはあなたがプレイをやめるまで。UID は毎日処理され続けます。',
          pc3t: '厳格なルール：フォロー解除 / ユーザー名変更',
          pc3p1: 'フォローを解除したり IG のユーザー名を変更したりすると、UID は警告なしに自動的にボットから切断されます。',
          pc3p2: 'IG のユーザー名を変更して、またボットを使いたい場合は？新しいユーザー名で再度フォローし、<code>please add &lt;UID&gt;</code> と DM して再登録してください。',
          reportTitle: 'デイリーレポートの例',
          reportIntro: '各レポートは、チェックインと引き換えコードの結果を読みやすい1つのメッセージにまとめます。スワイプして他の例をご覧ください。',
          carPrevAria: '前のレポートを見る',
          carNextAria: '次のレポートを見る',
          carViewAria: 'デイリーレポート例のギャラリー',
          dotsAria: 'レポート例を選択',
          dot1Aria: 'レポート1を表示',
          dot2Aria: 'レポート2を表示',
          dot3Aria: 'レポート3を表示',
                    dot4Aria: 'レポート4を表示',
          slide1Aria: 'レポート例 1 / 4',
          slide2Aria: 'レポート例 2 / 4',
          slide3Aria: 'レポート例 3 / 4',
                    slide4Aria: 'レポート例 4 / 4',
          altBjorn: 'Bjorn アカウントのオリジナルデイリーレポートのスクリーンショット。デイリーチェックインの結果と4つの引き換えコードを表示',
          altKbara: 'Kbara アカウントのオリジナルデイリーレポートのスクリーンショット。デイリーチェックインの結果と2つの引き換えコードを表示',
          altNight: 'Nightlord アカウントのオリジナルデイリーレポートのスクリーンショット。2件のデイリーチェックイン結果と4つの引き換えコードを表示',
          altKimz: 'Kimz アカウントのオリジナルデイリーレポートのスクリーンショット。デイリーチェックインの結果と4つの引き換えコードを表示',
          swipeHint: '左右にスワイプして他のレポートをご覧ください。',
          orderKicker: '登録',
          orderTitle: '3ステップで登録。',
          orderIntro: 'フォームも支払いもありません。フォローして、DM を送って、確認を待つだけです。',
          orderNote: '必要なのはアカウントの UID だけです。パスワードは不要で、あなたのゲームにログインすることもありません。',
          altContact: '試す前に質問がありますか？まず IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> か、ゲーム内の <strong>(VNW) kbara (S514)</strong> にチャットしてください。',
          s1t: 'IG @kb4r4 をフォロー',
          s1p: 'まず Instagram アカウント <strong>@kb4r4</strong> をフォローしてください。それがボットを使う唯一の条件です。',
          s1btn: 'Instagram @kb4r4 を開く',
          s2t: 'DM を送信：please add &lt;UID&gt;',
          s2p: '@kb4r4 に <code>please add &lt;UID&gt;</code> という形式で DM を送ってください。例：<code>please add 1234567890123</code>。&lt;UID&gt; をあなたの Top Heroes アカウントの UID に置き換えてください。',
          s2btn: 'DM 形式をコピー',
          copyDmMsg: 'DM 形式をコピーしました。あとは UID を貼り付けるだけ',
          s3t: '確認を待つ',
          s3p: 'まずフォローが確認されます。確認されると、UID はすぐに処理・登録されます。デイリーレポートは Instagram の DM に無料で届きます。',
          donTitle: '役に立ちましたか？コーヒーをおごってください',
          donIntro: 'このボットは 100% 無料で、これからも無料です。役に立ったと感じて運営費を支援したい場合、チップは完全に任意です。必須ではなく、あなたのサービスに一切影響しません。',
          dc1t: 'QRIS',
          altQris: '任意のチップ用 QRIS コード',
          dc1p: 'どの銀行アプリや電子ウォレットでもスキャンできます。金額は自由、お気持ちで。',
          dc1note: 'ASEAN 諸国の場合、この QRIS はあなたの国の銀行アプリや電子ウォレットアプリでも直接スキャンできます。',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Solana ネットワーク上の USDC でクリプトチップを送ることもできます。送金手数料が安く、処理も高速です。',
          altUsdc: 'クリプトチップ用 Solana ネットワーク上の USDC ウォレットアドレスの QR コード',
          dc2btn: 'ウォレットアドレスをコピー',
          copyWalletMsg: 'USDC ウォレットアドレスをコピーしました',
          dc2note: 'USDC は必ず <strong>Solana ネットワーク</strong> 経由で送ってください。別のネットワーク経由で送ると資金を失う可能性があります。',
          qrCoverLabel: 'タップしてQRコードを表示',
          tipPickerAria: 'チップの方法を選択',
          faqTitle: 'よくある質問',

          q1: 'このボットは何ができますか？',
          a1: '毎日のウェブ Check-In Rewards Event と引き換えコードを自動で処理するボットサービスです。',
          q2: '私のアカウントは安全ですか？',
          a2: 'はい、リスクは非常に小さいです。これはゲーム公式ウェブ機能の自動化にすぎないからです。ボットはあなたが手動で行うことと全く同じことをします：公式サイトでの毎日のチェックイン受け取りと公式コードの引き換えです。ゲーム内には一切干渉せず、何も変更せず、必要なのは UID だけです。',
          q3: 'UID を共有しても安全ですか？',
          a3: 'はい、安全です。UID はストアページを開くため（毎日のチェックイン受け取りとコード引き換え）にしか使えません。UID ではゲームに入ったり、パスワードを変更したり、アイテムを移動したりすることはできません。ゲームログイン（Google/Facebook/Apple）はストア UID とは完全に別です。ボットがパスワードを求めることは決してありません。',
          q4: 'ボットは私のアカウントで何をしますか？',
          a4: '2つだけです：毎日のチェックイン受け取りと、公式ギフトコードの引き換えです。それ以外には一切触れません。',
          q6: 'どうやって登録しますか？',
          a6: 'IG @kb4r4 をフォローし、please add &lt;UID&gt; という形式で DM を送ってください。フォローが確認されると、UID はすぐに処理されます。支払いは一切ありません。',
          q7: '支払いは必要ですか？',
          a7: 'いいえ。このサービスは 100% 無料です。唯一の条件は IG @kb4r4 のフォローです。役に立ったと感じて支援したい場合は、チップセクションで QRIS（インドネシア）または USDC (Solana)（クリプトユーザー向け）で任意のチップを送れます。必須ではなく、あなたのサービスに影響しません。',
          q8: 'フォローを解除したり IG のユーザー名を変更したりするとどうなりますか？',
          a8: 'UID は警告なしに直ちにボットから削除されます。またボットを使いたい場合は？新しいユーザー名で再度フォローし、please add &lt;UID&gt; と DM して再登録してください。',
          q9: 'このサービスはいつまで続きますか？',
          a9: 'ボットが稼働中の限り、またはあなたがプレイをやめるまで。',
          q10: 'このボットの利用をやめるにはどうすればいいですか？',
          a10: '@kb4r4 に「please remove my uid」と DM するだけです。UID はすぐにボットから削除されます。後でまた使いたくなったら、「please add &lt;UID&gt;」と再度 DM してください。',
          q11: '登録 DM を送った後はどうなりますか？',
          a11: '簡単な質問が2つあります：（1）チェックインとコード引き換えの結果を毎日 DM で受け取りたいか、（2）そのレポートをどの言語で受け取りたいか。ご希望の言語でお答えください。その後、UID はすぐに処理されます。',
          footerText: 'Top Heroes デイリーウェブ Check-In Rewards Event &amp; 引き換えコード ボットサービス',
          scrollTopAria: 'トップへ戻る',
          copyOk: 'テキストをコピーしました',
          copyFail: 'テキストをコピーできませんでした'
        },
        zh: {
          heroTitle: '懒得每天登录和兑换代码？让 bot kbara 全部搞定',
          heroCopy: '用于 Daily Check-In &amp; Redeem Code 的自动机器人。此服务 100% 免费，只需关注 IG @kb4r4，结果报告会直接发送到你的 Instagram 私信，所有用户免费。',
          heroCta: '通过 Instagram DM 注册',
          heroSecondary: '查看工作原理 ↓',
          trustAria: '服务亮点',
          trust1: '网页版 Check-In Rewards Event',
          trust2: '监控最新代码',
          trust3: '通过 Instagram 通知',
          featTitle: '你的账号始终有人照看，无需额外日常操作。',
          featIntro: '三项主要工作，让你的每日领取和兑换代码保持正常进行。',
          f1t: '网页版 Daily Check-In Rewards Event',
          f1p: '每日领取会被定期处理，奖励就不容易错过。',
          f2t: '最新兑换代码',
          f2p: '每天从官方 Discord 监控新代码，然后在所有已注册账号上尝试兑换。',
          f3t: 'Instagram 私信通知',
          f3p: '结果摘要会通过私信发送给所有用户，免费，无套餐条件。',
          priceKicker: '无需密码',
          priceTitle: '免费、安全、只需关注',
          priceIntro: '没有价格，没有套餐。我们从不要求你的密码或游戏登录，唯一条件是关注我们的 Instagram。',
          pc1t: '唯一的要求',
          pc1p: '关注 IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>。就这么简单，无需付款，没有套餐，没有隐藏费用。',
          pc2t: '服务期限',
          pc2p: '只要机器人还在运行，或直到你停止游玩，服务就有效。你的 UID 每天都会被处理。',
          pc3t: '严格规则：取关 / 更改用户名',
          pc3p1: '当你取关或更改 IG 用户名时，你的 UID 会自动与机器人断开，不会有任何警告。',
          pc3p2: '改了 IG 用户名还想继续使用机器人？用新用户名重新关注，然后私信 <code>please add &lt;UID&gt;</code> 重新注册。',
          reportTitle: '每日报告示例',
          reportIntro: '每份报告都将签到和兑换代码的结果汇总在一条易读的消息中。滑动查看其他示例。',
          carPrevAria: '查看上一份报告',
          carNextAria: '查看下一份报告',
          carViewAria: '每日报告示例图库',
          dotsAria: '选择报告示例',
          dot1Aria: '显示报告 1',
          dot2Aria: '显示报告 2',
          dot3Aria: '显示报告 3',
                    dot4Aria: '显示报告 4',
          slide1Aria: '报告示例 1，共 4 个',
          slide2Aria: '报告示例 2，共 4 个',
          slide3Aria: '报告示例 3，共 4 个',
                    slide4Aria: '报告示例 4，共 4 个',
          altBjorn: 'Bjorn 账号的原始每日报告截图，显示每日签到结果和四个兑换代码',
          altKbara: 'Kbara 账号的原始每日报告截图，显示每日签到结果和两个兑换代码',
          altNight: 'Nightlord 账号的原始每日报告截图，显示两次每日签到结果和四个兑换代码',
          altKimz: 'Kimz 账号的原始每日报告截图，显示每日签到结果和四个兑换代码',
          swipeHint: '向左或向右滑动查看其他报告。',
          orderKicker: '注册',
          orderTitle: '3 步完成注册。',
          orderIntro: '无需填写表格，无需付款。只需关注、发送私信，然后等待验证。',
          orderNote: '我们只需要你的账号 UID，不需要密码，也不会登录你的游戏。',
          altContact: '试用前有问题？先在 IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> 或游戏内的 <strong>(VNW) kbara (S514)</strong> 聊聊。',
          s1t: '关注 IG @kb4r4',
          s1p: '先关注 Instagram 账号 <strong>@kb4r4</strong>，这是使用机器人的唯一要求。',
          s1btn: '打开 Instagram @kb4r4',
          s2t: '发送私信：please add &lt;UID&gt;',
          s2p: '按格式 <code>please add &lt;UID&gt;</code> 向 @kb4r4 发送私信。示例：<code>please add 1234567890123</code>。将 &lt;UID&gt; 替换为你的 Top Heroes 账号 UID。',
          s2btn: '复制私信格式',
          copyDmMsg: '私信格式已复制，只需粘贴你的 UID',
          s3t: '等待验证',
          s3p: '你的关注会先被验证。验证通过后，你的 UID 会立即被处理并注册，每日报告会免费发送到你的 Instagram 私信。',
          donTitle: '觉得有帮助？请我喝杯咖啡',
          donIntro: '这个机器人 100% 免费，并将一直免费。如果你觉得它有帮助并想支持其运营成本，小费完全自愿，不是必需的，也不会对你的服务产生任何影响。',
          dc1t: 'QRIS',
          altQris: '用于自愿小费的 QRIS 二维码',
          dc1p: '使用任何银行应用或电子钱包扫描。金额随意，量力而行。',
          dc1note: '对于东盟国家，此 QRIS 也可以直接使用你所在国家的银行应用或电子钱包应用扫描。',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: '你也可以通过 Solana 网络上的 USDC 用加密货币打赏，转账费用低，处理速度快。',
          altUsdc: '用于加密货币小费的 Solana 网络 USDC 钱包地址二维码',
          dc2btn: '复制钱包地址',
          copyWalletMsg: 'USDC 钱包地址已复制',
          dc2note: '请确保通过 <strong>Solana 网络</strong> 发送 USDC，通过其他网络发送可能导致你的资金丢失。',
          qrCoverLabel: '点击显示二维码',
          tipPickerAria: '选择打赏方式',
          faqTitle: '常见问题',

          q1: '这个机器人能做什么？',
          a1: '一项自动处理每日网页 Check-In Rewards Event 和兑换代码的机器人服务。',
          q2: '我的账号安全吗？',
          a2: '安全，风险非常小，因为这只是游戏官方网页功能的自动化。机器人做的和你手动做的完全一样：在官方网站领取每日签到奖励和兑换官方代码。绝不会进入游戏内部，不会更改任何东西，我们只需要你的 UID。',
          q3: '分享我的 UID 安全吗？',
          a3: '安全。UID 只能用于打开商店页面（每日签到领取和代码兑换）。UID 不能用于进入你的游戏、更改密码或转移物品。你的游戏登录（Google/Facebook/Apple）与商店 UID 完全分开。机器人从不要求任何密码。',
          q4: '机器人会对我的账号做什么？',
          a4: '只有两件事：领取每日签到和兑换官方礼品代码。不碰其他任何东西。',
          q6: '如何注册？',
          a6: '关注 IG @kb4r4，然后按格式 please add &lt;UID&gt; 发送私信。你的关注验证通过后，UID 会立即被处理，完全无需付款。',
          q7: '我需要付费吗？',
          a7: '不需要。此服务 100% 免费，唯一的要求是关注 IG @kb4r4。如果你觉得它有帮助并想支持，可以在小费区通过 QRIS（印度尼西亚）或 USDC (Solana)（加密货币用户）留下自愿小费。不是必需的，也不会影响你的服务。',
          q8: '如果我取关 / 更改 IG 用户名会怎样？',
          a8: '你的 UID 会立即从机器人中移除，不会有任何警告。想再次使用机器人？用新用户名重新关注，然后私信 please add &lt;UID&gt; 重新注册。',
          q9: '这项服务会持续多久？',
          a9: '只要机器人还在运行，或直到你停止游玩。',
          q10: '我该如何停止使用这个机器人？',
          a10: '只需私信 @kb4r4 发送：please remove my uid，你的 UID 会立即从机器人中移除。如果以后想再次使用，只需再次私信 please add &lt;UID&gt; 即可。',
          q11: '发送注册私信后会发生什么？',
          a11: '你会被问两个简单的问题：（1）你是否希望每天通过私信收到签到和兑换码结果的报告，（2）你希望报告使用哪种语言，直接用你自己的语言回答即可。之后，你的 UID 就会立即被处理。',
          footerText: 'Top Heroes 每日网页 Check-In Rewards Event &amp; 兑换代码机器人服务',
          scrollTopAria: '回到顶部',
          copyOk: '文本已复制',
          copyFail: '无法复制文本'
        },
        fr: {
          heroTitle: "Trop paresseux pour vous connecter et utiliser les codes chaque jour ? Laissez le bot kbara tout gérer",
          heroCopy: "Un bot automatique pour le Daily Check-In &amp; les Redeem Codes. Ce service est 100 % GRATUIT. Suivez simplement l'IG @kb4r4, et les rapports de résultats sont envoyés directement dans vos DM Instagram, gratuitement pour tous les utilisateurs.",
          heroCta: "S'inscrire via DM Instagram",
          heroSecondary: 'Voir comment ça marche ↓',
          trustAria: "Points forts du service",
          trust1: "Check-In Rewards Event sur le web",
          trust2: "Derniers codes surveillés",
          trust3: "Notifications via Instagram",
          featTitle: "Votre compte reste pris en charge, sans routine supplémentaire.",
          featIntro: "Trois tâches principales qui gardent vos demandes quotidiennes et vos codes d'échange sur la bonne voie.",
          f1t: "Daily Check-In Rewards Event sur le web",
          f1p: "Les demandes quotidiennes sont traitées régulièrement, afin que les récompenses soient moins susceptibles d'être manquées.",
          f2t: "Derniers codes d'échange",
          f2p: "Les nouveaux codes sont surveillés quotidiennement depuis le Discord officiel, puis essayés sur tous les comptes enregistrés.",
          f3t: "Notifications par DM Instagram",
          f3p: "Les résumés des résultats sont envoyés par DM à tous les utilisateurs, gratuitement, sans condition de forfait.",
          priceKicker: "Pas de mot de passe requis",
          priceTitle: "Gratuit, sûr, un simple abonnement suffit",
          priceIntro: "Pas de prix, pas de forfaits. Nous ne demandons jamais votre mot de passe ni votre connexion au jeu. La seule condition est de suivre notre Instagram.",
          pc1t: "La seule condition",
          pc1p: "Suivez l'IG <a href=\"https://instagram.com/kb4r4\" target=\"_blank\" rel=\"noopener noreferrer\">@kb4r4</a>. C'est tout. Aucun paiement, aucun forfait, aucun frais caché.",
          pc2t: "Durée du service",
          pc2p: "Actif tant que le bot fonctionne, ou jusqu'à ce que vous arrêtiez de jouer. Votre UID continue d'être traité chaque jour.",
          pc3t: "Règle stricte : désabonnement / changement de nom d'utilisateur",
          pc3p1: "Lorsque vous vous désabonnez ou changez votre nom d'utilisateur IG, votre UID est automatiquement déconnecté du bot sans avertissement.",
          pc3p2: "Vous avez changé votre nom d'utilisateur IG et voulez réutiliser le bot ? Abonnez-vous à nouveau avec votre nouveau nom d'utilisateur, puis envoyez un DM <code>please add &lt;UID&gt;</code> pour vous réinscrire.",
          reportTitle: "Exemples de rapports quotidiens",
          reportIntro: "Chaque rapport résume les résultats des check-in et des codes d'échange dans un seul message facile à lire. Balayez pour voir d'autres exemples.",
          carPrevAria: "Voir le rapport précédent",
          carNextAria: "Voir le rapport suivant",
          carViewAria: "Galerie d'exemples de rapports quotidiens",
          dotsAria: "Choisir un exemple de rapport",
          dot1Aria: "Afficher le rapport 1",
          dot2Aria: "Afficher le rapport 2",
          dot3Aria: "Afficher le rapport 3",
                    dot4Aria: "Afficher le rapport 4",
          slide1Aria: "Exemple de rapport 1 sur 4",
          slide2Aria: "Exemple de rapport 2 sur 4",
          slide3Aria: "Exemple de rapport 3 sur 4",
                    slide4Aria: "Exemple de rapport 4 sur 4",
          altBjorn: "Capture d'écran d'un rapport quotidien original du compte Bjorn montrant les résultats du check-in quotidien et quatre codes d'échange",
          altKbara: "Capture d'écran d'un rapport quotidien original du compte Kbara montrant les résultats du check-in quotidien et deux codes d'échange",
          altNight: "Capture d'écran d'un rapport quotidien original du compte Nightlord montrant deux résultats de check-in quotidien et quatre codes d'échange",
          altKimz: "Capture d'écran d'un rapport quotidien original du compte Kimz montrant les résultats du check-in quotidien et quatre codes d'échange",
          swipeHint: "Balayez vers la gauche ou la droite pour voir d'autres rapports.",
          orderKicker: "Inscription",
          orderTitle: "Inscrivez-vous en 3 étapes.",
          orderIntro: "Aucun formulaire et aucun paiement. Suivez, envoyez un DM, puis attendez la vérification.",
          orderNote: "Nous avons seulement besoin de l'UID de votre compte : aucun mot de passe, et aucune connexion à votre jeu.",
          altContact: "Une question avant d'essayer ? Discutez d'abord sur IG <a href=\"https://instagram.com/kb4r4\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>@kb4r4</strong></a> ou avec <strong>(VNW) kbara (S514)</strong> dans le jeu.",
          s1t: "Suivez l'IG @kb4r4",
          s1p: "Suivez d'abord le c<strong>@kb4r4</strong>. C'est la seule condition pour utiliser le bot.",
          s1btn: "Ouvrir Instagram @kb4r4",
          s2t: "Envoyez un DM : please add &lt;UID&gt;",
          s2p: "Envoyez un DM à @kb4r4 au format <code>please add &lt;UID&gt;</code>. Exemple : <code>please add 1234567890123</code>. Remplacez &lt;UID&gt; par l'UID de votre compte Top Heroes.",
          s2btn: "Copier le format du DM",
          copyDmMsg: "Format du DM copié. Collez simplement votre UID",
          s3t: "Attendez la vérification",
          s3p: "Votre abonnement est d'abord vérifié. Une fois vérifié, votre UID est traité et enregistré immédiatement. Les rapports quotidiens sont envoyés dans vos DM Instagram, gratuitement.",
          donTitle: "Ça vous a aidé ? Offrez-moi un café",
          donIntro: "Ce bot est 100 % gratuit et le restera. Si vous l'avez trouvé utile et souhaitez soutenir ses frais de fonctionnement, un pourboire est entièrement volontaire. Non requis, et il n'affecte en rien votre service.",
          dc1t: 'QRIS',
          altQris: "Code QRIS pour un pourboire volontaire",
          dc1p: "Scannez avec n'importe quelle application bancaire ou portefeuille électronique. Montant libre, selon votre souhait.",
          dc1note: "Pour les pays de l'ASEAN, ce QRIS peut aussi être scanné directement avec l'application bancaire ou de portefeuille électronique de votre pays.",
          dc2t: "Crypto: USDC (Solana)",
          dc2p: "Vous pouvez aussi donner un pourboire en crypto via USDC sur le réseau Solana. Frais de transfert faibles et traitement rapide.",
          altUsdc: "Code QR de l'adresse du portefeuille USDC sur le réseau Solana pour les pourboires crypto",
          dc2btn: "Copier l'adresse du portefeuille",
          copyWalletMsg: "Adresse du portefeuille USDC copiée",
          dc2note: "Assurez-vous d'envoyer les USDC via le <strong>réseau Solana</strong>. Un envoi via un autre réseau peut entraîner la perte de vos fonds.",
          qrCoverLabel: "Touchez pour afficher le code QR",
          tipPickerAria: "Choisissez un mode de pourboire",
          faqTitle: "Questions fréquentes",

          q1: "Que peut faire ce bot ?",
          a1: "Un service de bot qui gère automatiquement le Check-In Rewards Event quotidien sur le web et les codes d'échange.",
          q2: "Mon compte est-il en sécurité ?",
          a2: "Oui, le risque est très faible, car il s'agit simplement de l'automatisation des fonctionnalités web officielles du jeu. Le bot fait exactement ce que vous feriez à la main : les connexions quotidiennes et l'échange de codes officiels sur le site officiel. Il n'entre jamais dans le jeu, ne modifie rien, et nous n'avons besoin que de votre UID.",
          q3: "Mon UID peut-il être partagé en toute sécurité ?",
          a3: "Oui, c'est sûr. Un UID ne peut servir qu'à ouvrir la page de la boutique (demandes de check-in quotidien et utilisation de codes). Un UID ne permet pas d'entrer dans votre jeu, de changer votre mot de passe ou de déplacer des objets. Votre connexion au jeu (Google/Facebook/Apple) est totalement distincte de votre UID de boutique. Le bot ne demande jamais aucun mot de passe.",
          q4: "Que fait le bot avec mon compte ?",
          a4: "Deux choses seulement : réclamer les check-in quotidiens et utiliser les codes cadeaux officiels. Il ne touche à rien d'autre.",
          q6: "Comment m'inscrire ?",
          a6: "Suivez l'IG @kb4r4, puis envoyez un DM au format please add &lt;UID&gt;. Une fois votre abonnement vérifié, votre UID est traité immédiatement, sans aucun paiement.",
          q7: "Dois-je payer ?",
          a7: "Non. Ce service est 100 % gratuit. La seule condition est de suivre l'IG @kb4r4. Si vous l'avez trouvé utile et souhaitez le soutenir, vous pouvez laisser un pourboire volontaire via QRIS (Indonésie) ou USDC (Solana) pour les utilisateurs crypto dans la section pourboire. Non requis, et sans effet sur votre service.",
          q8: "Que se passe-t-il si je me désabonne / change mon nom d'utilisateur IG ?",
          a8: "Votre UID est retiré du bot immédiatement, sans avertissement. Vous voulez réutiliser le bot ? Abonnez-vous à nouveau avec votre nouveau nom d'utilisateur, puis envoyez un DM please add &lt;UID&gt; pour vous réinscrire.",
          q9: "Combien de temps dure ce service ?",
          a9: "Tant que le bot fonctionne, ou jusqu'à ce que vous arrêtiez de jouer.",
          q10: "Comment arrêter d'utiliser ce bot ?",
          a10: "Envoyez simplement un DM à @kb4r4 avec : please remove my uid. Votre UID sera retiré du bot immédiatement. Si vous souhaitez l'utiliser à nouveau plus tard, renvoyez simplement un DM please add &lt;UID&gt;.",
          q11: "Que se passe-t-il après l'envoi du DM d'inscription ?",
          a11: "On vous posera deux petites questions : (1) souhaitez-vous recevoir un rapport quotidien de vos résultats de check-in et de codes échangés par DM, et (2) dans quelle langue souhaitez-vous ces rapports. Répondez simplement dans votre langue. Ensuite, votre UID est traité immédiatement.",
          footerText: "Service de bot Top Heroes pour le Check-In Rewards Event quotidien sur le web &amp; les codes d'échange",
          scrollTopAria: "Retour en haut",
          copyOk: "Texte copié",
          copyFail: "Impossible de copier le texte"
        },
        pt: {
          heroTitle: 'Com preguiça de fazer login e resgatar códigos todos os dias? Deixe o bot kbara cuidar de tudo',
          heroCopy: 'Um bot automático para Daily Check-In &amp; Redeem Codes. Este serviço é 100% GRATUITO, basta seguir o IG @kb4r4, e os relatórios de resultados são enviados direto para suas DMs do Instagram, grátis para todos os usuários.',
          heroCta: 'Cadastre-se pelo DM do Instagram',
          heroSecondary: 'Veja como funciona ↓',
          trustAria: 'Destaques do serviço',
          trust1: 'Check-In Rewards Event na web',
          trust2: 'Códigos mais recentes monitorados',
          trust3: 'Notificações pelo Instagram',
          featTitle: 'Sua conta continua cuidada, sem rotina extra.',
          featIntro: 'Três tarefas principais que mantêm suas recompensas diárias e códigos de resgate em dia.',
          f1t: 'Daily Check-In Rewards Event na web',
          f1p: 'As recompensas diárias são processadas rotineiramente, para que sejam menos prováveis de serem perdidas.',
          f2t: 'Códigos de resgate mais recentes',
          f2p: 'Novos códigos são monitorados diariamente no Discord oficial e depois testados em todas as contas cadastradas.',
          f3t: 'Notificações por DM no Instagram',
          f3p: 'Resumos dos resultados são enviados por DM a todos os usuários, grátis, sem condições de pacote.',
          priceKicker: 'Sem senha necessária',
          priceTitle: 'Grátis, seguro, só precisa seguir',
          priceIntro: 'Sem preços, sem pacotes. Nunca pedimos sua senha ou login do jogo. O único requisito é seguir nosso Instagram.',
          pc1t: 'O único requisito',
          pc1p: 'Siga o IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>. Só isso. Sem pagamento, sem pacotes, sem taxas ocultas.',
          pc2t: 'Período do serviço',
          pc2p: 'Ativo enquanto o bot estiver rodando, ou até você parar de jogar. Seu UID continua sendo processado todos os dias.',
          pc3t: 'Regra rígida: deixar de seguir / mudar o nome de usuário',
          pc3p1: 'Quando você deixa de seguir ou muda seu nome de usuário do IG, seu UID é desconectado automaticamente do bot, sem aviso.',
          pc3p2: 'Mudou seu nome de usuário do IG e quer usar o bot de novo? Siga novamente com seu novo nome de usuário e envie uma DM <code>please add &lt;UID&gt;</code> para se cadastrar de novo.',
          reportTitle: 'Exemplos de relatórios diários',
          reportIntro: 'Cada relatório resume os resultados de check-in e códigos de resgate em uma mensagem fácil de ler. Deslize para ver outros exemplos.',
          carPrevAria: 'Ver relatório anterior',
          carNextAria: 'Ver próximo relatório',
          carViewAria: 'Galeria de exemplos de relatórios diários',
          dotsAria: 'Escolher um exemplo de relatório',
          dot1Aria: 'Mostrar relatório 1',
          dot2Aria: 'Mostrar relatório 2',
          dot3Aria: 'Mostrar relatório 3',
                    dot4Aria: 'Mostrar relatório 4',
          slide1Aria: 'Exemplo de relatório 1 de 4',
          slide2Aria: 'Exemplo de relatório 2 de 4',
          slide3Aria: 'Exemplo de relatório 3 de 4',
                    slide4Aria: 'Exemplo de relatório 4 de 4',
          altBjorn: 'Captura de tela de um relatório diário original da conta Bjorn mostrando os resultados do check-in diário e quatro códigos de resgate',
          altKbara: 'Captura de tela de um relatório diário original da conta Kbara mostrando os resultados do check-in diário e dois códigos de resgate',
          altNight: 'Captura de tela de um relatório diário original da conta Nightlord mostrando dois resultados de check-in diário e quatro códigos de resgate',
          altKimz: 'Captura de tela de um relatório diário original da conta Kimz mostrando os resultados do check-in diário e quatro códigos de resgate',
          swipeHint: 'Deslize para a esquerda ou direita para ver outros relatórios.',
          orderKicker: 'Cadastro',
          orderTitle: 'Cadastre-se em 3 passos.',
          orderIntro: 'Sem formulários e sem pagamento. Basta seguir, enviar uma DM e aguardar a verificação.',
          orderNote: 'Precisamos apenas do UID da sua conta: sem senha, e sem fazer login no seu jogo.',
          altContact: 'Tem alguma dúvida antes de experimentar? Converse primeiro no IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> ou com <strong>(VNW) kbara (S514)</strong> no jogo.',
          s1t: 'Siga o IG @kb4r4',
          s1p: 'Siga primeiro a conta do Instagram <strong>@kb4r4</strong>. É o único requisito para usar o bot.',
          s1btn: 'Abrir o Instagram @kb4r4',
          s2t: 'Envie uma DM: please add &lt;UID&gt;',
          s2p: 'Envie uma DM para @kb4r4 no formato <code>please add &lt;UID&gt;</code>. Exemplo: <code>please add 1234567890123</code>. Substitua &lt;UID&gt; pelo UID da sua conta Top Heroes.',
          s2btn: 'Copiar formato da DM',
          copyDmMsg: 'Formato da DM copiado. É só colar o seu UID',
          s3t: 'Aguarde a verificação',
          s3p: 'Seu follow é verificado primeiro. Depois de verificado, seu UID é processado e cadastrado na hora. Os relatórios diários são enviados para suas DMs do Instagram, grátis.',
          donTitle: 'Ajudou? Me pague um café',
          donIntro: 'Este bot é 100% gratuito e continuará gratuito. Se ele te ajudou e você quer apoiar os custos de operação, uma gorjeta é totalmente voluntária. Não é obrigatória e não afeta em nada o seu serviço.',
          dc1t: 'QRIS',
          altQris: 'Código QRIS para uma gorjeta voluntária',
          dc1p: 'Escaneie com qualquer aplicativo de banco ou carteira digital. Qualquer valor, como você quiser.',
          dc1note: 'Para países da ASEAN, este QRIS também pode ser escaneado diretamente usando o aplicativo de banco ou carteira digital do seu país.',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Você também pode dar gorjeta em crypto via USDC na rede Solana. Taxas de transferência baixas e processamento rápido.',
          altUsdc: 'Código QR do endereço da carteira USDC na rede Solana para gorjetas crypto',
          dc2btn: 'Copiar endereço da carteira',
          copyWalletMsg: 'Endereço da carteira USDC copiado',
          dc2note: 'Certifique-se de enviar USDC pela <strong>rede Solana</strong>. Enviar por outra rede pode fazer você perder seus fundos.',
          qrCoverLabel: 'Toque para mostrar o código QR',
          tipPickerAria: 'Escolha um método de gorjeta',
          faqTitle: 'Perguntas frequentes',

          q1: 'O que este bot pode fazer?',
          a1: 'Um serviço de bot que cuida automaticamente do Check-In Rewards Event diário na web e dos códigos de resgate.',
          q2: 'Minha conta está segura?',
          a2: 'Sim, o risco é muito pequeno, porque isto é apenas automação dos recursos web oficiais do próprio jogo. O bot faz exatamente o que você faria manualmente: check-ins diários e resgate de códigos oficiais no site oficial. Nunca entra no jogo, não muda nada, e só precisamos do seu UID.',
          q3: 'É seguro compartilhar meu UID?',
          a3: 'Sim, é seguro. Um UID só pode ser usado para abrir a página da loja (recompensas de check-in diário e resgate de códigos). Um UID não pode ser usado para entrar no seu jogo, mudar sua senha ou mover itens. Seu login do jogo (Google/Facebook/Apple) é totalmente separado do seu UID da loja. O bot nunca pede nenhuma senha.',
          q4: 'O que o bot faz com a minha conta?',
          a4: 'Apenas duas coisas: resgatar os check-ins diários e resgatar códigos de presente oficiais. Não mexe em mais nada.',
          q6: 'Como me cadastro?',
          a6: 'Siga o IG @kb4r4 e envie uma DM no formato please add &lt;UID&gt;. Depois que seu follow for verificado, seu UID é processado na hora, sem nenhum pagamento.',
          q7: 'Preciso pagar?',
          a7: 'Não. Este serviço é 100% gratuito. O único requisito é seguir o IG @kb4r4. Se ele te ajudou e você quer apoiar, pode deixar uma gorjeta voluntária via QRIS (Indonésia) ou USDC (Solana) para usuários crypto na seção de gorjetas. Não é obrigatório e não afeta o seu serviço.',
          q8: 'O que acontece se eu deixar de seguir / mudar meu nome de usuário do IG?',
          a8: 'Seu UID é removido do bot imediatamente, sem aviso. Quer usar o bot de novo? Siga novamente com seu novo nome de usuário e envie uma DM please add &lt;UID&gt; para se cadastrar de novo.',
          q9: 'Por quanto tempo dura este serviço?',
          a9: 'Enquanto o bot estiver rodando, ou até você parar de jogar.',
          q10: 'Como paro de usar este bot?',
          a10: 'Basta enviar uma DM para @kb4r4 com: please remove my uid. Seu UID será removido do bot imediatamente. Se quiser usar de novo depois, basta enviar uma DM please add &lt;UID&gt; novamente.',
          q11: 'O que acontece depois que eu envio a DM de cadastro?',
          a11: 'Você receberá duas perguntas rápidas: (1) se você quer receber um relatório diário dos seus resultados de check-in e códigos resgatados por DM, e (2) em qual idioma você quer esses relatórios. Basta responder no seu próprio idioma. Depois disso, seu UID é processado na hora.',
          footerText: 'Serviço de bot de Check-In Rewards Event diário na web &amp; códigos de resgate do Top Heroes',
          scrollTopAria: 'Voltar ao topo',
          copyOk: 'Texto copiado',
          copyFail: 'Não foi possível copiar o texto'
        },
        ko: {
          heroTitle: '매일 로그인하고 코드를 입력하기 귀찮으신가요? bot kbara가 전부 처리해 드립니다',
          heroCopy: 'Daily Check-In &amp; Redeem Code를 위한 자동 봇입니다. 이 서비스는 100% 무료입니다. IG @kb4r4를 팔로우하기만 하면 결과 보고서가 Instagram DM으로 바로 전송되며, 모든 사용자가 무료로 이용할 수 있습니다.',
          heroCta: 'Instagram DM으로 가입하기',
          heroSecondary: '작동 방식 보기 ↓',
          trustAria: '서비스 특징',
          trust1: '웹에서 진행되는 Check-In Rewards Event',
          trust2: '최신 코드 모니터링',
          trust3: 'Instagram으로 알림 전송',
          featTitle: '추가 루틴 없이 계정이 항상 관리됩니다.',
          featIntro: '일일 보상 수령과 리딤 코드를 순조롭게 유지하는 세 가지 주요 작업입니다.',
          f1t: '웹 Daily Check-In Rewards Event',
          f1p: '일일 보상이 정기적으로 처리되어 보상을 놓칠 일이 줄어듭니다.',
          f2t: '최신 리딤 코드',
          f2p: '공식 Discord에서 매일 새 코드를 모니터링한 뒤 등록된 모든 계정에 시도됩니다.',
          f3t: 'Instagram DM 알림',
          f3p: '결과 요약이 모든 사용자에게 DM으로 전송됩니다. 무료이며 패키지 조건이 없습니다.',
          priceKicker: '비밀번호 불필요',
          priceTitle: '무료, 안전, 팔로우만 하면 끝',
          priceIntro: '가격도 패키지도 없습니다. 비밀번호나 게임 로그인을 절대 요구하지 않습니다. 유일한 조건은 Instagram을 팔로우하는 것입니다.',
          pc1t: '유일한 조건',
          pc1p: 'IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer">@kb4r4</a>를 팔로우하세요. 그게 전부입니다. 결제 없음, 패키지 없음, 숨은 요금 없음.',
          pc2t: '서비스 기간',
          pc2p: '봇이 작동 중이거나, 또는 플레이를 멈출 때까지 유효합니다. UID는 매일 계속 처리됩니다.',
          pc3t: '엄격한 규칙: 언팔로우 / 사용자 이름 변경',
          pc3p1: '언팔로우하거나 IG 사용자 이름을 변경하면 UID가 경고 없이 봇에서 자동으로 연결 해제됩니다.',
          pc3p2: 'IG 사용자 이름을 바꿨는데 봇을 다시 쓰고 싶으신가요? 새 사용자 이름으로 다시 팔로우한 뒤 <code>please add &lt;UID&gt;</code>라고 DM을 보내 다시 가입하세요.',
          reportTitle: '일일 보고서 예시',
          reportIntro: '모든 보고서는 체크인과 리딤 코드 결과를 읽기 쉬운 하나의 메시지로 요약합니다. 밀어서 다른 예시를 확인하세요.',
          carPrevAria: '이전 보고서 보기',
          carNextAria: '다음 보고서 보기',
          carViewAria: '일일 보고서 예시 갤러리',
          dotsAria: '보고서 예시 선택',
          dot1Aria: '보고서 1 표시',
          dot2Aria: '보고서 2 표시',
          dot3Aria: '보고서 3 표시',
                    dot4Aria: '보고서 4 표시',
          slide1Aria: '보고서 예시 1/4',
          slide2Aria: '보고서 예시 2/4',
          slide3Aria: '보고서 예시 3/4',
                    slide4Aria: '보고서 예시 4/4',
          altBjorn: 'Bjorn 계정의 일일 체크인 결과와 리딤 코드 4개를 보여주는 실제 일일 보고서 스크린샷',
          altKbara: 'Kbara 계정의 일일 체크인 결과와 리딤 코드 2개를 보여주는 실제 일일 보고서 스크린샷',
          altNight: 'Nightlord 계정의 일일 체크인 결과 2개와 리딤 코드 4개를 보여주는 실제 일일 보고서 스크린샷',
          altKimz: 'Kimz 계정의 일일 체크인 결과와 리딤 코드 4개를 보여주는 실제 일일 보고서 스크린샷',
          swipeHint: '좌우로 밀어서 다른 보고서를 확인하세요.',
          orderKicker: '가입',
          orderTitle: '3단계로 가입하세요.',
          orderIntro: '양식도 결제도 없습니다. 팔로우하고 DM을 보낸 뒤 확인을 기다리기만 하면 됩니다.',
          orderNote: '필요한 것은 계정 UID뿐입니다. 비밀번호도, 게임 로그인도 필요 없습니다.',
          altContact: '시작하기 전에 궁금한 점이 있나요? 먼저 IG <a href="https://instagram.com/kb4r4" target="_blank" rel="noopener noreferrer"><strong>@kb4r4</strong></a> 또는 게임 내 <strong>(VNW) kbara (S514)</strong>에게 채팅하세요.',
          s1t: 'IG @kb4r4 팔로우',
          s1p: '먼저 Instagram 계정 <strong>@kb4r4</strong>를 팔로우하세요. 봇 이용을 위한 유일한 조건입니다.',
          s1btn: 'Instagram @kb4r4 열기',
          s2t: 'DM 보내기: please add &lt;UID&gt;',
          s2p: '@kb4r4에게 <code>please add &lt;UID&gt;</code> 형식으로 DM을 보내세요. 예: <code>please add 1234567890123</code>. &lt;UID&gt;를 본인의 Top Heroes 계정 UID로 바꾸세요.',
          s2btn: 'DM 형식 복사',
          copyDmMsg: 'DM 형식이 복사되었습니다. UID만 붙여넣으세요',
          s3t: '확인 대기',
          s3p: '팔로우가 먼저 확인됩니다. 확인이 완료되면 UID가 바로 처리 및 등록됩니다. 일일 보고서는 Instagram DM으로 무료로 전송됩니다.',
          donTitle: '도움이 되셨나요? 커피 한 잔 사주세요',
          donIntro: '이 봇은 100% 무료이며 앞으로도 무료입니다. 도움이 되었다고 느끼고 운영비를 응원하고 싶다면, 후원은 전적으로 자발적입니다. 필수가 아니며 서비스에 어떤 영향도 주지 않습니다.',
          dc1t: 'QRIS',
          altQris: '자발적 후원용 QRIS 코드',
          dc1p: '어떤 은행 앱이나 전자지갑으로든 스캔하세요. 금액은 원하는 만큼 자유롭게.',
          dc1note: 'ASEAN 국가의 경우, 이 QRIS는 자국의 은행 앱이나 전자지갑 앱으로도 바로 스캔할 수 있습니다.',
          dc2t: 'Crypto: USDC (Solana)',
          dc2p: 'Solana 네트워크의 USDC로 암호화폐 후원을 할 수도 있습니다. 전송 수수료가 낮고 처리가 빠릅니다.',
          altUsdc: '암호화폐 후원용 Solana 네트워크 USDC 지갑 주소 QR 코드',
          dc2btn: '지갑 주소 복사',
          copyWalletMsg: 'USDC 지갑 주소가 복사되었습니다',
          dc2note: 'USDC는 반드시 <strong>Solana 네트워크</strong>로 보내세요. 다른 네트워크로 보내면 자금을 잃을 수 있습니다.',
          qrCoverLabel: '탭하여 QR 코드 보기',
          tipPickerAria: '팁 방법 선택',
          faqTitle: '자주 묻는 질문',

          q1: '이 봇은 무엇을 할 수 있나요?',
          a1: '매일 웹 Check-In Rewards Event와 리딤 코드를 자동으로 처리하는 봇 서비스입니다.',
          q2: '제 계정은 안전한가요?',
          a2: '네 , 위험이 매우 낮습니다. 이것은 게임의 공식 웹 기능을 자동화한 것에 불과하기 때문입니다. 봇은 직접 하시는 것과 정확히 같은 일을 합니다: 공식 사이트에서 매일 체크인 보상을 받고 공식 코드를 교환합니다. 게임 내부에는 절대 들어가지 않고, 아무것도 변경하지 않으며, UID만 필요합니다.',
          q3: 'UID를 공유해도 안전한가요?',
          a3: '네, 안전합니다. UID는 스토어 페이지를 여는 용도(일일 체크인 수령 및 코드 교환)로만 사용할 수 있습니다. UID로는 게임에 접속하거나, 비밀번호를 바꾸거나, 아이템을 옮길 수 없습니다. 게임 로그인(Google/Facebook/Apple)은 스토어 UID와 완전히 분리되어 있습니다. 봇은 어떤 비밀번호도 절대 요구하지 않습니다.',
          q4: '봇이 제 계정으로 무엇을 하나요?',
          a4: '두 가지만 합니다: 일일 체크인 수령과 공식 기프트 코드 교환입니다. 그 외에는 아무것도 건드리지 않습니다.',
          q6: '어떻게 가입하나요?',
          a6: 'IG @kb4r4를 팔로우한 뒤 please add &lt;UID&gt; 형식으로 DM을 보내세요. 팔로우가 확인되면 UID가 바로 처리됩니다. 결제는 전혀 없습니다.',
          q7: '비용을 내야 하나요?',
          a7: '아니요. 이 서비스는 100% 무료입니다. 유일한 조건은 IG @kb4r4 팔로우입니다. 도움이 되었다고 느끼고 응원하고 싶다면, 후원 섹션에서 QRIS(인도네시아) 또는 USDC(Solana, 암호화폐 사용자용)로 자발적 후원을 남길 수 있습니다. 필수가 아니며 서비스에 영향을 주지 않습니다.',
          q8: '언팔로우하거나 IG 사용자 이름을 바꾸면 어떻게 되나요?',
          a8: 'UID가 경고 없이 즉시 봇에서 제거됩니다. 봇을 다시 쓰고 싶으신가요? 새 사용자 이름으로 다시 팔로우한 뒤 please add &lt;UID&gt;라고 DM을 보내 다시 가입하세요.',
          q9: '이 서비스는 얼마나 지속되나요?',
          a9: '봇이 작동 중이거나, 또는 플레이를 멈출 때까지입니다.',
          q10: '이 봇 사용을 중단하려면 어떻게 해야 하나요?',
          a10: '@kb4r4에게 please remove my uid 라고 DM을 보내기만 하면 됩니다. UID가 봇에서 즉시 제거됩니다. 나중에 다시 사용하고 싶으면 please add &lt;UID&gt; 라고 다시 DM을 보내주세요.',
          q11: '등록 DM을 보낸 후에는 어떻게 되나요?',
          a11: '두 가지 간단한 질문을 받게 됩니다: (1) 체크인과 코드 교환 결과를 매일 DM으로 보고받고 싶은지, (2) 그 보고서를 어떤 언어로 받고 싶은지, 원하는 언어로 답해 주세요. 그 후 UID가 즉시 처리됩니다.',
          footerText: 'Top Heroes 일일 웹 Check-In Rewards Event &amp; 리딤 코드 봇 서비스',
          scrollTopAria: '맨 위로 돌아가기',
          copyOk: '텍스트가 복사되었습니다',
          copyFail: '텍스트를 복사할 수 없습니다'
        }
      };
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
        var dict = translations[lang];
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
          if (saved && (saved === 'en' || translations[saved])) return saved;
        } catch (e) {}
        var nav = (navigator.language || 'en').split('-')[0].toLowerCase();
        if (nav === 'tl') nav = 'fil';
        return translations[nav] ? nav : 'en';
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
      langOptions.forEach(function (opt) {
        opt.addEventListener('click', function () {
          var chosen = opt.getAttribute('data-lang');
          setLanguage(chosen);
          try { localStorage.setItem('claimdaily:lang', chosen); } catch (e) {}
          closeLangMenu();
          langToggle.focus();
        });
      });
      document.addEventListener('click', function (event) {
        if (!langMenu.hidden && !event.target.closest('.lang-switch')) closeLangMenu();
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !langMenu.hidden) { closeLangMenu(); langToggle.focus(); }
      });
      setLanguage(currentLang);

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
          var activeDict = translations[currentLang];
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
