# Jorge Osvaldo Perez Mendoza - Portfolio and CV

[Español](./README_ES.md) | [English](./README.md)

![CV Banner](public/CVBanner.jpg)

Hello! Welcome to the repository of my interactive web portfolio and Resume. I am a **Software Development Engineer**, specializing in creating innovative and robust web solutions (Backend, Full Stack Web) promoting continuous improvement and code quality.

## 📄 Download my Resume

You can find a detailed breakdown of my work experience, skills, and educational background in the following document:

👉 **[Download CV in PDF (English)](./CV%20Jorge%20Osvaldo%20Perez%20Mendoza%20EN.pdf)**

---

## 🌐 About this Project

This project is the source code for my personal website, designed to be fast, accessible, and optimized for search engines (SEO). It is built with a modern static site generation architecture to ensure the best possible response time.

### ✨ Features

- **Internationalization (i18n):** Bilingual support (English and Spanish) with one template per route and per-locale translation dictionaries (adding a language means adding a dictionary and registering the locale), plus hreflang alternates in pages and the sitemap.
- **Search Engine Optimization (SEO):** Comprehensive implementation with Open Graph, dynamic Sitemap, and Twitter Cards for high visibility when shared.
- **Modern Design:** Responsive and user-friendly interface (Glassmorphism, fluid gradients, and smooth transitions).

### 🛠️ Core Technologies

- **[Astro](https://astro.build/)**: Web framework optimized for speed and content delivery.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first styling through the `@tailwindcss/vite` plugin. Design tokens (colors and fonts) live in `src/styles/global.css`, and only the classes in use end up in the final CSS.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**: Generates the sitemap at build time.
- **[Firebase Hosting](https://firebase.google.com/docs/hosting) + GitHub Actions**: Every pull request gets a preview deployment, and every merge to `main` deploys to production.

---

## 🚀 Installation and Local Execution

If you want to run this project locally, you need Node.js `>= 22.12.0`. Follow these instructions:

1. Clone the repository:

   ```bash
   git clone https://github.com/furiduri/cv.git
   cd cv
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

The project will be available by default at `http://localhost:4321`.

## 📬 Contact

If you want to chat about technology, job opportunities, or my passion for Board Games, feel free to contact me!

- **Email:** Jorge.Furiduri@gmail.com
- **Live Website:** [cv.gcatcode.com](https://cv.gcatcode.com)
