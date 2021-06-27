const Discord = require('discord.js')
const clientType = Discord.Client
/**
 * 
 * @param {clientType} client 
 */
module.exports = (client) => {
    client.user.setStatus("online");
    client.user.setActivity("watching your messages!", { type: 5 });
    console.log("Ready!");
}