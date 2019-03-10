require('@babel/register')

require("@babel/polyfill")

const path = require('path')

const app = require('./app.js')

const { middlewares } = require('./config.js')

middlewares.map(
  m => path.join(__dirname, 'middlewares', m)
).forEach(
  _ => require(_)(app)
)

const port = process.env.PORT || 8080

app.listen(
  port,
  () => console.log(`Server is successfully running at port: ${port}!`)
)
