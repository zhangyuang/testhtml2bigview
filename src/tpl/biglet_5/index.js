'use strict'

const Biglet = require('biglet')
const path = require('path')

class OtherPage extends Biglet {
  constructor () {
    super()
    this.root = __dirname
    this.tpl = path.join(__dirname, './index.nj')
    this.name = 'biglet_5'
    this.domid = 'biglet_5'
    
    this.js = ["http://g.alicdn.com/mtb/lib-flexible/0.4.1/flexible.js","http://g.alicdn.com/ilw/cdnjs/zepto/1.1.6/zepto.min.js","http://g.alicdn.com/hollywood/hollywood-lib/2.0.2/promise.js","http://g.alicdn.com/mtb/lib-mtop/2.3.14/mtop.js","http://js.ykimg.com/youku/dist/js/fwp-bundle/lib.js","http://g.alicdn.com/ku/worldcup-h5-flight-ticket/1.0.8/html2canvas.min.js","http://g.alicdn.com/ku/bigview.runtime/1.4.8/html2bigview/dist/index.bundle.js"]
    
  }

  async fetch () {

  }
}

module.exports = OtherPage
