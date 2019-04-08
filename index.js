const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
let prefix = %;

const bot = Discord.Client;

bot.login(process.env.BOT_TOKEN)

bot.on("ready", async () => {
  bot.user.setActivity('Привет!', {type: 'STREAMING'});
})

bot.on("message", async message => {
  if(message.author.bot || message.channel.type = "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  switch(messageArray[0]) {
    case prefix + "hello":
        message.channel.send("Привет!")
      break;
})

bot.login(botconfig.token);
