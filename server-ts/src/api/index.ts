import Router from 'koa-router'
import announcement from './announcement'

const router = new Router()

router
  .get('/api/greet', async (ctx, next) => {
  ctx.body = {msg: 'Hello world.'}
  })
  
  .use('/api/announcement', announcement.routes())

export default router