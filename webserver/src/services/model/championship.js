const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    id: Number,
    level: Number,
    side: String,    
    players: {
        playerA: String,
        playerB: String
    },
    score: {
        playerA: Number,
        playerB: Number
    },
    winner: String,
    winnerNextMatch: {
        id: Number,
        level: Number,
        side: String,
        player: String
    }
})

const cpSchema = new Schema({
    levels: Number,
    qtyPlayers: Number,
    createDate: Date,
    updateDate: Date,
    matches: {
        left: [
            [ matchSchema ]
        ],
        right: [
            [ matchSchema ]
        ],
        final: [
            [ matchSchema ]
        ]
    },
    winner: String
})

const Championship = mongoose.model('Championship', cpSchema)

const findAll = async () => {
    return Championship.find({})
}

const findById = async (cpId) => {
    return Championship.findById(cpId)
}

const insertDefault = async () => {
    const cp = await generateDefaultChampuionship()
    await cp.save()
    return cp
}

const getCpMatch = async (cpObj, side, level, matchId) => {
    return cpObj.matches[side][level-1][matchId-1]
}

const updateCpMatch = async (cpObj, side, level, matchId, match) => {
    const cp = await findById(cpObj._id)
    let cpWinner = ''

    if (cp == null || cp == undefined) {
        throw new Error('Invalid championship!')
    }

    if (side === 'final' && match.winner !== '') {
        cpWinner = match.winner
    }

    const upd = {
        winner: cpWinner,
        updateDate: new Date(),
        ['matches.' + side + '.' + (level-1) + '.' + (matchId-1)]: match
    }

    return Championship.findByIdAndUpdate(cp._id, upd)
}

const generateDefaultChampuionship = async () => {
    const cp = new Championship({
        levels: 3,
        qtyPlayers: 16,
        createDate: new Date(),
        updateDate: new Date(),
        matches: {
            left: [
                [ 
                    generateDefaultMatch(1, 1, 'left', 1, 2, 'left', 'A'), 
                    generateDefaultMatch(2, 1, 'left', 1, 2, 'left', 'B'),
                    generateDefaultMatch(3, 1, 'left', 2, 2, 'left', 'A'),
                    generateDefaultMatch(4, 1, 'left', 2, 2, 'left', 'B')
                ],
                [ 
                    generateDefaultMatch(1, 2, 'left', 1, 3, 'left', 'A'), 
                    generateDefaultMatch(2, 2, 'left', 1, 3, 'left', 'B') 
                ],
                [ 
                    generateDefaultMatch(1, 3, 'left', 1, 1, 'final', 'A'),
                ]
            ],
            right: [
                [ 
                    generateDefaultMatch(1, 1, 'right', 1, 2, 'right', 'A'),
                    generateDefaultMatch(2, 1, 'right', 1, 2, 'right', 'B'),
                    generateDefaultMatch(3, 1, 'right', 2, 2, 'right', 'A'),
                    generateDefaultMatch(4, 1, 'right', 2, 2, 'right', 'B')                    
                ],
                [ 
                    generateDefaultMatch(1, 2, 'right', 1, 3, 'right', 'A'), 
                    generateDefaultMatch(2, 2, 'right', 1, 3, 'right', 'B') 
                ],
                [ 
                    generateDefaultMatch(1, 3, 'right', 1, 1, 'final', 'B'),
                ]
            ],
            final: [
                [
                    generateDefaultMatch(1, 1, 'final')
                ]
            ]
        },
        winner: ''
    })

    return cp
}

const generateDefaultMatch = (id, level, side = '', nextId = 0, nextLevel = 0, nextSide = '', nextPlayer = '') => {
    const match = {
        id,
        level,
        side,
        players: {
            playerA: '',
            playerB: ''
        },
        score: {
            playerA: 0,
            playerB: 0
        },
        winner: '',
        winnerNextMatch: {
            id: nextId,
            level: nextLevel,
            side: nextSide,
            player: nextPlayer
        }
    }

    return match
}

const deleteChampionship = async (cpObj) => {
    if (cpObj == null || cpObj == undefined) {
        throw new Error('Invalid championship!')
    }

    return Championship.findByIdAndDelete(cpObj._id)
}

module.exports = {
    findAll,
    insertDefault,
    getCpMatch,
    updateCpMatch,
    deleteChampionship
}