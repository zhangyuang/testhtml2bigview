'use strict'

const Biglet = require('biglet')
const path = require('path')

class OtherPage extends Biglet {
  constructor () {
    super()
    this.root = __dirname
    this.tpl = path.join(__dirname, './index.nj')
    this.name = 'biglet_3'
    this.domid = 'biglet_3'
    
  }

  async fetch () {

  }
}

module.exports = OtherPage
