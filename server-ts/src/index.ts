import Koa from 'koa'

import loadFixtures from './fixtures'
import api from './api'
import appConfig from './config'

const app = new Koa()

app
  .use(api.routes())
  .listen(8000)

loadFixtures(appConfig.clearDataBeforeLodingFixture)