# Deployment Guide

Cat Approved Experiences™ is a static site.

There is no build step, backend service, package install, database, or server-side application required for deployment.

## Upload

Upload all root files and folders as-is to the web root of `approvedbyacat.com`.

Preserve:

* `shared/`
* every implemented coupon folder
* root documentation files
* relative paths between coupon folders and `shared/`

Do not upload local-only files such as editor settings, temporary files, operating-system metadata, or untracked development artifacts.

## Folder Paths

Coupon URLs are folder-based.

Examples:

* `/chef-pass/`
* `/lazy-day/`
* `/unlimited-complaining/`
* `/anti-dick-light-warrant/`

Do not add a `/coupons/` parent folder during this deployment pass.

## Post-Upload Checks

After upload, test:

* each implemented coupon URL
* language switching on every coupon
* mobile layout on small screens
* Lord Purrcival images and shared assets loading correctly
* interactive actions where present
* narrative or legislation flows where present
* redemption request flows where present
* localStorage request review states where applicable

If a coupon page loads without styling or translations, verify that `shared/` was uploaded at the same level as the coupon folders.
