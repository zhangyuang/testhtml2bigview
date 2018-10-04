const html2bigview = require('html2bigview')
// const redis = require('redis')
// const client = redis.createClient()

async function index (ctx) {
  const time = new Date().getTime()
  global.startTime = time
  const url = 'http://g.alicdn.com/ku/bigview.runtime/1.4.9/html2bigview/index.html'
  await html2bigview(ctx, url, {
    zip: true,
    // redisClient: client,
    headJs: [],
    tplPath: 'src/tpl'
  })
}

module.exports = index
