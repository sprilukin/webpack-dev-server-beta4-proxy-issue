# webpack-dev-server 4.0.0.beta issue with proxy property.

## Steps to reproduce:
- checkout repo: `git@github.com:sprilukin/webpack-dev-server-beta4-proxy-issue.git`
- run `npm install`
- run `npm run start`

## Expected result:
dev server started succesfully

## Actual result:
There is an error in the console during starting dev server:

```
(node:8289) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'level' of undefined
    at /Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/webpack-dev-server/lib/Server.js:203:57
    at Array.map (<anonymous>)
    at Server.setupProxyFeature (/Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/webpack-dev-server/lib/Server.js:169:62)
    at Object.proxy (/Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/webpack-dev-server/lib/Server.js:369:16)
    at /Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/webpack-dev-server/lib/Server.js:449:24
    at Array.forEach (<anonymous>)
    at Server.setupFeatures (/Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/webpack-dev-server/lib/Server.js:448:22)
    at new Server (/Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/webpack-dev-server/lib/Server.js:68:10)
    at /Users/sergey/work/my/js/webpack-dev-server-proxy-issue/node_modules/@webpack-cli/serve/lib/startDevServer.js:34:24
    at Array.forEach (<anonymous>)

```