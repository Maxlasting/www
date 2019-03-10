const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  middlewares: [
    'catch-errors',
    'favicon',
    'render-html',
    'router'
  ],

  routes: [
    'default.route'
  ]
}
