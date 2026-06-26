# Yongxing Boiler Bangladesh

Marketing website for **Yongxing Boiler** targeting Bangladesh's industrial market.  
Built with Next.js 16 · Tailwind CSS 4 · TypeScript · Deployed on Vercel.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/munim430-ai/Yongxing-Boiler)

### One-click setup

1. Click **Deploy with Vercel** above
2. Connect your GitHub account and import this repo
3. Add the environment variable below (optional — fallback works out-of-the-box)
4. Click **Deploy**

### Environment Variables (Vercel Dashboard → Settings → Environment Variables)

| Variable | Required | Description |
|---|---|---|
| `WEB3FORMS_KEY` | Optional | [Web3Forms](https://web3forms.com) access key for quote form emails |
| `FORM_ENDPOINT_URL` | Optional | Formspree or any POST-to-email endpoint |

> **No env vars?** The form falls back to [formsubmit.co](https://formsubmit.co) — just confirm the one-time verification email sent to `hasibulmunim@gmail.com` after the first submission.

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (region: Singapore `sin1` — closest to Bangladesh)
- **Form Backend**: Web3Forms / Formspree / formsubmit.co

## Contact

**Keystone Consultancy** — Gazipur, Dhaka, Bangladesh  
📞 +880 1941-646278 · ✉️ hasibulmunim@gmail.com
