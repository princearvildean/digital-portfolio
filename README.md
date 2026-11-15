# Personal Portfolio

An editorial-style personal portfolio built with React, Vite, Tailwind CSS, Express, and PostgreSQL-ready APIs.

## Run the frontend

```bash
npm install
npm run dev
```

## Run the API

Copy `.env.example` to `.env`, update `DATABASE_URL` when PostgreSQL is ready, then run:

```bash
npm run server:dev
```

The API exposes `GET /api/health` and a starter `POST /api/contact` endpoint.

## Personalize next

- Replace placeholder name, location, email, and profile image.
- Add real project details and links in `src/App.jsx`.
- Decide whether contact submissions should be stored in PostgreSQL or sent through an email service.
