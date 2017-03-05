'use strict'
const fs = require('graceful-fs')
const path = require('path')

module.exports = getLinkTarget

function getLinkTarget (linkPath) {
  linkPath = path.resolve(linkPath)
  return new Promise((resolve, reject) => {
    fs.readlink(linkPath, (err, link) => {
      if (err) {
        reject(err)
        return
      }
      if (path.isAbsolute(link)) {
        resolve(link)
        return
      }
      resolve(path.join(path.dirname(linkPath), link))
    })
  })
}
