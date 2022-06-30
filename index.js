const Discord = require('discord.js')
const generateImage = require("./generateImage")
const config = ("./config.json")
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_INVITES
    ],
partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "INVITES"]
});
client.on('ready', () => {
console.log(`connecting to ${client.user.tag}
suscesfull connecting ✅`)
client.user.setActivity({ type: "PLAYING", name: `Minecraft HUB` })
})

const welcomeChannelId = "982525742535553044"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Hey <@${member.id}> welcome to Minecraft Hub!`,
        files: [img]
    })
})

client.on("messageCreate", (message) => {
    if (message.content == "ip"){
        message.reply("SOON")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Trovo"){
        message.reply("https://trovo.live/Janko2007")
    }
})


client.login("OTkyMTMxOTAzMDY5MDk0MDQ4.GcqBJH.QgOoIOVFLU5pjzVCWQ_nZC6oGHyip2hnx_D1Ag") 
