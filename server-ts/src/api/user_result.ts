import Router from "koa-router";
import db from "../db";
import { nestObject } from './utils'

const router = new Router()

router 
.get('/', async (ctx, next) => {

    let query = db('userResult').select('*')
    if (ctx.request.query['announcementId']) {
      const announcementId = Number(ctx.request.query['announcementId'])
      query = query.where({ announcementId })
    }
    if (ctx.request.query['isPinned']) {
      const isPinned = Boolean(ctx.request.query['isPinned'])
      query = query.where({ isPinned })
    }
    if (ctx.request.query['keyword']) {
      const keyword = String(ctx.request.query['keyword'])
      query = query.where((it) => {it.where('announcement.topic', 'like', `%${keyword}%`).orWhere('announcement.description', 'like', `%${keyword}%`)})
    }
    const userResults = await query.orderBy('id', 'desc')
    ctx.body = userResults.map(it => nestObject(it, 'announcement'))
  })

  export default router