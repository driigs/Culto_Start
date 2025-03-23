const app = require('./infrastructure/express')
const logger = require('./infrastructure/logger')
const mongo = require('./infrastructure/mongodb')

const port = process.env.PORT
const mongodbStr = process.env.MONGO_URI

const mongoConn = mongo.connect(mongodbStr)
app.listen(port, () => {
    logger.info(`app listening on port ${port}`)
})

const closeSvr = () => {
    logger.info(`app stopping on port ${port}`)
    mongoConn.close()
    process.exit(0)
}

process.once('SIGTERM', closeSvr)
process.once('SIGINT', closeSvr)
process.once('SIGHUP', closeSvr)