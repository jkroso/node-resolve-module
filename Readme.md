
# resolve-module

  a minimal implementation of the resolve module

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
