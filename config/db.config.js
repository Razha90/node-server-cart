const dotenv = require('dotenv')
dotenv.config()
const url = process.env.MONGODB_ADDON_URI

module.exports= {
    url: url
}