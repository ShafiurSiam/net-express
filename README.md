# Net Express — ISP Website

A modern, Bangla-first website for **Net Express**, a Bangladeshi Internet Service
Provider. Built with React + Vite + Tailwind CSS + Framer Motion, structured so that
someone with little coding experience can find and edit content (prices, offers,
phone numbers, images, FAQs...) without touching component code.

> The company name is the only confirmed real detail. Everything else — phone
> number, address, BTRC license, statistics, testimonials, offer copy — is clearly
> marked placeholder content (e.g. `[ফোন নম্বর লিখুন]`) until the real information is
> supplied. See "Placeholder content" below for the full list of what to replace.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Installation](#installation)
3. [Development](#development)
4. [Build](#build)
5. [Preview the production build](#preview-the-production-build)
6. [Folder structure](#folder-structure)
7. [Editing content — the important part](#editing-content--the-important-part)
   - [Company name, phone, address, BTRC license](#company-name-phone-address-btrc-license)
   - [Payment link & methods](#payment-link--methods)
   - [Internet packages](#internet-packages)
   - [Offers & offer images](#offers--offer-images)
   - [Homepage hero image](#homepage-hero-image)
   - [The logo](#the-logo)
   - [Colors](#colors)
   - [Fonts](#fonts)
   - [FAQ](#faq)
   - [Navigation links](#navigation-links)
   - [Social / WhatsApp / Messenger links](#social--whatsapp--messenger-links)
8. [Adding a new package](#adding-a-new-package)
9. [Adding a new offer](#adding-a-new-offer)
10. [Adding a new FAQ item](#adding-a-new-faq-item)
11. [Environment variables](#environment-variables)
12. [Deploying to Vercel](#deploying-to-vercel)
13. [Deploying to Railway](#deploying-to-railway)
14. [Future: Hostinger VPS migration](#future-hostinger-vps-migration)
15. [Placeholder content — full checklist](#placeholder-content--full-checklist)
16. [Troubleshooting](#troubleshooting)

---

## Tech stack

- **React 19** — UI library
- **Vite** — build tool / dev server
- **JavaScript (`.jsx`)** — no TypeScript, on purpose, so the codebase stays easy to
  edit for non-experts
- **Tailwind CSS v4** — utility-first styling, theme tokens defined in
  `src/styles/variables.css`
- **Framer Motion** — animations, all respecting `prefers-reduced-motion`
- **Lucide React** — icon set
- **React Router** — client-side routing

No backend exists yet. Forms (connection request, contact) log to the browser
console and show a confirmation UI — see [Backend readiness](#future-hostinger-vps-migration)-adjacent
`TODO(backend)` comments in the code for where real API calls should go.

## Installation

Requires Node.js 20+.

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`. The build must succeed with no errors before
any change is considered done.

## Preview the production build

```bash
npm run preview
```

Serves the `dist/` folder locally so you can sanity-check the production build.

---

## Folder structure

```text
net-express/
├── public/                    # static files served as-is (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── assets/
│   │   ├── images/{home,offers,about,coverage,packages}/   # section-specific images
│   │   ├── icons/
│   │   └── logo/{logo.svg,logo-white.svg}
│   ├── components/
│   │   ├── layout/    # Navbar, MobileMenu, Footer, FloatingContactButton
│   │   ├── common/    # Button, Container, SectionTitle, AnimatedSection, SEO, PageHeader...
│   │   ├── cards/      # PackageCard, OfferCard, FeatureCard, TestimonialCard
│   │   └── ui/         # Accordion, Modal, ConnectionRequestForm, CountUp, PaymentBadges
│   ├── config/         # company.js, payment.js, social.js, site.js — single source of truth
│   ├── context/        # ConnectionRequestContext — shared "request a connection" modal
│   ├── data/            # packages.js, offers.js, faq.js, statistics.js, navigation.js, testimonials.js, coverageAreas.js
│   ├── pages/            # one file per route
│   ├── sections/home/    # homepage sections, composed together in pages/Home.jsx
│   ├── styles/            # globals.css, variables.css (design tokens), animations.css
│   ├── App.jsx            # routes
│   └── main.jsx           # entry point
├── .env.example
└── vite.config.js
```

**The rule of thumb:** if you're changing *content* (text, prices, images, contact
info), you should only ever need to touch a file in `src/data/` or `src/config/`, or
swap a file in `src/assets/`. You should not need to edit anything under
`src/components/`, `src/sections/`, or `src/pages/` to update content.

---

## Editing content — the important part

### Company name, phone, address, BTRC license

Edit **`src/config/company.js`**. Every field there (phone, email, address, BTRC
license, hotline, working hours) is rendered from this single file — the footer,
the contact page, and the payment page all read from it.

### Payment link & methods

Edit **`src/config/payment.js`**, or set `VITE_PAYMENT_URL` in `.env` (preferred,
since it avoids a code change for a link update). The list of supported payment
methods (bKash, Nagad, Rocket, card) is also in this file — add/remove/reorder
entries in the `methods` array and `PaymentBadges` updates automatically.

### Internet packages

Edit **`src/data/packages.js`**. Each entry has `name`, `price`, `period`,
`features`, and `category` (`"home"` or `"business"`). This single file drives the
homepage packages preview, the full `/packages` page, and the package dropdown in
the connection-request form.

### Offers & offer images

Edit **`src/data/offers.js`** for copy, and replace the matching file in
`src/assets/images/offers/` (e.g. `offer-01.svg`) to change the artwork — keep the
same filename so the import in `offers.js` keeps working, or update the import path
if you rename it.

### Homepage hero image

The hero artwork is `src/assets/images/home/hero.svg`, imported once in
`src/sections/home/HeroSection.jsx`. Replace the file (same filename) to swap the
visual. Since it's an SVG it scales to any screen size, so a separate mobile asset
isn't needed — if you replace it with a raster image (`.webp`/`.png`), update the
import path in `HeroSection.jsx` accordingly.

### The logo

No final logo exists yet — `src/assets/logo/logo.svg` (for light backgrounds, used
in the navbar) and `src/assets/logo/logo-white.svg` (for dark backgrounds, used in
the footer) are placeholder wordmarks. **To replace the logo, swap these two files,
keeping the same filenames and roughly the same aspect ratio (~220×48).** Every
component that shows the logo imports from these two files — you never need to edit
a component to change the logo.

### Colors

Edit **`src/styles/variables.css`**. It defines the design tokens inside a Tailwind
`@theme` block (`--color-primary-red`, `--color-primary-red-dark`,
`--color-background`, `--color-text-secondary`, etc.), which automatically generates
matching Tailwind utility classes (`bg-primary-red`, `text-text-secondary`,
`border-border`, ...). Change a value here and it updates everywhere in the site —
no color is hardcoded inside a component.

### Fonts

Loaded via Google Fonts in `src/styles/globals.css` (`@import url(...)`), with the
font stack defined as `--font-bangla` / `--font-heading` in
`src/styles/variables.css`. Currently: **Hind Siliguri** (primary), with **Noto Sans
Bengali** and **Poppins** as fallbacks.

### FAQ

Edit **`src/data/faq.js`** — an array of `{ id, question, answer }`. Used by both
the homepage FAQ accordion and the `/support` page.

### Navigation links

Edit **`src/data/navigation.js`** — `navLinks` (navbar/mobile menu) and
`footerLinks` (footer columns).

### Social / WhatsApp / Messenger links

Edit **`src/config/social.js`**. `floatingContact` controls the bottom-right
floating button seen on every page (set `type` to `"whatsapp"` or `"messenger"`).

---

## Adding a new package

Open `src/data/packages.js` and add an object to the `packages` array:

```javascript
{
  id: "home-50",
  category: "home", // or "business"
  name: "৫০ Mbps",
  speedValue: 50,
  price: "২২০০",
  period: "মাস",
  features: ["প্রিমিয়াম গতি", "৪K স্ট্রিমিং", "২৪/৭ সাপোর্ট"],
  popular: false,
}
```

It will automatically appear on the homepage packages preview and the `/packages`
page, under the matching category tab.

## Adding a new offer

Add an image to `src/assets/images/offers/` (e.g. `offer-04.svg`), import it at the
top of `src/data/offers.js`, and add an entry to the `offers` array with that image
and your copy.

## Adding a new FAQ item

Add `{ id: "faq-7", question: "...", answer: "..." }` to the array in
`src/data/faq.js`.

---

## Environment variables

Copy `.env.example` to `.env` and fill in real values. **Never commit `.env`.**

| Variable | Purpose |
|---|---|
| `VITE_PAYMENT_URL` | External payment gateway link used by every "বিল পরিশোধ" button |
| `VITE_SITE_URL` | Canonical site URL, used for SEO / Open Graph tags |
| `VITE_GOOGLE_MAPS_KEY` | Only needed if the coverage checker is upgraded to a real map |

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel → framework preset "Vite" (auto-detected).
3. Add the environment variables from `.env.example` in Vercel's project settings.
4. Build command `npm run build`, output directory `dist` (Vercel defaults are
   already correct for Vite).

## Deploying to Railway

1. Push to GitHub, create a new Railway project from the repo.
2. Set the build command to `npm run build` and the start command to
   `npx serve dist` (or use Railway's static-site/Nixpacks preset for Vite).
3. Add the same environment variables as above.

## Future: Hostinger VPS migration

The app is a static build (`npm run build` → `dist/`) with no server-side
dependency on Vercel or Railway specifically. To move to a Hostinger VPS later:

1. Build locally or in CI: `npm run build`.
2. Copy the contents of `dist/` to the VPS.
3. Serve it with any static file server (Nginx, Apache, or `serve`). No Node.js
   runtime is required in production since this is a static SPA — only for the
   build step.
4. If/when a real backend is added (customer login, billing, coverage API — see
   `TODO(backend)` comments throughout `src/`), that would run as a separate
   service on the VPS, with `VITE_API_URL` pointed at it.

---

## Placeholder content — full checklist

These are clearly marked in the code (usually `[কিছু একটা লিখুন]` or `placeholder:
true`) and should be replaced with real information before launch:

- `src/config/company.js` — phone, address, BTRC license number, hotline
- `src/data/statistics.js` — all trust/statistics numbers (customer count, uptime,
  years of experience) are demo values
- `src/data/testimonials.js` — customer names are placeholders
- `src/data/offers.js` — offer validity dates
- `src/config/social.js` — social media URLs point to example.com
- `src/config/payment.js` — payment URL points to example.com (set
  `VITE_PAYMENT_URL` instead of editing this file directly, if possible)
- `src/pages/Terms.jsx` / `src/pages/Privacy.jsx` — placeholder legal text; have a
  professional draft the final wording
- `public/og-image.svg` — placeholder Open Graph share image; replace with a real
  1200×630 image (PNG recommended for widest social-platform compatibility)

## Troubleshooting

**`npm run build` fails with a native-binding / rolldown error on Windows.**
This project pins `vite` to a stable (non-rolldown) release specifically to avoid
this. If you still hit it after `npm install`, delete `node_modules` and
`package-lock.json` and reinstall.

**Bangla text looks broken / boxes instead of letters.**
Check your internet connection during dev — fonts load from Google Fonts. For a
fully offline build, self-host the Hind Siliguri / Noto Sans Bengali font files and
update the `@import` in `src/styles/globals.css`.

**Icons are missing / import errors from `lucide-react`.**
Not every icon name exists in every `lucide-react` version (brand/logo icons like
Facebook or WhatsApp are not included — see `src/components/common/SocialIcons.jsx`
for hand-built alternatives). Check the installed version's icon list before adding
new `lucide-react` imports.

**Changes to `src/data/*` or `src/config/*` don't show up.**
Make sure the dev server picked up the file save (Vite hot-reloads automatically);
if not, restart `npm run dev`.
