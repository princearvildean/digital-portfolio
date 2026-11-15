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

## Render deployment

This repository can run as one Render Web Service. Use `npm install && npm run build` as the build command and `npm start` as the start command. The Express server serves the built Vite app and the `/api` endpoints from the same origin.

Set `ALLOWED_ORIGIN` to the deployed Render URL. Add `DATABASE_URL` after creating a PostgreSQL database, then run the contact-message migration.

If the frontend is deployed as a separate Render Static Site, set its `VITE_API_URL` environment variable to the Web Service URL, for example `https://your-api.onrender.com`. Set `ALLOWED_ORIGIN` on the Web Service to the Static Site URL.

## Optional next improvements

- Add repository access details only if a project repository can be made public. The BroBlendz repository is intentionally undisclosed because it is private.
- Add additional projects and screenshots as they are ready.
