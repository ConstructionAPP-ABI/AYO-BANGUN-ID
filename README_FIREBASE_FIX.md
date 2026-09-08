# Firebase Fix Ayo Bangun Construction

Perbaikan Firebase:
- Menggunakan Firebase Anonymous Authentication sebagai user internal.
- Tidak membutuhkan akun Firebase untuk setiap pengguna aplikasi.
- User aplikasi tetap dikelola sendiri oleh aplikasi melalui tabel user lokal.
- Data proyek tetap tersinkron antar device melalui Firebase Realtime Database.
- Setiap device memiliki Firebase UID anonim untuk audit dan identitas koneksi.

Setup:
1. Aktifkan Firebase Realtime Database.
2. Aktifkan Firebase Authentication > Sign-in method > Anonymous.
3. Pastikan Firebase Database Rules mengizinkan akses sesuai kebutuhan aplikasi.
4. Masukkan konfigurasi Firebase pada aplikasi.

Arsitektur:
- Firebase Anonymous User = identitas koneksi/device.
- User aplikasi = akun internal yang dibuat dan diatur aplikasi.
- Realtime Database = sumber sinkronisasi data antar device.

File:
- firebase-config.js
- firebase-auth.js
- firebase-db.js
- firebase-storage.js
