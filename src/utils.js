const jwt = require('jsonwebtoken')
const APP_SECRET = 'qwern-latadasha'

function getUserId(context) {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace(newFunction(), '')
        const { userId } = jwt.verify( token, APP_SECRET)
        return userId 
    }
    throw new Error ('Not authenticated')

    function newFunction() {
        return 'Bearer'
    }
}

module.exports = {
    APP_SECRET,
    getUserId
}
