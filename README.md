# Wdio image comparison service does not work on Saucelabs
To reproduce an issue: 
- install node 18.16.0
- npm install
- setup user, key and region for Saucelabs in [wdio.sauce.ts](wdio.sauce.ts)
- run `npm run test:sauce` - it fails with `TypeError: browser.saveScreen is not a function`
- run `npm run test:local` - it passes

