const Discord = require("discord.js");

const TOKEN = "OTM2NDQ2MjYwNTQ0Njk2Mzcx.YfNTig.cEHzkg_0wbvseHeA5Qr-1FunHJw"

const prefix = '=';

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready",()=>{
    console.log('logged in as the bot ya fuck')
})

client.on("messageCreate", (message)=>{
    if (message.content == "hi"){
        message.reply("hello?")
    }
})

client.login(TOKEN);