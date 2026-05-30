# Spent - insight Portfolio Website

A portfolio website showcasing **Spent — Smart Expense Tracker**, an intuitive Android application.

## Tech Stack

- **Framework:** Astro v4.x
- **Styling:** Tailwind CSS v3
- **CMS:** Sanity.io (integration planned)
- **Deployment:** Netlify

## Getting Started

### Install Dependencies

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

Output in `dist/` directory.

### Preview

```bash
npm run preview
```

## Project Structure

```
spent-portfolio/
├── public/              # Static assets
│   ├── favicon.svg
│   └── images/
│       └── app-screenshots/
├── src/
│   ├── components/
│   │   ├── Layout/      # Header, Footer, BaseLayout
│   │   ├── Sections/    # Home, Product, Contact
│   │   └── UI/          # Button, Card, Lightbox, Modal
│   ├── layouts/         # BaseLayout.astro
│   ├── lib/             # Utilities, Sanity client
│   ├── content/         # Content Collections
│   ├── styles/          # globals.css
│   ├── pages/           # index.astro
│   └── types/           # TypeScript types
└── tests/               # Test files
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

## License

MIT
