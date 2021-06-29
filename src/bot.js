require('dotenv').config();

const { Client } = require('discord.js');

const client = new Client();

const commandHandler = require('./commands');
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', commandHandler);

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'announcement');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.BOT_TOKEN);
