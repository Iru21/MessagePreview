const {Client, Intents } = require('discord.js');
const Embed = require('./utils/Embed');
const fs = require("fs");

module.exports = class MessagePreview extends Client {
    constructor() {
        super({intents: Intents.ALL})
        this.Embed = Embed
    }
    start() {
        this.login(process.env.TOKEN)
        this.#registerEvnets()
    }
    #registerEvnets = () => {
        fs.readdir("./events/", (err, files) => {
            if (err) return console.error(err);
            files.forEach((file) => {
                if (!file.endsWith(".js")) return;
                const event = require(`./events/${file}`);
                let eventName = file.split(".")[0];
                this.on(eventName, event.bind(null, this));
            });
        });
    }
}