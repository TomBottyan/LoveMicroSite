# Cat Approved Experiences™

Cat Approved Experiences™ is a collection of playful, premium QR-code-powered coupon microsites created as gifts for Eszter.

Each physical coupon contains a short title and a QR code. Scanning the code opens a themed microsite with fake approvals, permits, compliance reviews, certificates, and relationship bureaucracy.

## Source of Truth

`PROJECT.md` is the canonical source of truth for the project. It defines the canon, tone, repository structure, translation rules, language switcher behavior, shared lore, and design-system decisions.

When project-wide decisions change, regenerate `PROJECT.md` so future coupons inherit the same rules.

## Structure

Coupons live in their own folders, such as `chef-pass/`.

Shared assets live in `shared/`:

* `shared/style.css` for the global design system
* `shared/app.js` for shared behavior
* `shared/translations.js` for English and Hungarian copy
* `shared/images/` and `shared/icons/` for future shared assets

Planned coupon folders may contain only `.gitkeep` until their microsites are generated.

## Current Coupon

`CAE-001` Chef Pass is implemented in `chef-pass/index.html`.

## Lore

All coupons belong to the Cat Approved Experiences™ universe and preserve the same official relationship-bureaucracy tone, including Lord Purrcival / Dorombárd Úr references and Cat Approved certification language.

## History

Project history starts in `CHANGELOG.md` with the v1 foundation baseline.
