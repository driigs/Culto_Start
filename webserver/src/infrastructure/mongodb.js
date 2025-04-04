const mongoose = require('mongoose')
const logger = require('./../infrastructure/logger')

const connect = async (mongodbStr) => {
    await mongoose.connect(mongodbStr)

    mongoose.connection.on('connected', () => logger.info('MongoDB connected'))
    mongoose.connection.on('disconnected', () => logger.info('MongoDB disconnected'))
    mongoose.connection.on('disconnecting', () => logger.info('MongoDB disconnecting...'))
    mongoose.connection.on('close', () => logger.info('MongoDB close!'))

    return mongoose.connection
}

module.exports = {
    connect
}