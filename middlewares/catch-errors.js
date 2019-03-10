module.exports = app => app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = '500 Server Error!'
  }
})
