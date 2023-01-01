import Router from 'koa-router'

const router = new Router()

router
  .get('/api/greet', async (ctx, next) => {
  ctx.body = {msg: 'Hello world.'}
  })

export default router