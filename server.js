const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'Dev'
const app = express()


app.use(logger('dev'))

app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT}`)
})
console.log(`Developing on ${NODE_ENV} enironment`)