# Campus Club Finder — User & Feature Documentation

## Overview

Campus Club Finder is a browser-based single-page application for discovering student clubs. It starts with five example clubs and does not require login. Club membership is stored in the current browser using `localStorage`.

## 1. Home (`/`)

The home page introduces Campus Club Finder, summarizes the student community, highlights three clubs, and offers buttons to explore the directory or learn about the app.

**How to demonstrate:** Open the root URL, inspect the hero and club highlights, then select **Explore all clubs**.

**Screenshot:** Add a screenshot of the desktop home page here after running the app.

## 2. Club directory (`/clubs`)

The directory shows the five clubs as cards. Each card includes a photo, category, club name, short description, member count, and details link.

- **Sort:** Select **Name A–Z** or **Name Z–A**.
- **Category chips:** Choose a category to narrow the displayed clubs. Select **All clubs** to reset.
- **Grid/List:** Use the two view buttons to switch between a card grid and vertically stacked rows.
- **Joined indicator:** Clubs joined in this browser display a “Joined” label.

**How to demonstrate:** Visit `/clubs`, change sort order, choose a category, toggle list/grid, then open a club.

**Screenshot:** Add screenshots of grid view, list view, and sorting/category behavior here.

## 3. Club details (`/clubs/:clubId`)

Each club detail page contains its image, category, full description, member count, regular meeting time, location, and at least two upcoming events.

- **Join:** Select **Join this club** to join.
- **Confirmation:** The button is replaced with “You have joined this club!”.
- **Persistence:** Refresh the page or return to the directory. The joined state remains because it is saved to `localStorage`.

Available example IDs: `robotics`, `green-campus`, `creative-studio`, `adventure-society`, and `minds-in-motion`.

**How to demonstrate:** Open a club, join it, refresh, and return to `/clubs` to show the joined label.

**Screenshot:** Add a screenshot of a club detail page before joining and another after joining.

## 4. About (`/about`)

Explains the purpose of the app, the discover/get involved/save choices workflow, and the technology stack: React, Vite, React Router, Tailwind CSS, and localStorage.

**How to demonstrate:** Select **About** in the navigation.

**Screenshot:** Add a screenshot of the About page.

## 5. Not found (`*`)

Any unknown route displays a friendly 404 message and a button back to Home.

**How to demonstrate:** Visit a path such as `/this-page-does-not-exist`.

**Screenshot:** Add a screenshot of the 404 page.

## Data flow and implementation

- `src/data/clubs.js` contains the five club records and two event records per club.
- `src/App.jsx` owns the joined-club state and loads/saves it with `localStorage`.
- `src/components/Navbar.jsx` provides navigation across all routes.
- `src/components/ClubCard.jsx` provides a reusable club card.
- `src/pages/` contains each route's page component.
- Tailwind utility classes provide layout and responsive styling; `src/index.css` contains shared component styles and accessibility refinements.

## Screenshot checklist

Capture these after running `npm run dev` and insert them in this document if screenshots are required for submission:

- [ ] Home page
- [ ] Club directory — grid view
- [ ] Club directory — list view
- [ ] Club directory — alternate sort order
- [ ] Club detail — before joining
- [ ] Club detail — joined confirmation
- [ ] About page
- [ ] 404 page
- [ ] Mobile navigation / responsive layout

## Notes

This is a frontend-only sample. It has no authentication, server, or cross-device synchronization. Event and club details are sample data and should be replaced with verified campus information before production use.
