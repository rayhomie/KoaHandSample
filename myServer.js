// const Koa = require('koa')
const Koa = require('./myKoa/myKoa')


const app = new Koa()

app.use((ctx) => {
  // ctx.res.end('hello myKoa')
  ctx.body = 'leihao'
})

app.listen(8089, () => {
  console.log('server is running http://localhost:8089')
})