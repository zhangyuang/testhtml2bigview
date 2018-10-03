const html2bigview = require('html2bigview')
const redis = require('redis')
const client = redis.createClient()

async function index (ctx) {
  ctx.compress = true
  let time = new Date().getTime()
  console.log('开始时间', time)
  global.startTime = time
  const url = 'http://localhost/test/index.html'
  await html2bigview(ctx, url, {
    zip: true,
    redisClient: client
  })
}

module.exports = index
