require('dotenv-safe').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.API_KEY
const freeclimb = freeclimbSDK(accountId, authToken)

module.exports = freeclimb
