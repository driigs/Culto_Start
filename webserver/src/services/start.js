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

    logger.info(`Updating match ${matchId} on side ${side} and level ${level}...`, {
        playerA: match.players.playerA,
        playerB: match.players.playerB,
        scoreA: match.score.playerA,
        scoreB: match.score.playerB,
        winner: match.winner
    })

    return championshipModel.updateCpMatch(cp, side, level, matchId, match)
}

const deleteChampionship = async () => {
    logger.info('Deleting championship...')

    const cp = await getDefaultChampionship()
    if (cp == null || cp == undefined) {
        logger.error('Could not found nor generate default championship!')
        return false
    }

    return championshipModel.deleteChampionship(cp)
}

module.exports = {
    getDefaultChampionship,
    updateCpMatch,
    deleteChampionship
}