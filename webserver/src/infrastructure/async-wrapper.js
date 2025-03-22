const http = require('http')

const asyncRoute = (route) => (req, res, next) => {
    const cr = route(req, res)

    cr.then((ret) => {
        if (ret instanceof http.ServerResponse) {
            return res
        }
        return res
    }).catch((err) => {
        next(err)
    })
}

module.exports = asyncRoute