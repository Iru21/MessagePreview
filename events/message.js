const Discord = require('discord.js');
const Client = require('../client')
/**
 * 
 * @param {Client} client 
 * @param {Discord.Message} message 
 * @returns 
 */
module.exports = async (client, message) => {
    if(!message.content.includes("discord.com/channels")) return console.log("No message link found")
    const link = message.content.split('/')
    link.shift()
    link.shift()
    link.shift()
    link.shift()
    link.shift()
    const [channelID, messageID] = link
    if(!channelID || !messageID) return console.log("No channel id / message id found")
    const foundChannel = await client.channels.fetch(channelID)
    if(!foundChannel) return console.log("No channel found")
    const foundMessage = await foundChannel.messages.fetch(messageID)
    if(!foundMessage || !foundMessage?.content) return console.log("No message / message content found")
    const embed = new client.Embed()
        .setAuthor('Message Preview', foundMessage.author.avatarURL(), message.content)
        .setDescription(`<@${message.author.id}> linked a [message](${message.content}) by <@${foundMessage.author.id}> from <#${channelID}>`)
        .addField('Message Content', foundMessage.content)
    message.channel.send({embeds: [embed]})
}