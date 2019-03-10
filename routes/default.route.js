const { prefix, get } = require('../core/index.js')

@prefix('/')
class __decorator_default_router__ {
  @get('*')
  async _route_01_ (ctx) {
    ctx.render('404')
  }
}
