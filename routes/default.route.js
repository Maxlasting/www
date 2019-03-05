const { join } = require('path')
const send = require('koa-send')
const { prefix, get } = require('../core/index.js')

@prefix('/')
class _defaultRouter_ {
  @get('*')
  async _static_ (ctx) {
    ctx.render('404')
  }
}
