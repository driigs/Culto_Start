const startSvc = require('./../services/start')

const index = async (req, res) => {
    const cps = await startSvc.getChampionships()

    res.send(cps)
}

const newChampionship = async (req, res) => {
    res.send({
        hello: 'world'
    })
}

const getCpMatches = async (req, res) => {
    const cpId = req.params.cpId
    const matches = await startSvc.getCpMatches(cpId)

    res.send(matches)
}

const updateCpMatch = async (req, res) => {
    res.send({
        hello: 'world'
    })
}

module.exports = {
    index,
    newChampionship,
    getCpMatches,
    updateCpMatch
}