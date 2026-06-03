# Cat Approved Experiences™

Cat Approved Experiences™ is a collection of playful, premium QR-code-powered coupon microsites created as gifts for Eszter.

Each physical coupon contains a short title and a QR code. Scanning the code opens a themed microsite with fake approvals, permits, compliance reviews, certificates, request forms, and relationship bureaucracy.

## Source of Truth

`PROJECT.md` is the canonical source of truth for the project. It defines the canon, tone, repository structure, translation rules, language switcher behavior, shared lore, frameworks, and design-system decisions.

When project-wide decisions change, regenerate `PROJECT.md` so future coupons inherit the same rules.

## Structure

Coupons live in their own folders:

* `chef-pass/`
* `lazy-day/`
* `movie-night/`
* `passenger-princess/`
* `dining-out/`
* `cuddle-authorization/`
* `breakfast-in-bed/`
* `unlimited-complaining/`
* `immediate-boyfriend-deployment/`

Shared assets live in `shared/`:

* `shared/style.css` for the global design system
* `shared/app.js` for shared behavior
* `shared/translations.js` for English and Hungarian copy
* `shared/images/` and `shared/icons/` for shared assets

Planned coupon folders may contain only `.gitkeep` until their microsites are generated.

## Current Coupons

`CAE-001` Chef Pass is implemented in `chef-pass/index.html`.

`CAE-002` Lazy Day Permit is implemented in `lazy-day/index.html`.

`CAE-003` Movie Night Authorization is implemented in `movie-night/index.html`.

`CAE-004` Passenger Princess Permit is implemented in `passenger-princess/index.html`.

`CAE-005` Dining Out Authorization is implemented in `dining-out/index.html`.

`CAE-006` Cuddle Authorization is implemented in `cuddle-authorization/index.html`.

`CAE-007` Breakfast in Bed Authorization is implemented in `breakfast-in-bed/index.html`.

`CAE-008` Unlimited Complaining License is implemented in `unlimited-complaining/index.html`.

`CAE-009` Immediate Boyfriend Deployment Order is implemented in `immediate-boyfriend-deployment/index.html`.

## Lore

All coupons belong to the Cat Approved Experiences™ universe and preserve the same official relationship-bureaucracy tone, including Lord Purrcival / Dorombárd Úr references and Cat Approved certification language.

## Governance

Project decisions are organized across Canon & Design Council, Implementation & Development, and Artwork Studio workstreams. Coupon categories and future coupon identifiers are governed in `PROJECT.md`.

## History

Project history starts in `CHANGELOG.md` with the v1 foundation baseline.
