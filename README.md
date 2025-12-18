# Thushar Sathish Bhandary - Portfolio Website

An interactive, responsive portfolio website built with React and Anime.js, showcasing professional experience, projects, skills, and achievements.

## Features

- 🎨 Modern, interactive UI with smooth animations
- 📱 Fully responsive design for mobile and desktop
- ⚡ Fast and optimized with Vite
- 🎭 Beautiful animations powered by Anime.js
- 🌈 Gradient-based color scheme
- 📊 Comprehensive sections: About, Skills, Experience, Projects, Certifications, Education, and Contact

## Tech Stack

- **React** - UI library
- **Anime.js** - Animation library
- **Vite** - Build tool
- **CSS3** - Styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

To customize the portfolio with your own information:

1. Update personal details in each component file
2. Modify colors in `src/index.css` (CSS variables)
3. Add/remove projects, skills, or certifications in respective component files
4. Update social links and contact information in `Contact.jsx`

## License

This project is open source and available for personal use.

