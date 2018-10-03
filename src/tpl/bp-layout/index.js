'use strict'

const BigLet = require('biglet')
const path = require('path')

class LayoutPagelet extends BigLet {
  constructor () {
    super()
    this.root = __dirname
    this.name = 'bp-layout'
    this.tpl = path.join(__dirname, './index.nj')
    this.data.bigview = '//g.alicdn.com/ku/bigview.runtime/1.4.9/bigview.runtime.min.js'
  }
}

module.exports = LayoutPagelet
