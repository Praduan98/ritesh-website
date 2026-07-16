# Client logo strip

The home page "Trusted by…" marquee (`components/modules/LogoWall.tsx`) renders each
brand's official logo, greyscale at rest and full color on hover.

## What's here

`<slug>.png` are the brands' **official logos**, pulled from Brandfetch's public API
(https://brandfetch.com) and normalised to a uniform height with transparent
backgrounds:

- shootsta, rb2b, apollo, aws, innofied, allride → official horizontal logo image
- **Woliba** → icon + wordmark lockup (`woliba-mark.png`). Brandfetch stores no full
  horizontal Woliba logo (its `logo`/`symbol` slots return Brandfetch's own placeholder),
  only the real W icon mark, which we pair with the "Woliba" wordmark. If you obtain a
  proper horizontal logo, save it as `public/logos/woliba.png` and set
  `{ name: "Woliba", img: "woliba.png" }` in the component's `LOGOS` array.

## Add / remove / reorder / update brands

Edit the `LOGOS` array in `components/modules/LogoWall.tsx`. To replace any logo, drop a
new file into `public/logos/` and point that brand's `img` at it — same filename = zero
code change. For a crisper asset, download the SVG from `https://brandfetch.com/<domain>`.

## ⚠ Before publishing

Only list companies Ritesh can substantiate as clients, and confirm logo-usage
permission per mark (see the `[CONFIRM]` note in the component). Several names here were
carried over from the reference site's strip and may not be Ritesh's clients.
