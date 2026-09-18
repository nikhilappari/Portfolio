# Nikhil Appari — AI & ML Developer Portfolio

<p align="center">
  <b>Artificial Intelligence & Machine Learning Enthusiast</b><br />
  Building practical AI solutions, machine learning systems, and modern web applications.
</p>

<p align="center">
  <a href="https://nikhilappari.vercel.app"><img src="https://img.shields.io/badge/Live%20Website-nikhilappari.vercel.app-ff2a3b?style=flat&logo=vercel" alt="Live Website" /></a>
  <a href="https://github.com/nikhilappari"><img src="https://img.shields.io/badge/GitHub-nikhilappari-181717?style=flat&logo=github" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/nikhil-appari-365810309/"><img src="https://img.shields.io/badge/LinkedIn-Nikhil%20Appari-0A66C2?style=flat&logo=linkedin" alt="LinkedIn" /></a>
  <a href="mailto:nikhilappari2006@gmail.com"><img src="https://img.shields.io/badge/Email-nikhilappari2006%40gmail.com-D14836?style=flat&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

## 🌟 Overview

> 🌐 **Live Website**: [https://nikhilappari.vercel.app](https://nikhilappari.vercel.app)

This repository hosts the source code for the personal developer portfolio of **Nikhil Appari**. Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**, it features a cinematic dark-mode aesthetic with crimson accents, smooth Framer Motion animations, real-time GitHub repository synchronization, and interactive project architecture breakdowns.

---

## 🚀 Key Features

- **Cinematic Dark Theme**: Sleek dark UI (`#07080a`) paired with vivid crimson accents (`#ff2a3b`), custom glassmorphism cards, and interactive canvas particle backgrounds.
- **Interactive Project Showcase**: Detailed project cards with full modal deep-dives displaying problem definitions, technical architecture, workflow diagrams, and key results.
- **Dynamic GitHub Repository Sync**: Live integration with the GitHub REST API to fetch, categorize, and filter repositories by domain (AI, Python, RAG, Web, etc.).
- **Interactive Preloader & Scroll Feedback**: Custom animated lock/unlock sequence and crimson scroll progress indicator.
- **Working Contact Section**: Integrated contact form powered by Web3Forms for direct email delivery, plus quick one-click email copying.
- **Fully Responsive**: Optimized for ultra-fast performance and seamless viewing across mobile, tablet, and ultra-wide screens.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [Web3Forms](https://web3forms.com/)

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   └── github/        # Serverless route for GitHub API repo fetching
│   ├── globals.css        # Global CSS, crimson theme utilities & animations
│   ├── layout.tsx         # Root layout, metadata & SEO tags
│   └── page.tsx           # Portfolio landing page
├── components/
│   ├── About.tsx          # About section, core pillars & workflow steps
│   ├── Architecture.tsx   # System design & architecture philosophy
│   ├── BackgroundCanvas.tsx # Interactive background particles
│   ├── Contact.tsx        # Contact form with Web3Forms integration
│   ├── EducationAchievements.tsx # Academic background & milestones
│   ├── Experience.tsx     # Work experience & roles
│   ├── Footer.tsx         # Footer with quote banner & social links
│   ├── GitHubRepos.tsx    # Live GitHub repos sync & filter UI
│   ├── Hero.tsx           # Hero section with role typewriter & photo carousel
│   ├── Navbar.tsx         # Responsive navbar with scroll progress bar
│   ├── Preloader.tsx      # Cinematic intro animation & progress loader
│   ├── ProjectModal.tsx   # Modal for detailed project architecture
│   ├── Projects.tsx       # Featured projects showcase
│   └── TechStack.tsx      # Categorized skill badges & competencies
├── data/
│   └── portfolioData.ts   # Personal details, projects, skills, education
├── lib/
│   └── github.ts          # GitHub REST API helper & fallback repos
└── public/
    ├── images/            # Portraits and asset illustrations
    └── resume/            # Downloadable resume PDF
```

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have **Node.js 18.18+** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nikhilappari/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Website**: [nikhilappari.vercel.app](https://nikhilappari.vercel.app)
- **Name**: Nikhil Appari
- **GitHub**: [@nikhilappari](https://github.com/nikhilappari)
- **LinkedIn**: [nikhil-appari](https://www.linkedin.com/in/nikhil-appari-365810309/)
- **Email**: [nikhilappari2006@gmail.com](mailto:nikhilappari2006@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

