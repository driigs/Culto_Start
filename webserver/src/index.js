const app = require('./infrastructure/express')
const logger = require('./infrastructure/logger')
const port = process.env.PORT

app.listen(port, () => {
    logger.info(`app listening on port ${port}`)
})

const closeSvr = () => {
    logger.info(`app stopping on port ${port}`)
    process.exit(0)
}

process.once('SIGTERM', closeSvr)
process.once('SIGINT', closeSvr)
process.once('SIGHUP', closeSvr)