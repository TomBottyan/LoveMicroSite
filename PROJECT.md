# Cat Approved Experiences™

## Project Overview

Cat Approved Experiences™ is a collection of humorous QR-code-powered coupon microsites created as gifts for Eszter.

Each physical coupon contains only a short title and a QR code.

Scanning the QR code opens a themed microsite that reveals the full experience through interactive content, fake bureaucracy, legal humor, approvals, permits, audits, and certificates.

The microsites should feel like they belong to the same universe.

---

# Source of Truth

PROJECT.md is the canonical source of truth for this repository.

When project-wide decisions change, PROJECT.md must be regenerated so future coupons inherit the same canon, structure, translation rules, interaction rules, and design expectations.

README.md may summarize the project, but PROJECT.md governs implementation decisions.

---

# Target Audience

Primary audience: Eszter.

Eszter works as a legal assistant.

Humor should therefore favor:

* Legal language
* Bureaucratic processes
* Compliance reviews
* Permits and approvals
* Official notices
* Administrative absurdity

Avoid:

* Internet meme humor
* Random jokes
* Childish humor
* Excessive sarcasm

The ideal reaction is:

> "This feels like a law firm and a relationship somehow merged into one organization."

---

# Canon

## Organization

Cat Approved Experiences™

Official certification text:

English:

🐾 Certified by Cat Approved Experiences™

Hungarian:

🐾 A Cat Approved Experiences™ által hitelesítve

The organization is treated as a legitimate authority that regulates relationship activities.

The organization name Cat Approved Experiences™ remains unchanged in all languages.

---

## Mascot

### English

Lord Purrcival

Director of Relationship Affairs

### Hungarian

Dorombárd Úr

Kapcsolatügyi Főigazgató

---

## Character Profile

Lord Purrcival is:

* Extremely professional
* Absurdly bureaucratic
* Highly respected
* Responsible for approvals and permits
* Conducts audits and inspections
* Issues certificates
* Reviews applications
* Occasionally accepts snacks as unofficial compensation

The joke is that everyone treats him as a legitimate authority.

The project should never explicitly state whether he is a real cat.

---

# Translation Services

## Default Language

English

All microsites must load in English by default.

Supported languages:

* English
* Hungarian

---

## Translation Architecture

Shared translation logic lives in:

```text
shared/app.js
```

Shared translation data lives in:

```text
shared/translations.js
```

Each coupon page declares its coupon key using:

```html
<body data-coupon="couponKey">
```

The shared app loads the matching translation set from `shared/translations.js` and applies it to all elements with `data-i18n`.

English is the default language.

Coupon HTML may include English fallback text for initial rendering, no-JavaScript readability, and easier authoring. The canonical translated copy still lives in `shared/translations.js`.

Any user-facing coupon text that changes by language must use `data-i18n` and must have English and Hungarian entries in `shared/translations.js`.

Translatable accessibility labels must use `data-i18n-aria-label`.

Each coupon translation set should include `pageTitle`; `shared/app.js` uses it to update `document.title` when the active language changes.

Existing Lord Purrcival / Dorombárd Úr behavior must remain intact:

* English references Lord Purrcival.
* Hungarian references Dorombárd Úr.
* Cat Approved Experiences™ remains unchanged in both languages.

---

## Language Switcher

### Desktop

Position:

Top-right corner

Purpose:

Utility element only.

Must not dominate the page.

---

### Mobile

Position:

Floating bottom pill

Displayed text:

🇬🇧 Meow | 🇭🇺 Miau

Visible when:

* User is at the top of the page

Hidden when:

* User scrolls down

Visible again when:

* User returns to the top

Transitions should be smooth and subtle.

---

## Labels

🇬🇧 Meow

🇭🇺 Miau

Accompanying text:

English:

Translation services provided by Lord Purrcival in exchange for snacks.

Hungarian:

A fordítást Dorombárd Úr biztosítja némi nasi ellenében.

---

# Design Principles

## Style

Premium

Modern

Mobile-first

Playful but professional

---

## Shared Elements

All microsites should share:

* Typography
* Button styles
* Card styles
* Translation component
* Animations
* Certification styling
* Lore references
* Cat Approved interactive feedback

---

## Visual Language

Use:

* Rounded cards
* Soft shadows
* Comfortable spacing
* Clean typography
* Subtle animations
* Small approval-paw details on hover

Avoid:

* Flashy effects
* Excessive gradients
* Loud colors
* Cluttered layouts
* Meme-like cursor effects
* Large cursor graphics
* Distracting cursor animations
* Custom cursor replacements

---

## Interactive Feedback

Cat Approved Experiences™ uses the standard browser cursor for usability.

Interactive elements receive subtle brand feedback instead of cursor replacement.

On desktop-style devices with hover support:

* Buttons and button-like controls keep the standard pointer cursor.
* Primary interactive controls reveal a small 🐾 approval mark near the control on hover.
* Hover motion is gentle, short, and premium.
* The paw mark should feel like a discreet approval stamp, not a decoration fighting the content.

On mobile and touch devices:

* Cursor-specific behavior is not used.
* Hover-only effects should not be required for usability.

Rules:

* Interaction behavior is defined globally in `shared/style.css`.
* Future coupons inherit the behavior automatically by loading the shared stylesheet.
* Do not use custom cursor graphics.
* Do not use animated cursor replacements.
* Do not add large or gimmicky cat effects.

---

# Humor Guidelines

Good examples:

"Following a review of the submitted relationship records, your application has been approved."

"The Department of Culinary Affairs has authorized one (1) homemade dinner."

"The proposed activity complies with the Domestic Happiness Act."

"Permit granted."

"Inspection completed."

Avoid:

"lol"

"random cat jokes"

"meme references"

The humor should come from taking absurd relationship activities completely seriously.

---

# Technical Structure

Current project root:

```text
LoveMicroSite/
├── PROJECT.md
├── README.md
├── CHANGELOG.md
├── .gitignore
│
├── shared/
│   ├── style.css
│   ├── app.js
│   ├── translations.js
│   ├── images/
│   │   └── .gitkeep
│   └── icons/
│       └── .gitkeep
│
├── chef-pass/
│   └── index.html
│
├── movie-night/
│   └── .gitkeep
│
├── lazy-day/
│   └── .gitkeep
│
└── docs/
    └── .gitkeep
```

Unless specified otherwise:

* Shared CSS resides in `shared/style.css`.
* Shared JavaScript behavior resides in `shared/app.js`.
* Shared translation data resides in `shared/translations.js`.
* Shared icons reside in `shared/icons/`.
* Shared images reside in `shared/images/`.
* Each completed coupon has its own folder and `index.html`.
* Planned coupon folders may contain only `.gitkeep` until the coupon is generated.
* Coupon pages reference shared assets using `../shared/...`.

When modifying existing coupons, regenerate complete files rather than partial snippets.

---

# Shared Ownership Boundaries

Use shared files for:

* Global layout styling
* Global buttons and cards
* Language switcher styling and behavior
* Scroll-based language switcher visibility
* Translation switching
* Shared translation data
* Cat Approved interaction feedback
* Future shared images and icons

Use coupon folders for:

* Coupon-specific HTML structure
* Coupon-specific content hooks using `data-i18n`
* Coupon-specific visual sections only when the shared design system cannot reasonably cover them

Avoid duplicating shared behavior inside coupon pages.

---

# Coupon Registry

## CAE-001

Name:

Chef Pass

Folder:

`chef-pass/`

Department:

Department of Culinary Affairs

Status:

Approved

Description:

Authorizes one (1) homemade meal.

Implementation:

Complete

---

# Future Coupons

Planned coupon folders:

* `movie-night/`
* `lazy-day/`

These are placeholder folders until their coupon pages are generated.

Potential future departments:

* Entertainment Bureau
* Public Accompaniment Office
* Department of Relaxation
* Confidential Research Division

Additional departments may be added as new coupons are created.

---

# Repository Hygiene

Baseline repository files should include:

* `PROJECT.md`
* `README.md`
* `CHANGELOG.md`
* `.gitignore`

Do not commit:

* `.DS_Store`
* `node_modules/`
* `.env`
* `.env.local`
* Build output directories
* Coverage output

---

# Development Rules

When generating future coupons:

* Maintain canon consistency
* Maintain design consistency
* Reuse shared components where possible
* Keep English as the default language
* Include Hungarian translation support
* Preserve Lord Purrcival references
* Preserve Dorombárd Úr references in Hungarian
* Preserve Cat Approved Experiences™ branding exactly
* Keep coupon-specific text in `shared/translations.js`
* Load shared styling from `shared/style.css`
* Load shared behavior from `shared/app.js`
* Inherit global interactive feedback from the shared design system
* Use English fallback text in HTML only as a fallback for translatable content
* Generate complete replacement files when requested
* Regenerate PROJECT.md whenever project-wide decisions change

This document is the source of truth for the project.
