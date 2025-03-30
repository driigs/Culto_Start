const championshipModel = require('./model/championship')
const logger = require('./../infrastructure/logger')
const { validIntWrapper, validStringWrapper } = require('./utils')

const getDefaultChampionship = async () => {
    logger.info('Reading all championships from db...')
    const cps = await championshipModel.findAll()
    let cp = {}

    if (cps.length == 0) {
        logger.info('Not found any championship, will generate default...')
        cp = await championshipModel.insertDefault()
    } else {
        logger.info('Found championship, will use last created...')
        cp = cps[cps.length - 1]
    }

    return cp
}

const updateCpMatch = async (side, level, matchId, playerA, playerB, scoreA, scoreB, winner) => {
    const cp = await getDefaultChampionship()
    const match = await championshipModel.getCpMatch(cp, side, level, matchId)

    match.players.playerA = validStringWrapper(playerA)
    match.players.playerB = validStringWrapper(playerB)

    match.score.playerA = validIntWrapper(scoreA)
    match.score.playerB = validIntWrapper(scoreB)

    match.winner = validStringWrapper(winner)

    return championshipModel.updateCpMatch(cp, side, level, matchId, match)
}

module.exports = {
    getDefaultChampionship,
    updateCpMatch
}