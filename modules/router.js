const { createRouter } = require('../core')
const { join } = require('path')
const { routes } = require('../config')
const routesPath = join(__dirname, '../routes')

module.exports = app => createRouter(app, routesPath, routes)
