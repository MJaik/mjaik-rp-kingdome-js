const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = Discord.Client({disableEveryone = true});

bot.on("ready", async () => {
  bot.user.setActivity("Привет!", {type: "STREAMING"});
})
