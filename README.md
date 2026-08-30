# WorthLater — website

The marketing page, privacy policy and support page for
[WorthLater](https://github.com/cem-ergin/worth_later), the app that asks
whether a purchase is really worth it before you make it.

It exists mostly because both app stores require it: a listing that sells
something needs a published privacy policy and a support URL, and this is
where they live.

## Structure

```
public/
├── index.html          title, description, social and icon metadata
├── manifest.json       PWA metadata
├── icon.svg            the app mark, straight from the brand assets
├── favicon.ico         16 / 32 / 48, packed from the same mark
├── logo192.png         }
├── logo512.png         } derived from appstore_screenshots/brand/
└── apple-touch-icon.png
src/
├── config.js           store link, support address, terms URL, policy date
├── App.js              header, routes, footer
├── App.css             the app's own palette, both appearances
├── components/
│   ├── Mark.js         the icon curve, reduced to what survives at 28px
│   └── StoreButton.js  the download CTA
└── pages/
    ├── Home.js         the pitch
    ├── PrivacyPolicy.js
    └── Support.js
```

Everything the site *states about the product* — the store link, the support
address, the terms URL, the policy's effective date — is in `src/config.js`.
Change it there, not at a call site.

## Conventions worth keeping

* **The palette is the app's palette.** The CSS custom properties in
  `App.css` are `lib/app/theme/app_colors.dart`, token for token, in both
  appearances. Green is scarce: it marks the money you keep and the selected
  state, never the buy button.
* **The figures on the page are the app's arithmetic.** The hero card shows
  $180 becoming $467, which is 10% a year for 10 years. A page that promises a
  number the app then contradicts is worse than a page with no number on it.
* **The disclaimer stays visible.** Quiet, never behind a tap, on the home
  page and in the footer. Same rule as the app.
* **A link that is not published yet says so.** While `APP_STORE_URL` is empty
  the download button reads "Coming to the App Store" and does nothing, rather
  than disappearing. Hiding the gap hides the blocker.
* **Routing is `HashRouter`.** GitHub Pages serves a project path with no
  rewrite rule, so `/#/privacy-policy` is the URL that reliably resolves. That
  is the URL to give App Store Connect and the Play Console.

## Commands

Install:

```bash
npm install
```

Run locally on <http://localhost:3000>:

```bash
npm start
```

Tests (two smoke tests — the brand renders, and the store-required links are
present):

```bash
npm test
```

Build:

```bash
npm run build
```

Deploy to GitHub Pages (builds first, publishes `build/` to the `gh-pages`
branch):

```bash
npm run deploy
```

## Before the app ships

* Fill in `APP_STORE_URL` in `src/config.js` once the listing is live. The
  download button turns into a real link on its own.
* Put the deployed privacy policy URL into the app's
  `AppConstants.privacyPolicyUrl`. Neither store will take a build that sells
  something without one, and the in-app paywall currently says the policy is
  not published yet.
* Give `https://cem-ergin.github.io/worth_later_website/#/support` as the Support URL in
  App Store Connect.
