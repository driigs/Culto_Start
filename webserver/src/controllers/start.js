const startSvc = require('./../services/start')
const logger = require('./../infrastructure/logger')

const index = async (req, res) => {
    logger.info('Reading all championships from db...')
    const cps = await startSvc.getChampionships()

    return res.send({
        championships: cps
    })
}

const newChampionship = async (req, res) => {
    logger.info('Insert new championship into db...')
    const nOfPlayers = req.body.nOfPlayers
    const cp = startSvc.newChampionship(nOfPlayers)
    return res.send(cp)
}

const getChampionship = async (req, res) => {
    logger.info('Reading championship from db...')

    const cpId = req.params.cpId
    const cp = await startSvc.getChampionship(cpId)

    return res.send(cp)
}

const updateCpMatch = async (req, res) => {
    return res.send({
        hello: 'world'
    })
}

module.exports = {
    index,
    newChampionship,
    getChampionship,
    updateCpMatch
}