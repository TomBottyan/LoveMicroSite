# Cat Approved Experiences™

Cat Approved Experiences™ is a static collection of premium QR-code-powered coupon microsites created as gifts for Eszter.

Each physical coupon points to a folder-based microsite with bilingual English/Hungarian copy, Lord Purrcival approval, relationship bureaucracy, legal parody, request flows, certificates, and Cat Approved Experiences™ certification.

## Source Of Truth

`PROJECT.md` is the canonical source of truth for project canon, coupon registry, folder structure, shared frameworks, translation rules, design-system decisions, artwork conventions, and implementation guidance.

When README.md and PROJECT.md differ, `PROJECT.md` wins.

## Hosting Model

This repository is designed for static hosting.

There is no build step, backend, package install, database, or server-side rendering requirement. Coupon pages are plain HTML files that load shared CSS, JavaScript, translations, and image assets from the repository.

Deploy by uploading the repository contents to the web root of `approvedbyacat.com`, preserving the folder structure.

## Folder Structure

```text
CAE/
├── PROJECT.md
├── README.md
├── CHANGELOG.md
├── index.html
├── docs/
│   └── deployment.md
├── shared/
│   ├── style.css
│   ├── app.js
│   ├── translations.js
│   ├── images/
│   │   └── lord-purrcival/
│   └── icons/
├── chef-pass/
├── lazy-day/
├── movie-night/
├── passenger-princess/
├── dining-out/
├── cuddle-authorization/
├── breakfast-in-bed/
├── unlimited-complaining/
├── immediate-boyfriend-deployment/
├── missing-hoodie-act/
├── personal-recharging-permit/
├── girlfriend-priority-access-pass/
└── anti-dick-light-warrant/
```

The root `index.html` is the official entry point and experience catalogue.

Each implemented coupon folder contains its own `index.html` file.

## Implemented Coupons

* `CAE-001` Chef Pass: `chef-pass/index.html`
* `CAE-002` Lazy Day Permit: `lazy-day/index.html`
* `CAE-003` Movie Night Permit: `movie-night/index.html`
* `CAE-004` Passenger Princess Permit: `passenger-princess/index.html`
* `CAE-005` Dining Out Authorization: `dining-out/index.html`
* `CAE-006` Cuddle Authorization: `cuddle-authorization/index.html`
* `CAE-007` Breakfast in Bed Authorization: `breakfast-in-bed/index.html`
* `CAE-008` Unlimited Complaining License: `unlimited-complaining/index.html`
* `CAE-009` Immediate Boyfriend Deployment Order: `immediate-boyfriend-deployment/index.html`
* `CAE-010` The Missing Hoodie Act: `missing-hoodie-act/index.html`
* `CAE-011` Personal Recharging Permit: `personal-recharging-permit/index.html`
* `CAE-012` Anti Dick Light Warrant: `anti-dick-light-warrant/index.html`
* `CAE-013` Girlfriend Priority Access Pass: `girlfriend-priority-access-pass/index.html`

## Shared Assets

Shared files are stored in `shared/`.

* `shared/style.css`: global styling and reusable component styles
* `shared/app.js`: language switching, interactive actions, request flows, transitions, narrative flows, and hidden interactions
* `shared/translations.js`: English and Hungarian translation data
* `shared/images/lord-purrcival/`: coupon-specific Lord Purrcival artwork
* `shared/icons/`: shared icon assets, including the double paw favicon

## Coupon URLs

Coupon URLs are folder-based and should remain stable.

Examples:

* `/chef-pass/`
* `/lazy-day/`
* `/unlimited-complaining/`
* `/anti-dick-light-warrant/`

Do not introduce a `/coupons/` parent folder during deployment.

## Deployment

Upload all repository contents to the web root of `approvedbyacat.com`, preserving the current folder structure.

After upload, test the implemented coupon URLs, language switching, image loading, mobile layout, interactive actions, narrative flows, and localStorage-based request review flows where applicable.
