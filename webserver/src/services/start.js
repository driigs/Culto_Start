const getChampionships = async () => {
    return [
        {
            _id: '1',
            name: 'Test Championship 1'
        },
        {
            _id: '2',
            name: 'Test Championship 2'
        }
    ]
}

const getCpMatches = async (cpId) => {
    return [
        {
            championshipId: cpId,
            matchId: '1'
        },
        {
            championshipId: cpId,
            matchId: '2'
        }
    ]
}

module.exports = {
    getChampionships,
    getCpMatches
}