# Campus Club Finder

A responsive single-page app for discovering campus clubs, learning about upcoming events, and joining a community. Built to match the requirements in the provided case brief.

## Features

- Home page with intro, hero, club highlights, and calls to action
- Club directory with five default clubs
- Sort clubs by name A–Z or Z–A
- Filter by the included club categories
- Switch between responsive grid and list views
- Individual club detail pages with descriptions, meeting information, and at least two events
- About page describing the app and technology stack
- Friendly 404 page
- Responsive layout, keyboard focus states, and reduced-motion support

## Tech stack

- React 18 + functional components and Hooks
- Vite
- React Router
- Tailwind CSS
- Lucide React icons

## Requirements

Install Node.js 18+ (Node.js 20+ recommended) and npm.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Project structure

```text
src/
  components/
    ClubCard.jsx
    Navbar.jsx
  data/
    clubs.js
  pages/
    About.jsx
    ClubDetail.jsx
    Clubs.jsx
    Home.jsx
    NotFound.jsx
  App.jsx
  index.css
  main.jsx
```


## Data and limitations

The five sample clubs and their event information are in `src/data/clubs.js`, separate from the UI. Club joining is browser-only: it is not synchronized across devices or browsers, and clearing browser storage removes the saved membership. Club photography is loaded from Unsplash URLs and therefore requires an internet connection. This project intentionally does not include authentication, a backend, club editing, or a search box.


Replace the example remote URL with your actual public repository URL.
