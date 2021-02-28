const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on("ready", () => {
  let activities = [
      `amor na CA$H!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 1000 * 60); 
  client.user
      .setStatus("idle")
      .catch(console.error);
console.log(" _________________ ")
console.log(" | Dev: INTACTOZ | ") 
console.log(" | Estou Online  | ")
console.log(" _________________ ")
});

client.on("message", async message => {

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  let args = message.content.split(" ").slice(1);
 
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  
  
    if(command === "say") {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    }

});



client.login(config.token);