const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== 'COLOCAR SEU ID AQUI!') return message.reply("Sem permissão para este comando!");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(mensagem)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
)}