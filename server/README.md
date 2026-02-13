# AI Assistant API

Node.js + Express backend for the portfolio "Ask AI" section.

## Run locally (mock mode - no API key needed)

```bash
cd server
npm install
npm start
```

Then in the portfolio root, create `.env` with:
```
VITE_AI_API_URL=http://localhost:3001
```

Restart the portfolio dev server. The AI section will call this backend.

## Enable real AI (OpenAI)

1. Get an API key from https://platform.openai.com/
2. Run with: `OPENAI_API_KEY=sk-xxx npm start`
3. Or add to `.env` in the server folder

## Deploy

Deploy this server to Render, Railway, or similar. Then set `VITE_AI_API_URL` in the portfolio build to your deployed URL.
