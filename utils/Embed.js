const { MessageEmbed } = require('discord.js');
module.exports = class Embed extends MessageEmbed {
    constructor() {
        super()
        this.setColor('#E8B4B8')
        this.setFooter('MessagePreview | By: Mateusz#1738', 'https://cdn.discordapp.com/avatars/288680166421692416/a_b930831cb456d4d123e48d96a52398f6.gif?size=256&f=.gif')
        this.setTimestamp()
        return this
    }
}