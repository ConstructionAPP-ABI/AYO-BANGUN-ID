# State Parser Fix

Perbaikan membaca Firebase Realtime Database:
- Normalisasi projects/users object menjadi array.
- Merge Firebase dengan state lokal.
- Tidak overwrite data lokal dengan state kosong.
- Firebase Auth dan Rules tidak diubah.
