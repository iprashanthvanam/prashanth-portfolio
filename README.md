# Personal Portfolio Website

**Full Project Documentation & README**  
**Last updated:** Jan 2026  
**Author:** Prashanth  
**Project Type:** Personal Portfolio Website  
**Tech Stack:** React + Vite  

---

## Project Overview

This project is a **modern, responsive personal portfolio website** built to showcase my profile, skills, education, experience, projects, and achievements in a clean and visually engaging format.

The website is designed with smooth animations, reusable components, and a structured data-driven approach, making it easy to maintain and scale.

It serves as:
- A professional online resume
- A project showcase platform
- A personal branding website

---

## Features

- **Hero Section:** Profile introduction with downloadable CV
- **Education Timeline:** Academic background display
- **Skills Showcase:** Auto-scrolling skills marquee with icons
- **Experience Section:** Internship and work experience
- **Projects Gallery:** Project cards with GitHub & live demo links
- **Achievements Section:** Certifications and accomplishments
- **Contact Form:** User-friendly contact interface
- **Smooth Animations:** Scroll-based reveal animations
- **Responsive Design:** Works across desktop & mobile devices
- **Scroll-to-Top Button:** Improved navigation experience

---

## Tech Stack

| Layer | Technology | Purpose |
|-----|-----------|--------|
| **Frontend** | React 19 | Component-based UI |
| **Build Tool** | Vite | Fast development & build |
| **Styling** | CSS3 | Custom responsive styling |
| **Icons** | react-icons | UI & skill icons |
| **Animations** | IntersectionObserver API | Scroll animations |
| **Deployment** | Vercel | Production hosting |

---

## Component Overview

### Core Components
- **Navbar:** Section navigation with icons
- **ScrollTop:** Floating button for smooth scroll to top

### Sections
- **Hero:** Profile intro, CV download, social links
- **Education:** Academic history cards
- **Skills:** Infinite scrolling skill icons
- **Experience:** Internship & work experience
- **Projects:** Project cards with tech stack
- **Achievements:** Certifications & recognitions
- **Contact:** Contact form & social links

---

## Data-Driven Design

All dynamic content is stored separately in `/src/data`:

- `education.js` → Academic details
- `experience.js` → Internship/work data
- `projects.js` → Project metadata
- `skills.js` → Skill list

This separation allows:
- Easy updates
- Clean components
- Better scalability

---

## Animations & UX

- Scroll animations powered by **IntersectionObserver**
- CSS-based transitions for hover & reveal effects
- Animation-safe performance (no heavy libraries)

---

## Installation & Setup


### 1️⃣ Clone the Repository
```
git clone https://github.com/iprashanthvanam/prashanth-portfolio.git
```
```
cd prashanth-portfolio
``` 

### 2️⃣ Install Dependencies:
```
npm install
```

### 3️⃣ Start Development Server:
```
npm run dev
```

### App runs at:
```
http://localhost:5173
```

### Build for Production:
```
npm run build
```

### Preview production build:
```
npm run preview
```

### Deployment:
The project is configured for Vercel deployment.
```
{
  "outputDirectory": "dist"
}
```

### Steps:
- Push code to GitHub
- Import repository in Vercel
- Deploy 🚀
