const validStringWrapper = (value) => {
    return (value != null && value != undefined) ? value : ''
}

const validIntWrapper = (value) => {
    return (value != null && value != undefined && value != '') ? value : 0
}

module.exports = {
    validStringWrapper,
    validIntWrapper
}