const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const asyncWrapper = require('./async-wrapper')
const logger = require('./logger')
const startController = require('./../controllers/start')

const morganMiddleware = morgan(
     ':method :url :status :res[content-length] - :response-time ms',
     {
          stream: {
               // Configure Morgan to use our custom logger with the http severity
               write: (message) => logger.http(message.trim()),
          },
     }
)

const app = express()

app.use(morganMiddleware)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', asyncWrapper(async (req, res) => {
     return res.redirect('/championship')
}))

app.get('/championship', asyncWrapper(startController.index))
app.post('/championship', asyncWrapper(startController.newChampionship))
app.get('/championship/:cpId', asyncWrapper(startController.getCpMatches))
app.put('/championship/:cpId/matches/:mId', asyncWrapper(startController.updateCpMatch))

module.exports = app