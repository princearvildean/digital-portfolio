# Personal Portfolio

An interactive personal portfolio for Prince Arvildean B. Seguros, built with React, Vite, Tailwind CSS, Express, and PostgreSQL.

## Frontend

```bash
npm install
npm run dev
```

The Vite development server proxies `/api` requests to `http://localhost:3001`.

## Contact API

1. Copy `.env.example` to `.env`.
2. Set a real PostgreSQL `DATABASE_URL`.
3. Run `server/migrations/001_create_contact_messages.sql` against the database.
4. Start the API in another terminal:

```bash
npm run server:dev
```

The API exposes `GET /api/health` and a validated, rate-limited `POST /api/contact` endpoint. If PostgreSQL is not configured, the contact form fails honestly and offers direct email instead of pretending the message was saved.

## Personal details still needed

- Add the real GitHub URL in `src/data/portfolio.js`.
- Add the real LinkedIn URL in `src/data/portfolio.js`.
- Add live and repository URLs for projects when available.
- Add additional projects and screenshots as they are ready.
