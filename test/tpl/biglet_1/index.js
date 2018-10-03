'use strict'

const Biglet = require('biglet')
const path = require('path')

class OtherPage extends Biglet {
  constructor () {
    super()
    this.root = __dirname
    this.tpl = path.join(__dirname, './index.nj')
    this.name = 'biglet_1'
    this.domid = 'biglet_1'
    
  }

  async fetch () {

  }
}

module.exports = OtherPage
