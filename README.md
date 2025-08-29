# PeelSwap Landing Page

PeelSwap is a decentralized exchange (DEX) on the **Cedra blockchain**.  
This repository contains the frontend code for the PeelSwap landing page, built with **React + TypeScript**, powered by **Vite** and **TailwindCSS**.

---

## 🚀 Tech Stack

- **React 19** — UI library  
- **TypeScript 5** — static typing for reliability  
- **Vite 6** — fast modern build tool  
- **TailwindCSS** — utility-first CSS framework  
- **Lucide-react** — icons  
- **Recharts** — charts and graphs  

---

## 📂 Project Structure

```bash
peel-swap-frontend/
├── public/              # static assets
├── src/
│   ├── components/      # reusable UI components
│   ├── pages/           # main sections of the landing page
│   ├── assets/          # images, logos
│   ├── styles/          # Tailwind global styles
│   └── main.tsx         # entry point
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## 📦 Installation & Running

1. Clone the repository
```
git clone https://github.com/Peel-Swap/peel-swap-landing-frontend
cd peel-swap-landing-frontend
```

2. Install dependencies
```
pnpm install
```

3. Start the development server
```
pnpm dev
```

The app will be available at:
👉 http://localhost:5173

4. Build for production
```
pnpm build
```

The production-ready files will be generated in the dist/ directory.