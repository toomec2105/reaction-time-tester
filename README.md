# Frontend starter
> Simple fronend starter with basic dependencies and scripts to run app on a server, test, build and deploy to github pages.
## Dependencies
- parcel (build tool with server)
- babel (convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers ) with browserlist and caniuse
- jasmine (testing)
- gh-pages (deployment)
- eslint (linting)
- normalize.css, typography,css (css normalization)
- lodash (sample library use example)
- local-storage
## To run
- git clone <this repo url>
- npm i (installs all dependencies in node_modules)
- use "scripts" in package.json to test, deploy, build, start app on server (localhost:1234)
- in spec/ you'll find a simple test for src/javascripts/module/for-jasmine-test-only.js, whch uses lodash library
### Babel
1. To only include polyfills and code transforms needed for users whose browsers have >0.25% market share (ignoring browsers without security updates like IE 10 and BlackBerry):
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

and in package.json:

"browserslist": "> 0.25%, not dead"

or if you're less ambitious: 
"last 2 Chrome versions" :-)


2. Example environments: chrome, opera, edge, firefox, safari, ie, ios, android, node, electron.
Sidenote, if no targets are specified, @babel/preset-env will transform all ECMAScript 2015+ code by default.
```
{
  "targets": {
    "chrome": "58",
    "ie": "11"
  }
}
```


