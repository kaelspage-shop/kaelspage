# Kael's Page 🦌

Toko digital bergaya Bambi vintage boutique. React + Vite + Tailwind CSS + Lucide.
Semua pesanan lewat WhatsApp (tanpa pembayaran online).

## Menjalankan di komputer
```bash
npm install
npm run dev      # buka alamat yang muncul, biasanya http://localhost:5173
npm run build    # hasil jadi ada di folder dist/ (siap di-deploy ke Netlify/Vercel)
```

## Struktur penting
```
src/config/store.js   -> nama toko (sisanya dari settings.json)
src/data/products.json-> SEMUA produk (diedit lewat /admin)
src/data/settings.json-> WhatsApp, Instagram, jam buka, teks hero
src/data/categories.js-> daftar kategori & label status
src/data/faq.json     -> pertanyaan FAQ
src/data/benefits.js  -> 4 kartu keunggulan
src/data/steps.js     -> langkah "How to Order"
public/images/        -> taruh gambar produk di sini
src/components/       -> komponen tampilan
src/hooks/useCart.js  -> logika keranjang (localStorage)
```

## Admin panel (Decap CMS)
Data produk, FAQ, dan pengaturan toko ada di `src/data/*.json` dan bisa diedit lewat `https://NAMA-SITUSMU.netlify.app/admin`.
Setiap klik **Publish** menyimpan perubahan ke GitHub, lalu Netlify otomatis build ulang (sekitar 1 menit).

### Setup sekali saja
1. **Upload proyek ke GitHub** (repository baru, branch `main`).
2. **Deploy di Netlify**: Add new site -> Import from Git -> pilih repository. Pengaturan build sudah ada di `netlify.toml`.
3. **Isi `public/admin/config.yml`**: ganti `repo: USERNAME/REPOSITORY` dengan repository-mu, lalu commit.
4. **Aktifkan login GitHub di Netlify**: Site configuration -> Access & security -> OAuth -> Install provider -> GitHub. Nama menu bisa berbeda; jika tidak ketemu, cek panduan GitHub backend di decapcms.org.
5. Buka `/admin`, klik **Login with GitHub**. Akun GitHub yang dipakai harus punya akses tulis ke repository.

### Cara pakai
- **Produk**: Catalog -> Products. Tambah, ubah, urutkan, hapus. Satu produk bisa punya beberapa paket (durasi + harga).
- **Ganti gambar**: pada field Image, upload gambar baru.
- **Status**: Available / Limited stock / Sold out.
- **WhatsApp & Instagram**: Catalog -> Store Settings.
- **FAQ**: Catalog -> FAQ.
- Kategori di dropdown harus sama dengan `src/data/categories.js`. Jika menambah kategori, ubah di kedua file.

### Mencoba di komputer
```bash
npx decap-server    # terminal 1
npm run dev         # terminal 2, lalu buka http://localhost:5173/admin
```

## Pesan WhatsApp yang dihasilkan
```
Hello Kael's Page! ♡

I would like to place an order:

1. Product A — 1 Month — 1 × Rp15.000
2. Product B — 3 Months — 2 × Rp30.000

Total: Rp75.000

Thank you!
```
Keranjang kosong = tombol checkout nonaktif.
