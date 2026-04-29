# Perencanaan: Halaman Nilai

## Tujuan
Membuat halaman baru untuk menu Nilai dengan konten yang mengikuti template, namun tetap menggunakan sidebar dan header global yang sudah ada.

## Scope
- Halaman Nilai baru (konten dari template).
- Routing untuk menu Nilai.
- Penyesuaian Tailwind agar class di template bisa dipakai.
- Tidak ada integrasi API (data masih statis).

## Non-scope
- Integrasi backend atau API.
- Refactor layout global.
- Perubahan desain di halaman lain.

## Referensi yang perlu dicek
- template/code.html
- src/App.vue
- src/router/index.js
- src/router/modules/ (contoh pola modul)
- src/style.css
- tailwind.config.js

## Tahapan Implementasi (untuk junior)
1. Buat view baru untuk Nilai di folder views.
   - Fokus hanya pada konten halaman.
   - Ambil markup dari template/code.html hanya bagian "Page Canvas" (div dengan class p-8 ...), tanpa sidebar dan tanpa header.
   - Bungkus konten dengan layout yang konsisten dengan halaman lain (contoh: gunakan container dengan background, padding, dan offset sidebar seperti di halaman dashboard/ujian).

2. Tambahkan routing untuk halaman Nilai.
   - Buat file route module baru mengikuti pola module lain.
   - Daftarkan module tersebut di router index.
   - Pastikan path contoh: /nilai (sesuaikan dengan naming yang digunakan).

3. Update sidebar menu supaya Nilai bisa diklik.
   - Di App.vue, ubah menu Nilai dari link biasa menjadi RouterLink.
   - Tambahkan class aktif seperti menu lain (gunakan computed class agar highlight sesuai route aktif).

4. Pindahkan konfigurasi Tailwind dari template ke proyek.
   - Di tailwind.config.js, tambahkan theme.extend (colors, fontFamily, fontSize, borderRadius, spacing) sesuai yang ada di template.
   - Ini diperlukan karena template memakai class seperti text-h3, font-h3, text-label-sm, dan warna kustom.

5. Tambahkan CSS global yang dibutuhkan.
   - Di src/style.css, tambahkan style untuk .material-symbols-outlined (font-variation-settings).
   - Tambahkan style untuk .custom-scrollbar (scrollbar kecil dan halus).

6. Rapikan konten agar konsisten dengan layout aplikasi.
   - Pastikan konten tidak menabrak header global (header sudah ada di App.vue).
   - Gunakan padding dan margin yang sesuai agar tampilan rapi di desktop dan mobile.

## Checklist QA
- Navigasi ke /nilai menampilkan halaman Nilai dengan benar.
- Sidebar dan header global tetap tampil.
- Konten dari template muncul lengkap (filter, summary cards, tabel, pagination).
- Tidak ada duplikasi header atau sidebar.
- Tampilan responsif di layar kecil.

## Catatan
- Data pada tabel dan card masih statis dari template.
- Setelah selesai, bisa ditingkatkan dengan API (di luar scope).
