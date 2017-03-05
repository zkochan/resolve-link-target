'use strict'
const test = require('tape')
const getLinkTarget = require('.')
const symlinkDir = require('symlink-dir').default
const path = require('path')

test('finds target', t => {
  symlinkDir('node_modules', 'node_modules_link')
    .then(() => getLinkTarget('node_modules_link'))
    .then(target => {
      t.equal(target, path.resolve('node_modules'))
      t.end()
    })
    .catch(t.end)
})
