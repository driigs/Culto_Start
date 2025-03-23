const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    id: Number,
    side: String,
    level: Number,
    players: {
        playerA: String,
        playerB: String
    },
    score: {
        playerA: Number,
        playerB: Number
    },
    winner: String
})

const cpSchema = new Schema({
    levels: Number,
    qtyPlayers: Number,
    matches: [
        matchSchema
    ],
    winner: String
})

const Championship = mongoose.model('Championship', cpSchema)

const findAll = async () => {
    return Championship.find({}, { _id: 1 })
}

const findById = async (cpId) => {
    return Championship.findById(cpId)
}

const insert = async (nOfPlayers) => {
    const cp = await createMatches(new Championship(), nOfPlayers)
    await cp.save()
    return cp
}

const updateCpWinner = async (id, val) => {
    const cp = await Championship.findById(id)
    cp.winner = val

    await cp.save()
}

const createMatches = async (cp, nOfPlayers) => {
    const nOfLevels = Math.sqrt(nOfPlayers) 
    
    let remainingPlayers = nOfPlayers
    let matchId = 0
    let matchSide = 'a'
    for (let i=0; i < nOfLevels; i++) {
        for (let j=0; j < (remainingPlayers / 2); i++) {
            matchId++
            cp.matches.push(generateDefaultMatch(matchId, matchSide, i))
            matchSide = (matchSide == 'a') ? 'b' : 'a'
        }
        remainingPlayers = remainingPlayers / 2
    }

    return cp
}

const deleteById = async (id) => {
    await Championship.findByIdAndDelete(id)
}

const generateDefaultMatch = (matchId, matchSide, level) => {
    return {
        id: matchId,
        side: matchSide,
        level: level,
        players: {
            playerA: 'Player A',
            playerB: 'Player B'
        },
        score: {
            playerA: 0,
            playerB: 0
        },
        winner: ''
    }
}

module.exports = {
    findAll,
    insert,
    deleteById
}