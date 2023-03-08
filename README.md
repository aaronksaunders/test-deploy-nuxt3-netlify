# Nuxt 3 Minimal Starter

trying to deploy to netlify and its not working?

```
aaronksaunders@Aarons1ProM1Pro test-deploy % npm run build 

> build
> nuxt build

Nuxi 3.2.3                                                                                                               10:59:54
Nuxt 3.2.3 with Nitro 2.2.3                                                                                              10:59:54
ℹ Building client...                                                                                                     10:59:56
vite v4.1.4 building for production...
✓ 76 modules transformed.
.nuxt/dist/client/manifest.json                        2.02 kB
.nuxt/dist/client/_nuxt/error-500.aa16ed4d.css         1.95 kB │ gzip:  0.74 kB
.nuxt/dist/client/_nuxt/error-404.23f2309d.css         3.63 kB │ gzip:  1.12 kB
.nuxt/dist/client/_nuxt/entry.dd64dcb9.css            12.13 kB │ gzip:  2.49 kB
.nuxt/dist/client/_nuxt/error-component.b4d59593.js    1.12 kB │ gzip:  0.60 kB
.nuxt/dist/client/_nuxt/error-500.8e784aa5.js          1.88 kB │ gzip:  0.99 kB
.nuxt/dist/client/_nuxt/error-404.bdf15230.js          6.08 kB │ gzip:  2.70 kB
.nuxt/dist/client/_nuxt/entry.3aa0e9ed.js            191.41 kB │ gzip: 53.17 kB
✔ Client built in 1046ms                                                                                                 10:59:57
ℹ Building server...                                                                                                     10:59:57
vite v4.1.4 building SSR bundle for production...
✓ 56 modules transformed.
.nuxt/dist/server/_nuxt/welcome-styles.a045e9e2.mjs           0.08 kB
.nuxt/dist/server/_nuxt/error-404-styles.a5c3f351.mjs         0.08 kB
.nuxt/dist/server/_nuxt/error-500-styles.6b5b5ff2.mjs         0.08 kB
.nuxt/dist/server/styles.mjs                                  0.49 kB
.nuxt/dist/server/_nuxt/island-renderer-e91a51a0.js           1.23 kB │ map:   1.63 kB
.nuxt/dist/server/_nuxt/error-component-4c889831.js           2.01 kB │ map:   2.65 kB
.nuxt/dist/server/_nuxt/error-500-styles-1.mjs-0a86f27a.js    2.17 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/error-dev-styles-1.mjs-90bc7cbc.js    2.46 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/error-500-9204cf5a.js                 3.02 kB │ map:   3.78 kB
.nuxt/dist/server/_nuxt/error-404-styles-1.mjs-6ef6e240.js    3.86 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/error-404-45ae4df9.js                 8.75 kB │ map:  17.38 kB
.nuxt/dist/server/_nuxt/welcome-styles-1.mjs-56163e1d.js     12.38 kB │ map:   0.11 kB
.nuxt/dist/server/server.mjs                                117.66 kB │ map: 155.44 kB
✔ Server built in 1089ms                                                                                                 10:59:58
✔ Generated public dist                                                                                            nitro 10:59:58
ℹ Building Nitro Server (preset: netlify-edge)                                                                     nitro 10:59:58
✔ Nitro server built                                                                                               nitro 11:00:01
  └─ .netlify/edge-functions/server.mjs (200 kB) (61.9 kB gzip)
Σ Total size: 200 kB (61.9 kB gzip)
aaronksaunders@Aarons1ProM1Pro test-deploy % netlify deploy
Please provide a publish directory (e.g. "public" or "dist" or "."):
/Users/aaronksaunders/test-deploy
? Publish directory /Users/aaronksaunders/test-deploy/.netlify/edge-functions
Deploy path: /Users/aaronksaunders/test-deploy/.netlify/edge-functions
Deploying to draft URL...
✔ Finished hashing 
✔ CDN requesting 2 files
✔ Finished uploading 2 assets
✔ Deploy is live!

Logs:              https://app.netlify.com/sites/steady-halva-90f7ec/deploys/6408b13eb1ae245aeb05209b
Website Draft URL: https://6408b13eb1ae245aeb05209b--steady-halva-90f7ec.netlify.app

If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag.
netlify deploy --prod

aaronksaunders@Aarons1ProM1Pro test-deploy % 
```