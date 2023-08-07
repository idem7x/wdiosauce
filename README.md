# Wdio image comparison service does not work on Saucelabs

To reproduce an issue:

- install node 18.17.0
- yarn
- setup user, key and region for Saucelabs in [wdio.sauce.ts](wdio.sauce.ts)
- run `npm run test:sauce` - it fails with `TypeError: browser.saveScreen is not a function`
- run `npm run test:local` - it passes

# Press key does not work for Edge on Saucelabs

To reproduce an issue:

- install node 18.17.0
- yarn
- setup user, key and region for Saucelabs in [wdio.sauce.edge.ts](wdio.sauce.edge.ts)
- run `npm run test:sauceedge` - it fails
  with `Request timed out! Consider increasing the "connectionRetryTimeout" option.`

# Chromedriver bug with reload

To reproduce an issue:

- install node 18.17.0
- yarn
- run `npm run test:chrome` - it fails with `ERROR webdriver: RequestError: read ECONNRESET`
