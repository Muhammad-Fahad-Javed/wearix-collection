WEARIX COLLECTION — Favicon Package
=====================================

INSTALL
1. Copy all files in this folder into your Vite project's /public directory.
2. Add the following tags inside <head> in index.html:

<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#000000">

FILES
- favicon.ico                   Multi-size ICO (16, 32, 48px) — transparent, solid-black glyph for max legibility across all browser chrome
- favicon-16x16.png             16x16, transparent background
- favicon-32x32.png             32x32, transparent background
- apple-touch-icon.png          180x180, opaque black (#000000) background, full metallic detail, iOS home screen ready
- android-chrome-192x192.png    192x192, opaque black background, PWA icon
- android-chrome-512x512.png    512x512, opaque black background, PWA icon
- site.webmanifest              PWA manifest referencing the two android-chrome icons

DESIGN NOTES
- The circular hanger + "W" emblem was isolated from the source logo and used as the icon mark (the small "wearix collection" wordmark was intentionally omitted since text is unreadable at 16–32px — this is standard favicon practice and keeps the brand recognizable at any size).
- 16x16 / 32x32 / .ico use a simplified solid-black silhouette of the emblem so it stays crisp and instantly recognizable at tiny sizes, with a transparent background that reads correctly in both light and dark browser tabs, Google Search results, and bookmarks bars.
- 180 / 192 / 512px icons keep the full brushed-metal/silver detail from your original logo on a black background (matching your brand's premium black + silver aesthetic and the manifest's theme_color/background_color), giving a polished app-icon look on iOS home screens and Android PWA installs.
