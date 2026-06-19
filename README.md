# Thrishantha N S — Portfolio

A modern, production-ready personal portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue)

## ✨ Features

- **Modern Design** — Premium aesthetic inspired by Linear, Vercel, and Stripe
- **Dark Theme** — Elegant dark mode with glassmorphism effects
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Smooth Animations** — Framer Motion-powered scroll reveals and transitions
- **SEO Optimized** — Meta tags, semantic HTML, and performance-focused
- **Accessible** — ARIA labels, keyboard navigation, and semantic structure
- **Fast Loading** — Vite-powered build with code splitting

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/thrishantha/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── SectionHeading.tsx
│   ├── data/
│   │   └── index.ts
│   ├── hooks/
│   │   └── useScroll.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite and configure the build
4. Click **Deploy** — your site will be live in seconds

### Environment Variables

No environment variables are required for the base deployment.

## 📝 Customization

- **Content**: Edit `src/data/index.ts` to update your personal information
- **Styling**: Modify `src/index.css` for theme customization
- **Components**: Each section is a standalone component in `src/components/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
