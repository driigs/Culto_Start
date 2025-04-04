const startSvc = require('./../services/start')
const logger = require('./../infrastructure/logger')

const index = async (req, res) => {
    logger.info('Reading default championship from db...')
    const cp = await startSvc.getDefaultChampionship()
        .catch(err => {
            logger.error('Error reading default championship:', err)
            return res.status(500).send('Error reading default championship!')
        })

    if (cp == null || cp == undefined) {
        logger.error('Could not found nor generate default championship!')
        return res.status(404).send('Could not found nor generate default championship!')
    }
    
    return res.send(cp)
}

const updateCpMatch = async (req, res) => {
    const side = req.params.side
    const level = req.params.level
    const matchId = req.params.mId

    const {
        playerA,
        playerB,
        scoreA,
        scoreB,
        winner
    } = req.body

    logger.info('Updating match:', {
        side,
        level,
        matchId,
        playerA,
        playerB,
        scoreA,
        scoreB,
        winner
    })

    const success = await startSvc.updateCpMatch(side, level, matchId, playerA, playerB, scoreA, scoreB, winner)
        .then((result) => {
            return true
        }).catch((err) => {
            logger.error('Error updating match:', err)
            return res.status(500).send('Error updating match!')
        })
    
    return res.send({
        success
    })
}

const deleteChampionship = async (req, res) => {
    logger.info('Deleting championship...')

    const success = await startSvc.deleteChampionship()
        .then((result) => {
            return true
        }).catch((err) => {
            logger.error('Error deleting championship:', err)
            return res.status(500).send('Error deleting championship!')
        })
    
    return res.send({
        success
    })
}

module.exports = {
    index,
    updateCpMatch,
    deleteChampionship
}