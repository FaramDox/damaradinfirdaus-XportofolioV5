# Damar Adin Firdaus — Software Engineer Portfolio V5

[![Vercel Status](https://img.shields.io/badge/vercel-deployed-brightgreen?logo=vercel)](https://portofolio-damaradinfirdaus.vercel.app/)

Portofolio resmi versi 5 milik **Damar Adin Firdaus**, seorang *Software Engineer* dan *Full-Stack Web Developer*. Proyek ini menampilkan keahlian dalam pengembangan aplikasi web performa tinggi, arsitektur database, dan desain antarmuka modern.

## 🌐 Demo

**Live Preview**: [https://portofolio-damaradinfirdaus.vercel.app/](https://portofolio-damaradinfirdaus.vercel.app/)

## 🚀 Fitur Utama

- **Modern UI/UX**: Desain minimalis dengan dukungan Dark/Light mode otomatis.
- **Interactive Components**: Animasi halus menggunakan `framer-motion`.
- **Dynamic Data**: Konten proyek, sertifikasi, pengalaman, dan testimoni diambil secara dinamis dari **Supabase**.
- **Typewriter & Code Simulation**: Efek interaktif pada bagian Hero untuk kesan teknologi yang mendalam.
- **Contact Form**: Form kontak fungsional menggunakan EmailJS — pesan langsung masuk ke email tanpa backend tambahan.
- **Optimized Performance**: Dibangun di atas Vite untuk *build time* yang sangat cepat.

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | [React.js](https://reactjs.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Database | [Supabase](https://supabase.com/) |
| Email | [EmailJS](https://www.emailjs.com/) |
| Deployment | [Vercel](https://vercel.com/) |

## 📂 Struktur Proyek

```text
src/
├── main.jsx              # Entry point — mount App ke DOM
├── App.jsx               # Root component — susun semua section
├── styles.css            # Global styles & konfigurasi Tailwind CSS
├── lib/
│   └── supabase.js       # Supabase client instance
├── components/           # Komponen UI modular
│   ├── Header.jsx        # Navbar & navigasi
│   ├── HeroSection.jsx   # Intro + typewriter effect
│   ├── AboutSection.jsx  # Profil & deskripsi diri
│   ├── SkillsSection.jsx # Daftar teknologi & keahlian
│   ├── ExperienceSection.jsx   # Riwayat pengalaman kerja
│   ├── ProjectsSection.jsx     # Showcase proyek unggulan
│   ├── CertificatesSection.jsx # Sertifikasi & penghargaan
│   ├── TestimonialsSection.jsx # Testimoni / rekomendasi
│   ├── ContactSection.jsx      # Form & info kontak (EmailJS)
│   ├── Footer.jsx              # Footer halaman
│   ├── AnimatedBackground.jsx  # Efek latar animasi
│   ├── LeftSocialRail.jsx      # Panel sosial media kiri
│   └── ThemeToggle.jsx         # Tombol toggle Dark/Light mode
└── context/
    └── ThemeContext.jsx  # State management tema global
```

**Alur render:**

```text
main.jsx
  └── App.jsx
        ├── ThemeContext (Provider)
        ├── AnimatedBackground
        ├── Header + ThemeToggle + LeftSocialRail
        ├── HeroSection
        ├── AboutSection
        ├── SkillsSection
        ├── ExperienceSection       ← data dari Supabase
        ├── ProjectsSection         ← data dari Supabase
        ├── CertificatesSection     ← data dari Supabase
        ├── TestimonialsSection     ← data dari Supabase
        ├── ContactSection
        └── Footer
```

## 💻 Cara Menjalankan Secara Lokal

1. **Clone repository**:

   ```bash
   git clone https://github.com/FaramDox/damaradinfirdaus-XportofolioV5.git
   cd damaradinfirdaus-XportofolioV5
   ```

2. **Install dependensi**:

   ```bash
   npm install
   ```

3. **Buat file `.env.local`** dan isi variabel berikut:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Jalankan server pengembangan**:

   ```bash
   npm run dev
   ```

   Buka `http://localhost:5173` di browser Anda.

5. **Build untuk produksi**:

   ```bash
   npm run build
   ```

## 👤 Kontak

- **Email**: [mradinfirdaus@gmail.com](mailto:mradinfirdaus@gmail.com)
- **LinkedIn**: [damaradinfirdaus](https://www.linkedin.com/in/damaradinfirdaus)
- **Instagram**: [@faramdox.dev](https://instagram.com/faramdox.dev)
- **GitHub**: [FaramDox](https://github.com/FaramDox)

---
*Dibuat dengan dedikasi untuk kode yang bersih dan performa yang maksimal.*
