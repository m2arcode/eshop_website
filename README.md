# VANTA — Men's Streetwear (Astro + Tailwind)

A fast, static men's clothing site. No database, no WordPress, no monthly hosting cost.
Built with **Astro 5 + Tailwind CSS v4**. Deploys free to **Cloudflare Pages**.

> Brand name "VANTA" is a placeholder — change it anywhere you like (or just ask Claude to).

---

## Pages

| Page | URL | File |
|------|-----|------|
| Home | `/` | `src/pages/index.astro` |
| Category | `/shop/tshirt` · `/shop/hoodie` · `/shop/suit` · `/shop/shorts` | `src/pages/shop/[category].astro` |
| Product | `/product/<id>` (9 demo products) | `src/pages/product/[id].astro` |
| About | `/about` | `src/pages/about.astro` |
| Contact | `/contact` (form → email) | `src/pages/contact.astro` |

All product info lives in **one file**: `src/data/products.js`. Edit that to add/change products.

---

## Editing content (the parts you'll touch)

- **Products** → `src/data/products.js` (name, price, colours, sizes, description, category, badge)
- **Categories** → top of the same file (`categories` array)
- **Brand name / nav** → `src/components/Header.astro` and `src/components/Footer.astro`
- **Homepage copy** → `src/pages/index.astro`
- **Colours / fonts** → `src/styles/global.css` (`--color-ink`, `--color-acid`, etc.)

Product images: drop photos in `public/products/` and swap the placeholder block in
`src/components/ProductImage.astro` for an `<img>`. (Or just send the photos to Claude.)

---

## Run it locally (optional — you don't have to)

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # outputs static site to dist/
```

---

## Deploy free to Cloudflare Pages

1. Push this folder to a **GitHub** repo (private is fine).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Save & Deploy. Every `git push` auto-rebuilds and republishes. Cost: **$0**.

---

## Contact form → email

The contact form (`src/pages/contact.astro`) is wired for **Formspree** (free tier):

1. Sign up at https://formspree.io, create a form, copy the form ID.
2. In `src/pages/contact.astro`, replace `FORMSPREE_ID = 'your-form-id'` with it.

Until then the form falls back to opening the visitor's mail app to `modafocus@gmail.com`.

---

Built with Astro. Maintained by handing change requests to Claude.
