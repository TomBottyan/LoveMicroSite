# Cat Approved Experiences™

## Project Overview

Cat Approved Experiences™ is a collection of humorous QR-code-powered coupon microsites created as gifts for Eszter.

Each physical coupon contains only a short title and a QR code.

Scanning the QR code opens a themed microsite that reveals the full experience through interactive content, fake bureaucracy, legal humor, approvals, permits, audits, request forms, certificates, and official confirmations.

The microsites should feel like they belong to the same universe.

---

# Source of Truth

PROJECT.md is the canonical source of truth for this repository.

PROJECT.md is the single source of truth for the project.

When conversation history conflicts with PROJECT.md, PROJECT.md wins.

New canon decisions should be documented in PROJECT.md before implementation begins.

Reusable implementation decisions should be documented in PROJECT.md before being reused elsewhere.

When project-wide decisions change, PROJECT.md must be regenerated so future coupons inherit the same canon, structure, translation rules, interaction rules, design expectations, reusable components, action framework rules, redemption request framework rules, and asset conventions.

README.md may summarize the project, but PROJECT.md governs implementation decisions.

---

# Project Governance

The Cat Approved Experiences™ project is maintained through three dedicated workstreams.

## Canon & Design Council

Responsible for:

* Coupon concepts
* Naming
* Lore
* Relationship humor
* Character development
* Future coupon ideas
* Canon decisions

This workstream defines what becomes part of the Cat Approved Experiences™ universe.

## Implementation & Development

Responsible for:

* Implementation prompts
* Framework evolution
* Shared components
* Translations
* UX consistency
* Microsite development
* PROJECT.md maintenance

This workstream defines how canon decisions are implemented.

## Artwork Studio

Responsible for:

* Artwork generation
* Artwork refinement
* Visual consistency
* Lord Purrcival illustrations
* Coupon artwork maintenance

This workstream defines how the project is visually represented.

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

## People And Roles

Recipient:

Eszter

Assigned fulfiller:

Tomi

Redemption request flows should be personal to Eszter and should assign submitted cases to Tomi when fulfillment is required.

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
* Receives request notices
* Occasionally accepts snacks as unofficial compensation

The joke is that everyone treats him as a legitimate authority.

The project should never explicitly state whether he is a real cat.

---

## Lord Purrcival Visual Canon

Canonical visual reference image:

```text
shared/images/lord-purrcival/reference-chef-pass.png
```

The character shown in `shared/images/lord-purrcival/reference-chef-pass.png` is the canonical visual reference for Lord Purrcival.

Future Lord Purrcival artwork must preserve:

* Face proportions
* Eye shape
* Fur pattern
* Cheek fluff
* Expression style
* Overall character identity

Future artwork may vary:

* Clothing
* Accessories
* Props
* Environment
* Department theme
* Coupon-specific certificate or permit materials

Future artwork should read as the same official approving authority appearing in a different department context. The character identity should remain stable even when the coupon theme changes.

## Canon Safety Rules

The following content is considered protected canon and should not be modified unless explicitly requested.

English:

* `Therapy ... :)`

Hungarian:

* `Terápiás ... :)`
* `A barátnőm nem éhes`

These strings may be referenced by implementations, translations, artwork, and future coupons.

Preserve them exactly as written.

---

# Coupon Categories

Coupons may belong to one or more categories.

Categories are organizational only.

A coupon may belong to multiple categories.

Categories must not affect URLs, CAE numbering, implementation structure, routing, or folder layout.

## Service Coupons

Experiences where one partner performs a service for the other.

Examples:

* Chef Pass
* Breakfast in Bed Authorization

## Experience Coupons

Experiences intended to be enjoyed together.

Examples:

* Movie Night Authorization
* Dining Out Authorization

## Comfort Coupons

Experiences focused on affection, relaxation, or emotional support.

Examples:

* Cuddle Authorization
* Lazy Day

## Emergency Relationship Coupons

Humorous permits intended for exceptional circumstances.

Examples:

* Passenger Princess Permit
* Unlimited Complaining License

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

Each coupon page declares its official coupon identifier using:

```html
<body data-coupon-id="CAE-001">
```

The shared app loads the matching translation set from `shared/translations.js` and applies it to all elements with `data-i18n`.

English is the default language.

Coupon HTML may include English fallback text for initial rendering, no-JavaScript readability, and easier authoring. The canonical translated copy still lives in `shared/translations.js`.

Any user-facing coupon text that changes by language must use `data-i18n` and must have English and Hungarian entries in `shared/translations.js`.

Translatable accessibility labels must use `data-i18n-aria-label`.

Translatable image alt text must use `data-i18n-alt`.

Translatable placeholders must use `data-i18n-placeholder`.

Interactive action titles, status message pools, and final success results must be localized in `shared/translations.js`.

Redemption request screen text, field labels, validation messages, option labels, success confirmations, and submitted-detail labels must be localized in `shared/translations.js`.

Redemption request transition messages must be localized in `shared/translations.js`.

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

Permit-like and officially authorized

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
* Approval Officer component
* Interactive Action Framework
* Redemption Request Framework

---

## Visual Language

Use:

* Rounded cards
* Soft shadows
* Comfortable spacing
* Clean typography
* Subtle animations
* Small approval-paw details on hover
* Official permit hierarchy
* Sequential action status output that feels like an official process
* Dedicated request forms for redemption flows
* Clear ceremonial transitions between coupon state and request state
* Ceremonial submitted-request confirmations that feel rewarding and official

Legal notice cards:

* Legal notice bullet lists must leave one empty row of spacing above the first bullet item.
* This spacing is a shared design-system rule handled by `.legal-list` in `shared/style.css`.
* Future coupon legal notice cards should use the shared `.legal-list` class to inherit this spacing.

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

## Approval Officer Component

The Approval Officer component is a reusable Cat Approved Experiences™ design-system component.

Purpose:

The component presents Lord Purrcival as the official approving authority for a coupon. It is an authorization credential, not decorative artwork.

Required content:

* Official portrait
* Officer name
* Officer title
* Cat Approved certification

Required behavior:

* The portrait must be displayed prominently.
* The portrait must live inside the Approval Officer component.
* The portrait must not be used as a hero banner.
* The portrait must not be used as a background image.
* The component should read as one cohesive official card.
* The portrait should be treated like a certificate attachment or official approval portrait.
* The layout should prioritize showing as much of the portrait artwork as possible.
* Avoid split image/information panel layouts that crop the artwork or create empty competing panels.
* The component must be responsive and mobile-first.
* The component must preserve the shared typography and color palette.
* The component must support translated officer text and translated alt text.

Preferred page hierarchy for Chef Pass and future permit-like coupons:

```text
Coupon title
Approved by Lord Purrcival
Approval Officer Card
Application Status
Benefits
Remaining content
```

Future coupons may reuse the component by preserving the same structure and replacing only the portrait path and coupon-specific translation keys where necessary.

---

## Interactive Action Framework

The Interactive Action Framework is a reusable global system for lightweight official coupon interactions.

Purpose:

Interactive actions should feel like funny official reviews, inspections, audits, authorizations, or permit checks conducted by Cat Approved Experiences™.

Interactive actions are not redemption flows. They are small, repeatable, low-commitment interactions that add bureaucracy and humor without collecting structured fulfillment information.

Examples:

* Compliance Audit
* Movie Night Review
* Relaxation Authorization
* Shopping Escort Evaluation
* Blanket Compliance Inspection
* Couch Occupancy Permit

Rules:

* Every coupon may contain one or more interactive actions.
* Each action is declared in coupon HTML using `data-action`.
* Each action output target is declared using `data-action-output`.
* Shared execution behavior lives in `shared/app.js`.
* Localized action content lives in `shared/translations.js`.
* Each action must define a localized action title or button label.
* Each action must define a localized status message pool.
* Each localized status message pool must contain at least ten messages.
* Each action execution randomly selects at least five status messages from the localized pool.
* Selected messages appear sequentially with delays.
* Each action must define a localized final success result.
* The final success result should feel like an official determination, certification, authorization, or permit outcome.
* Actions must remain humorous through serious bureaucratic language.
* Future coupons should add action data to translations and action hooks to HTML without changing core action logic.

Preferred action translation shape:

```text
actions: {
    actionKey: {
        title: "...",
        messages: [
            "...",
            "..."
        ],
        success: {
            title: "...",
            body: "...",
            detailLabel: "...",
            detailValue: "..."
        }
    }
}
```

Chef Pass action:

`chefPassAudit`

English final result:

COMPLIANT ✓

The proposed culinary operation satisfies all requirements of the Domestic Happiness Act.

Risk Level:

Extremely Delicious.

Hungarian final result:

MEGFELELT ✓

A tervezett kulináris művelet megfelel a Háztartási Boldogság Törvény valamennyi előírásának.

Kockázati besorolás:

Rendkívül Finom.

---

## Redemption Request Framework

The Redemption Request Framework is a reusable global frontend system for deeper post-click coupon redemption flows.

Purpose:

Redemption requests should make Eszter feel like she is officially filing a request under an approved Cat Approved Experiences™ permit. This is more substantial than an interactive action and may collect structured input needed for fulfillment.

Distinction from Interactive Action Framework:

* Interactive actions are lightweight audits, inspections, or checks.
* Redemption requests are dedicated request screens or internal page states.
* Interactive actions may be repeated for humor.
* Redemption requests are intended to create a persisted submitted request.
* Interactive actions display randomized status messages.
* Redemption requests collect structured user input and show a reviewable confirmation.

Rules:

* Every completed coupon should have one primary redemption request entry point.
* Coupon HTML must declare the official coupon id using `data-coupon-id`.
* Request entry buttons may use `data-request`.
* The request screen may be rendered on the same page or as a dedicated internal state.
* Shared request behavior lives in `shared/app.js`.
* Localized request content lives in `shared/translations.js`.
* Request screens must support English and Hungarian.
* Request screens should address Eszter by name.
* New request flows should show a clear transition state before the form appears.
* The transition should soften or fade the original coupon content, display a formal processing panel, and then reveal the request screen.
* Transition messages must appear sequentially.
* Transition timing should usually complete in about 2.5 to 4 seconds.
* Transitions must respect reduced-motion preferences where practical.
* Requests should assign fulfillment to Tomi when the coupon requires Tomi to perform the benefit.
* Requests may collect structured input specific to each coupon.
* Request form fields that should be persisted must use `data-request-field`.
* Request configuration in `shared/translations.js` should define `dateField`, optional `timeField`, `requiredFields`, `eitherOrFields`, `urlFields`, `optionLabels`, optional `optionDescriptions`, and `summaryFields` as needed.
* Select fields may display localized dynamic option descriptions using `data-option-description`.
* Dynamic option descriptions must update instantly when the selected option changes and when the active language changes.
* Future coupons should be able to add coupon-specific request fields by changing coupon HTML and translation configuration without modifying core request logic.
* Requests are stored in `localStorage` until backend integration exists.
* Submitted requests must be reviewable after page reload.
* After a request is submitted, the original request entry button should be replaced or relabeled to allow review of the submitted request.
* No backend integration is required yet.
* Future coupons should define request fields and localized request copy without changing unrelated coupon behavior.
* Future coupons should define their own localized transition messages while reusing the shared transition component.

Stored request fields should include at least:

* `couponId`
* `couponName`
* `recipientName`
* `assignedTo`
* coupon-specific selected values
* `submittedAt`
* `language`

Preferred request transition translation shape:

```text
redemptionRequest: {
    transitionMessages: [
        "...",
        "..."
    ]
}
```

Chef Pass transition messages:

English:

* Opening official request file...
* Notifying Lord Purrcival...
* Preparing Eszter's culinary request form...
* Assigning Tomi as responsible boyfriend...
* Request desk ready.

Hungarian:

* Hivatalos ügyirat megnyitása...
* Dorombárd Úr értesítése...
* Eszter kulináris kérelmének előkészítése...
* Tomi kijelölése illetékes barátként...
* Kérelmezői pult készen áll.

Chef Pass request fields:

* Date
* Time
* Meal request text
* Recipe URL

Chef Pass date/time rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Prevent same-day times that are already in the past.
* Written meal request or recipe URL is required.
* Chef Pass should not collect meal type. The request should focus on what Eszter wants Tomi to cook.

Examples of future request fields:

Movie Night:

* date/time
* movie title
* snacks
* couch requirements

Movie Night request rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Prevent same-day start times that are already in the past.
* Movie or series title is required.
* Snack request is required.
* Blanket requirement is required.
* Movie Night is a shared experience authorization, not a service request or recovery permit.

Passenger Princess:

* date/time
* destination
* mission type
* optional coffee stop
* additional requests

Passenger Princess request rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Prevent same-day departure times that are already in the past.
* Destination is required.
* Mission type is required.
* Coffee stop and additional requests are optional supporting materials.
* Passenger Princess is a transportation and companionship permit for shopping centers, errands, coffee trips, and other journeys where Tomi drives and accompanies Eszter.

Dining Out:

* date/time
* restaurant name
* cuisine type
* dessert importance level
* additional requests

Dining Out request rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Prevent same-day dining times that are already in the past.
* Restaurant name is required.
* Cuisine type is required.
* Dessert importance level is required.
* Additional requests are optional supporting materials.
* Dining Out is a shared restaurant experience authorization and must remain distinct from Chef Pass, which is a homemade-meal service request.
* The Hungarian cuisine option `A barátnőm nem éhes` is an intentional inside joke and must remain exactly unchanged wherever it appears.

Cuddle Authorization:

* date/time
* cuddle type
* desired duration
* blanket required
* special requests

Cuddle Authorization request rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Prevent same-day cuddle times that are already in the past.
* Cuddle type is required.
* Desired duration is required.
* Blanket required status is required.
* Special requests are optional supporting materials.
* Cuddle Authorization is an affection-only permit and must remain distinct from Lazy Day, which protects recovery and inactivity, and Movie Night, which plans a shared entertainment activity.
* Cuddle types must have short localized dynamic permit explanations.
* The cuddle type strings `Therapy ... :)` and `Terápiás ... :)` are intentional inside jokes and must remain exactly unchanged wherever they appear.

Breakfast in Bed Authorization:

* wake-up method
* preferred beverage
* breakfast selection
* desired delivery date
* preferred delivery time
* special requests

Breakfast in Bed Authorization request rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Prevent same-day delivery times that are already in the past.
* Wake-up method is required.
* Preferred beverage is required.
* Breakfast selection is required.
* Preferred delivery time is required.
* Special requests are optional supporting materials.
* Breakfast in Bed uses a more emotional Morning Preference request pattern rather than a generic form-first structure.
* Breakfast in Bed must remain distinct from Chef Pass. Chef Pass is a homemade cooking request centered on what Tomi should cook; Breakfast in Bed is a luxury morning delivery authorization centered on wake-up style, beverage handling, comfort, and bedside service.
* Breakfast in Bed must not include bacon as a selectable option or suggested request item.

---

## Food Experience Framework

The Food Experience Framework standardizes coupons involving food preparation, food delivery, or food-centered relationship experiences.

Applicable coupons include:

* Chef Pass
* Breakfast in Bed Authorization
* Future food-related experiences

The framework should support:

* Meal-themed artwork
* Approval workflow
* Bilingual support
* Language switcher
* Lord Purrcival approval section
* Cat Approved certification
* Approval Officer component
* Responsive mobile-first layout
* Redemption request capability where applicable

Individual food coupons may still have unique interactions, request fields, artwork direction, or approval details.

The framework exists to ensure consistency, not uniformity.

### Chef Pass

Chef Pass authorizes the recipient to request a home-cooked meal.

Chef Pass intentionally does not require meal type selection.

The experience is centered around recipient choice and flexibility.

### Breakfast in Bed Authorization

Breakfast in Bed Authorization authorizes delivery of breakfast directly to bed.

Breakfast artwork should include breakfast-themed foods such as:

* Eggs
* Cheese
* Pastries
* Fruit
* Coffee

Breakfast artwork should not contain bacon.

This restriction is intentional and part of project canon.

---

Lazy Day:

* date
* relaxation mode
* snack preference
* rest conditions
* optional special request

Lazy Day request rules:

* Prevent selecting dates in the past.
* Allow selection up to 14 days ahead.
* Relaxation mode is required.
* Snack preference, rest conditions, and special request are optional supporting materials.
* Lazy Day relaxation modes must avoid movie-specific concepts so the future Movie Night coupon remains distinct.
* Lazy Day relaxation modes are Couch Mode, Blanket Burrito, Silent Potato, Vampire Mode, and Protected Hibernation.
* Each Lazy Day relaxation mode must provide a short localized dynamic permit explanation.
* Couch Mode authorizes sofa occupancy, casual scrolling, and strategic staring into space.
* Blanket Burrito provides blanket encapsulation, enhanced warmth, and reduced exposure to reality.
* Silent Potato authorizes stationary existence with minimal movement, communication, or ambition.
* Vampire Mode means curtains closed, lights off, and no unnecessary human activity permitted.
* Protected Hibernation means deep uninterrupted rest while Tomi minimizes movement, noise, cupboard exploration, kitchen activity, and general disturbance.

Chef Pass success:

REQUEST REGISTERED ✓

Dear Eszter,

Your culinary request has been officially recorded by Cat Approved Experiences™.

Tomi has been assigned to the case.

Lord Purrcival recommends relaxing while the responsible boyfriend reviews the submitted materials.

Hungarian Chef Pass success:

KÉRELEM RÖGZÍTVE ✓

Kedves Eszter,

A kulináris kérelmedet a Cat Approved Experiences™ hivatalosan rögzítette.

Az ügy Tomi részére kiosztásra került.

Dorombárd Úr pihenést javasol, amíg az illetékes barát áttekinti a benyújtott anyagokat.

---

## Asset Convention

Shared images live in:

```text
shared/images/
```

Lord Purrcival approval portraits live in:

```text
shared/images/lord-purrcival/
```

The canonical visual reference for Lord Purrcival lives at:

```text
shared/images/lord-purrcival/reference-chef-pass.png
```

Coupon-specific Lord Purrcival portraits should use descriptive file names matching the coupon or experience, for example:

```text
shared/images/lord-purrcival/chef-pass.png
shared/images/lord-purrcival/lazy-day.png
shared/images/lord-purrcival/movie-night.png
shared/images/lord-purrcival/passenger-permit.png
shared/images/lord-purrcival/dinning-out.png
shared/images/lord-purrcival/cuddle-authorization.png
shared/images/lord-purrcival/breakfast-in-bed.png
shared/images/lord-purrcival/boyfriend-deployment.png
```

The Chef Pass portrait at `shared/images/lord-purrcival/chef-pass.png` is canon for the Chef Pass experience.

The Lazy Day portrait at `shared/images/lord-purrcival/lazy-day.png` is canon for the Lazy Day Permit experience.

The Movie Night portrait at `shared/images/lord-purrcival/movie-night.png` is canon for the Movie Night Authorization experience.

The Passenger Princess portrait at `shared/images/lord-purrcival/passenger-permit.png` is canon for the Passenger Princess Permit experience.

The Dining Out portrait at `shared/images/lord-purrcival/dinning-out.png` is canon for the Dining Out Authorization experience.

The Cuddle Authorization portrait at `shared/images/lord-purrcival/cuddle-authorization.png` is canon for the Cuddle Authorization experience.

The Breakfast in Bed portrait at `shared/images/lord-purrcival/breakfast-in-bed.png` is canon for the Breakfast in Bed Authorization experience.

The Immediate Boyfriend Deployment portrait at `shared/images/lord-purrcival/boyfriend-deployment.png` is canon for the Immediate Boyfriend Deployment Order experience.

Future coupons can replace the portrait by changing the image source to another file in `shared/images/lord-purrcival/` without changing the Approval Officer component structure.

Future coupon portraits must preserve the Lord Purrcival visual canon while changing only clothing, accessories, props, environment, and department theme.

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

"Lord Purrcival has been notified."

"Tomi has been assigned to the case."

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
│   │   ├── .gitkeep
│   │   └── lord-purrcival/
│   │       ├── reference-chef-pass.png
│   │       ├── chef-pass.png
│   │       ├── lazy-day.png
│   │       ├── movie-night.png
│   │       ├── passenger-permit.png
│   │       ├── dinning-out.png
│   │       ├── cuddle-authorization.png
│   │       ├── breakfast-in-bed.png
│   │       └── boyfriend-deployment.png
│   └── icons/
│       └── .gitkeep
│
├── chef-pass/
│   └── index.html
│
├── movie-night/
│   └── index.html
│
├── lazy-day/
│   └── index.html
│
├── passenger-princess/
│   └── index.html
│
├── dining-out/
│   └── index.html
│
├── cuddle-authorization/
│   └── index.html
│
├── breakfast-in-bed/
│   └── index.html
│
├── immediate-boyfriend-deployment/
│   └── index.html
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
* Lord Purrcival approval portraits reside in `shared/images/lord-purrcival/`.
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
* Approval Officer component styling
* Interactive Action Framework execution
* Interactive action output styling
* Redemption Request Framework execution
* Redemption request transition component styling and behavior
* Redemption request screen styling
* localStorage request persistence
* Reusable Lord Purrcival image conventions
* Future shared images and icons

Use coupon folders for:

* Coupon-specific HTML structure
* Coupon-specific official id using `data-coupon-id`
* Coupon-specific action hooks using `data-action`
* Coupon-specific action output targets using `data-action-output`
* Coupon-specific request entry hooks using `data-request`
* Coupon-specific request fields
* Coupon-specific transition messages in `shared/translations.js`
* Coupon-specific content hooks using `data-i18n`
* Coupon-specific portrait source selection
* Coupon-specific visual sections only when the shared design system cannot reasonably cover them

Avoid duplicating shared behavior inside coupon pages.

---

## Framework First Principle

Before introducing a coupon-specific implementation:

1. Check whether an existing framework already solves the problem.
2. Extend an existing framework where reasonable.
3. Create a new framework only when the behavior is expected to be reused.
4. Avoid one-off solutions that duplicate existing patterns.

The goal is long-term maintainability and consistency across all Cat Approved Experiences™ coupons.

---

# Coupon Registry

## CAE-001

Name:

Chef Pass

Folder:

`chef-pass/`

Department:

Department of Culinary Affairs

Category:

Service Coupon

Status:

Approved

Description:

Authorizes one (1) homemade meal.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/chef-pass.png`

Interactive actions:

* `chefPassAudit`

Redemption request:

Enabled

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-002

Name:

Lazy Day Permit

Folder:

`lazy-day/`

Department:

Department of Relaxation

Hungarian department:

Pihenésügyi Főosztály

Category:

Comfort Coupon

Status:

Approved

Description:

Authorizes one (1) day of doing absolutely nothing.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/lazy-day.png`

Interactive actions:

* `lazyDayInspection`

Redemption request:

Enabled

Request fields:

* Date
* Relaxation mode
* Snack preference
* Rest conditions
* Optional special request

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-003

Name:

Movie Night Authorization

Folder:

`movie-night/`

Department:

Department of Domestic Entertainment

Hungarian department:

Otthoni Szórakoztatási Főosztály

Category:

Experience Coupon

Status:

Approved

Description:

Authorizes one (1) officially recognized Movie Night as a shared experience with movies, snacks, blankets, and quality time.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/movie-night.png`

Interactive actions:

* `movieNightReview`

Redemption request:

Enabled

Request fields:

* Date
* Start time
* Movie or series title
* Snack request
* Blanket requirement

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-004

Name:

Passenger Princess Permit

Folder:

`passenger-princess/`

Department:

Department of Transportation & Companionship

Hungarian department:

Közlekedési és Kísérési Főosztály

Category:

Emergency Relationship Coupon

Status:

Approved

Description:

Authorizes one (1) officially recognized Passenger Princess Journey in which Eszter occupies the front passenger position while Tomi provides transportation, companionship, navigation assistance, emotional support, and parking-related bravery.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/passenger-permit.png`

Interactive actions:

* `passengerPrincessInspection`

Redemption request:

Enabled

Request fields:

* Date
* Departure time
* Destination
* Mission type
* Optional coffee stop
* Additional requests

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-005

Name:

Dining Out Authorization

Folder:

`dining-out/`

Department:

Department of Culinary Exploration

Hungarian department:

Kulináris Felfedezési Főosztály

Category:

Experience Coupon

Status:

Approved

Description:

Authorizes one (1) officially recognized dining out experience where Tomi and Eszter enjoy a restaurant meal together with no cooking, no dishes, and no kitchen duty.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/dinning-out.png`

Interactive actions:

* `diningOutReview`

Redemption request:

Enabled

Request fields:

* Date
* Time
* Restaurant name
* Cuisine type
* Dessert importance level
* Additional requests

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-006

Name:

Cuddle Authorization

Folder:

`cuddle-authorization/`

Department:

Department of Emotional Support

Hungarian department:

Érzelmi Támogatási Főosztály

Category:

Comfort Coupon

Status:

Approved

Description:

Authorizes one (1) officially recognized cuddle session focused only on comfort, affection, emotional recharge, and quality time. No movie, dining, errand, or other activity is required.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/cuddle-authorization.png`

Interactive actions:

* `cuddleAuthorizationReview`

Redemption request:

Enabled

Request fields:

* Date
* Time
* Cuddle type
* Desired duration
* Blanket required
* Special requests

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-007

Name:

Breakfast in Bed Authorization

Folder:

`breakfast-in-bed/`

Department:

Department of Morning Affairs

Hungarian department:

Reggeli Ügyek Főosztálya

Category:

Service Coupon

Status:

Approved

Description:

Authorizes one (1) officially recognized breakfast-in-bed delivery prepared and delivered by Tomi. The experience should feel like luxury hotel morning service mixed with Cat Approved Experiences™ bureaucracy.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/breakfast-in-bed.png`

Interactive actions:

* `breakfastInBedReview`

Redemption request:

Enabled

Request fields:

* Wake-up method
* Preferred beverage
* Breakfast selection
* Desired delivery date
* Preferred delivery time
* Special requests

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

## CAE-009

Name:

Immediate Boyfriend Deployment Order

Folder:

`immediate-boyfriend-deployment/`

Department:

Relationship Emergency Response Division

Hungarian department:

Kapcsolati Vészhelyzeti Reagálási Osztály

Category:

* Comfort Coupon
* Emergency Relationship Coupon

Status:

Approved

Description:

Authorizes the immediate deployment of one (1) boyfriend asset in response to a relationship-related emergency requiring emotional support, physical presence, cuddles, reassurance, snacks, or other reasonable boyfriend services. Eszter's assessment of emergency status is final.

Canonical Lord Purrcival portrait:

`shared/images/lord-purrcival/boyfriend-deployment.png`

Interactive actions:

* `boyfriendDeploymentReview`

Redemption request:

Enabled

Request fields:

* Emergency type
* Requested response
* Report location
* Support needed
* Additional notes

Recipient:

Eszter

Assigned fulfiller:

Tomi

Implementation:

Complete

---

# Future Coupon Registry

Future coupons should receive a CAE identifier before implementation begins.

Planned coupons with assigned identifiers:

## CAE-008

Name:

Unlimited Complaining License

Status:

Planned

Category:

* Comfort Coupon
* Emergency Relationship Coupon

Description:

A humorous permit authorizing temporary unrestricted complaining privileges without immediate problem-solving intervention.

Additional planned concepts awaiting CAE identifiers:

* Blanket Permit
* Couch Occupancy Authorization

Pending future concepts without CAE identifiers should receive an identifier before any implementation prompt is written.

Planned coupon folders may be added as new coupon concepts are approved.

Potential future departments:

* Entertainment Bureau
* Confidential Research Division

Additional departments may be added as new coupons are created.

Potential future actions:

* Movie Night Review
* Shopping Escort Evaluation
* Transportation Readiness Inspection
* Blanket Compliance Inspection
* Couch Occupancy Permit

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
* Use the Approval Officer component for Lord Purrcival approvals
* Use the Interactive Action Framework for lightweight reviews, audits, authorizations, inspections, and permit checks
* Use the Redemption Request Framework for deeper structured redemption flows
* Define an official coupon identifier with `data-coupon-id`
* Keep English as the default language
* Include Hungarian translation support
* Preserve Lord Purrcival references
* Preserve Dorombárd Úr references in Hungarian
* Preserve Cat Approved Experiences™ branding exactly
* Keep coupon-specific text in `shared/translations.js`
* Keep action message pools and success results in `shared/translations.js`
* Keep request screen text, validation text, field labels, options, and confirmation copy in `shared/translations.js`
* Keep request transition messages in `shared/translations.js`
* Mark persisted request form fields with `data-request-field`
* Define request validation, option labels, and submitted-detail summaries in each coupon's `redemptionRequest` configuration
* Define at least ten localized status messages per action
* Display at least five randomly selected status messages per action execution
* Store submitted redemption requests in localStorage until backend integration exists
* Store Eszter as `recipientName` where applicable
* Store Tomi as `assignedTo` where fulfillment is assigned to him
* Allow submitted requests to be reviewed after reload
* Use the shared request transition before showing a new request form unless a submitted request already exists
* Preserve exact inside-joke option strings documented in coupon-specific request rules
* Use `data-i18n-alt` for translated image alt text
* Use `data-i18n-placeholder` for translated form placeholders
* Load shared styling from `shared/style.css`
* Load shared behavior from `shared/app.js`
* Inherit global interactive feedback from the shared design system
* Use English fallback text in HTML only as a fallback for translatable content
* Generate complete replacement files when requested
* Regenerate PROJECT.md whenever project-wide decisions change

This document is the source of truth for the project.
