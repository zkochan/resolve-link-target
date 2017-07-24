# resolve-link-target

> Get the filename of a symlink's target

[![npm version](https://img.shields.io/npm/v/resolve-link-target.svg)](https://www.npmjs.com/package/resolve-link-target) [![Build Status](https://img.shields.io/travis/zkochan/resolve-link-target/master.svg)](https://travis-ci.org/zkochan/resolve-link-target)

## Installation

```
npm install --save resolve-link-target
```

## Usage

```js
const resolveLinkTarget = require('resolve-link-target')

resolveLinkTarget('path-to-symlink')
  .then(targetPath => console.log(targetPath))
  //> "/home/target"
  .catch(err => console.error(err))

// or synchronously
resolveLinkTarget.sync('path-to-symlink')
//> "/home/target"
```

## License

[MIT](LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
