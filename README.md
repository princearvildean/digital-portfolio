# Personal Portfolio

An interactive personal portfolio for Prince Arvildean B. Seguros, built with React, Vite, Tailwind CSS, Express, and Resend. PostgreSQL support is optional and is not required by the deployed portfolio.

## Frontend

```bash
npm install
npm run dev
```

The Vite development server proxies `/api` requests to `http://localhost:3001`.

## Contact email API

1. Copy `.env.example` to `.env`.
2. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
3. Start the API in another terminal:

```bash
npm run server:dev
```

The API exposes `GET /api/health` and a validated, rate-limited `POST /api/contact` endpoint. The contact endpoint sends messages through Resend and uses the visitor's email as the reply-to address. If Resend is not configured, the contact form fails honestly and offers direct email instead.

## Render deployment

This repository can run as one Render Web Service. Use `npm install && npm run build` as the build command and `npm start` as the start command. The Express server serves the built Vite app and the `/api` endpoints from the same origin.

Set `ALLOWED_ORIGIN` to the deployed Render URL. Add the Resend variables to the Web Service environment. PostgreSQL remains optional for this portfolio.

If the frontend is deployed as a separate Render Static Site, set its `VITE_API_URL` environment variable to the Web Service URL, for example `https://your-api.onrender.com`. Set `ALLOWED_ORIGIN` on the Web Service to the Static Site URL.

Because the frontend uses React Router, add a Render Static Site rewrite from `/*` to `/index.html`. This keeps direct links such as `/work` and `/contact` working after a refresh.

## Optional next improvements

- Add repository access details only if a project repository can be made public. The BroBlendz repository is intentionally undisclosed because it is private.
- Add additional projects and screenshots as they are ready.
