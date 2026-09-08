# Ayo Bangun Construction V6 Production

## Deskripsi

Ayo Bangun Construction adalah aplikasi manajemen proyek konstruksi berbasis PWA yang digunakan untuk mengelola banyak proyek, tenaga kerja, material, progress pekerjaan, opname, dan laporan proyek.

Versi V6 merupakan pengembangan dari versi sebelumnya dengan fokus:
- kesiapan produksi
- stabilitas Firebase
- struktur database modular
- offline queue
- persiapan Firebase Authentication
- persiapan Firebase Storage


## Fitur Utama

### Multi Project

Setiap proyek mempunyai data terpisah:

- Data proyek
- SPK/Kontrak
- Tenaga kerja
- Material
- Progress
- Opname
- Dokumentasi
- Laporan


## Role User

### Owner

Akses penuh:

- Membuat proyek
- Menghapus proyek
- Mengatur user
- Melihat semua laporan
- Pengaturan sistem


### Admin

Operasional:

- Absensi
- Material
- Progress
- Laporan
- Validasi opname


### Supervisor/Mandor

Permission dapat dipilih:

- Dashboard
- Absensi
- Material
- Progress
- Laporan
- Catatan pekerjaan


## Struktur Firebase

```
Firebase Database

users/
projects/
contracts/
materials/
attendance/
progress/
opname/
reports/
documents/
```


## Firebase Setup

1. Buat project Firebase.
2. Aktifkan:
   - Authentication
   - Realtime Database
   - Storage

3. Masukkan Firebase Config pada menu pengaturan aplikasi.


## Deployment PWA

File utama:

```
index.html
logo-ayo-bangun.jpeg
manifest.json
service-worker.js
README.md
```


Deploy:

- GitHub Pages
- Firebase Hosting
- Netlify
- Vercel


## Android Installation

Chrome Android:

1. Buka alamat aplikasi.
2. Pilih menu browser.
3. Pilih Install App / Add to Home Screen.


## Backup

Data dapat dikembangkan menggunakan:

- Firebase Backup
- Export JSON
- Export CSV


## Roadmap

### V6
- Firebase production foundation
- Offline queue
- Storage preparation
- Permission system


### V7
- Firebase Authentication penuh
- Upload foto proyek
- Upload dokumen kontrak
- PDF report generator


### V8
- APK Android
- Push notification
- Dashboard analytics


## Default Development Account

Owner:
```
username: owner
password: owner123
```

Admin:
```
username: admin
password: 0000
```

Mandor:
```
username: mandor1
password: 1111
```


## Copyright

Ayo Bangun Construction
