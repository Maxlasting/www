require('@babel/register')
require("@babel/polyfill")

const path = require('path')

const app = require('./core/create-app')

const { middlewares } = require('./config')

middlewares.map(m => path.join(__dirname, 'modules', m)).forEach(_ => require(_)(app))

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is successfully running at port: ${port}!`))
