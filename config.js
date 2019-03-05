const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  middlewares: [
    'favicon',
    'render',
    'router'
  ],

  routes: [
    'default.route'
  ]
}
