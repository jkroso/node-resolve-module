
# resolve-module

  A minimal implementation of the resolve module. It cheats and uses some of nodes "private" internals but they consider their module API frozen so no need to worry.

## Installation

`npm install resolve-module`

then in your app:

```js
var resolve = require('resolve-module')
```

## API

### resolve(base, name)

```js
resolve(__dirname, 'jsmd') // => __dirname + '/node_modules/jsmd/lib/jsmd.js'
resolve(__dirname, 'fs') // => 'fs'
resolve(__dirname, './') // => __dirname + '/index.js'
```
