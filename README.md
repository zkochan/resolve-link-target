# get-link-target

> Get the filename of a symlink's target

[![npm version](https://img.shields.io/npm/v/get-link-target.svg)](https://www.npmjs.com/package/get-link-target) [![Build Status](https://img.shields.io/travis/zkochan/get-link-target/master.svg)](https://travis-ci.org/zkochan/get-link-target)

## Installation

```
npm install --save get-link-target
```

## Usage

```js
const getLinkTarget = require('get-link-target')

getLinkTarget('path-to-symlink')
  .then(targetPath => console.log(targetPath))
  //> "/home/target"
  .catch(err => console.error(err))

// or synchronously
getLinkTarget.sync('path-to-symlink')
//> "/home/target"
```

## License

[MIT](LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
