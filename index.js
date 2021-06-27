require('dotenv').config()
const MessagePreview = require('./client')
const client = new MessagePreview()
client.start()