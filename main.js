const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endswish('.js'));
for(let file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.on('ready', () => {
  console.log('Aspa ~ is online!');
});


client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '@everyone');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('779174120558428250').send(` Hey ! <@${guildMember.user.id}> Welcome to Aspire - make sure you get your Roles here ${guildMember.guild.channels.cache.get('794361305065586688')}`)
})




client.login('ODA1MTQ1MjQ5NTE3MjczMTY5.YBWn8g.EwEfzCWsoMrKB-0QGZu4NJrkeqM')