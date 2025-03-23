const championshipModel = require('./model/championship')

const getChampionships = async () => {
    return championshipModel.findAll()
}

const getChampionship = async (cpId) => {
    return championshipModel.findById(cpId)
}

const newChampionship = async (nOfPlayers) => {
    return championshipModel.insert(nOfPlayers)
}

module.exports = {
    getChampionships,
    getChampionship,
    newChampionship
}