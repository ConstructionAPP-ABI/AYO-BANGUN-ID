# Ayo Bangun.ID Contractor — POS Proyek Konstruksi

Aplikasi pencatatan proyek konstruksi berbasis web (bisa dipasang di Android), meniru gaya aplikasi referensi Anda. Satu file `index.html` — tinggal upload ke GitHub Pages seperti contoh di link referensi.

## 🔐 Login Default

| Role    | Username  | Password   | Keterangan |
|---------|-----------|------------|------------|
| Owner   | `owner`   | `owner123` | Akses penuh, bisa ganti password owner |
| Admin   | `admin`   | `0000`     | Hampir semua fitur, kelola user mandor |
| Mandor  | `mandor1` | `1111`     | Absensi, pemakaian material, opname, progres, kendala, laporan |

Password admin/mandor bisa diganti admin/owner di **Pengaturan → User & Password**. Password owner hanya bisa diganti owner.

## ✨ Fitur

- **Multi-proyek** — beberapa proyek dalam satu aplikasi, semua data (material, absensi, stok, dll.) menyesuaikan proyek yang dipilih. Owner bisa edit nama & keterangan tiap proyek.
- **Absensi tenaga kerja** — Hadir/Sakit/Izin/Alpha, bisa diedit semua user, riwayat per tanggal, export CSV.
- **Material** — katalog **100+ material** umum konstruksi (beton, agregat, bata, besi, kayu, atap, plumbing, listrik, cat, sanitair, dll.) lengkap dengan kategori & satuan.
  - *Stok*: admin/owner bisa edit langsung jumlah & satuan/volume.
  - *Opname*: mandor input → status **pending** → admin/owner verifikasi (stok otomatis update). Ada tombol verifikasi semua.
  - *Pemakaian*: mandor mencatat pemakaian → stok otomatis berkurang; admin/owner bisa edit/hapus (stok otomatis dikoreksi).
  - *Katalog*: editor tambah/edit/hapus item & varian material (admin/owner).
- **Progres & target harian** — update progres pekerjaan (target, realisasi, %), target pekerjaan dengan volume, satuan, tenggat — semua bisa diedit admin/owner.
- **Kendala pekerjaan** — status Baru/Diproses/Selesai + solusi.
- **Laporan harian otomatis** — dirangkum dari absensi, material, progres, target, kendala. Tombol **Kirim ke WhatsApp** (nomor tujuan diatur per proyek) + mode **Auto-WA** (laporan terkirim otomatis saat login pertama hari itu).
- **User management** — admin/owner menambah mandor 1 sampai banyak; owner juga bisa menambah admin; ganti password & no. WA per user.
- **Firebase sync** — data tersinkron real-time antar semua perangkat.
- Backup/restore JSON, export CSV, reset data.

## ☁️ Setup Firebase (sinkronisasi antar device)

1. Buka [Firebase Console](https://console.firebase.google.com) → **Add project** → nama bebas.
2. Menu **Build → Realtime Database → Create Database** → pilih lokasi `asia-southeast1` → mulai dalam **test mode** (untuk produksi, atur rules: `{"rules":{"abpos":{"read":true,"write":true}}}` — ganti dengan autentikasi untuk keamanan penuh).
3. **Project settings → General → Your apps → Web (`</>`)** → daftarkan app → salin objek `firebaseConfig`.
4. Login aplikasi sebagai admin/owner → **Pengaturan → Sistem & Firebase** → tempel JSON config → **Simpan & Hubungkan**.
5. Uji: buka aplikasi di HP lain dengan config yang sama — data langsung tersinkron (indikator `● tersinkron` di kanan atas).
Tanpa config, aplikasi tetap berjalan penuh secara lokal (offline) di tiap perangkat.

## 🚀 Deploy ke GitHub (seperti aplikasi referensi Anda)

```bash
git init
git add index.html logo-ayo-bangun.jpeg README.md
git commit -m "Ayo Bangun.ID Contractor POS"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```
Lalu di GitHub: **Settings → Pages → Source: main / root** → aplikasi jalan di `https://USERNAME.github.io/NAMA-REPO/`.

## 📲 Jadikan Aplikasi Android (APK)

**Cara 1 — PWA (paling mudah, direkomendasikan):** buka URL di Chrome Android → menu ⋮ → **Add to Home screen** / **Install app**. Ikon & nama aplikasi muncul seperti APK.

**Cara 2 — APK via WebView (Android Studio):** New Project → "Empty Views Activity" → tambahkan `WebView` fullscreen yang load URL GitHub Pages Anda (atau `file:///android_asset/index.html` untuk offline) → Build APK.

**Cara 3 — TWA (Bubblewrap):** generator Trusted Web Activity dari PWA untuk Play Store.

**Cara 4 — Builder online:** WebIntoApp / Median.co / AppsGeyser — masukkan URL, dapat APK siap pasang.

## 📁 Struktur File

```
ayo-bangun-pos/
├── index.html            ← seluruh aplikasi (buka langsung di browser)
├── logo-ayo-bangun.jpeg  ← logo Ayo Bangun
└── README.md             ← panduan ini
```

## ⚙️ Hak Akses Ringkas

| Fitur | Mandor | Admin | Owner |
|-------|:---:|:---:|:---:|
| Dashboard, Laporan, Kirim WA | ✅ | ✅ | ✅ |
| Absensi (input & edit) | ✅ | ✅ | ✅ |
| Pemakaian material | ✅ input | ✅ edit/hapus | ✅ edit/hapus |
| Opname | ✅ kirim (pending) | ✅ verifikasi | ✅ verifikasi |
| Stok (edit qty & satuan) | — | ✅ | ✅ |
| Katalog material (editor) | — | ✅ | ✅ |
| Progres, target, kendala | ✅ input | ✅ edit/hapus | ✅ edit/hapus |
| Tambah user mandor | — | ✅ | ✅ |
| Tambah admin | — | — | ✅ |
| Ganti password owner | — | — | ✅ |
| Pengaturan proyek, Firebase, backup, reset | — | ✅ | ✅ |
