# True Zoneless

Proof of concept for Angular [Zoneless](https://angular.dev/guide/experimental/zoneless) experimental feature in v18.

## Instructions

### Install libraries

```console
npm i
```

### Build application

Following command will build application and store it's artifacts into [src/ext/side-panel/](src/ext/side-panel/).

```console
npm run build
```

### Load extension

Extension is based on [manifest v3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3).

In order to install extension, please follow next steps:

- open Chrome (or other Chromium based browser) and open following address _chrome://extensions_
- on RHS toggle on "Developer mode"
- on LHS click "Load unpacked" and navigate to _src/ext/_ inside this repository

### Preview

- open _src/index.html_ in your browser
- open extensions' side panel
