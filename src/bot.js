require('dotenv').config();

const { Client } = require('discord.js');

const client = new Client();

const commandHandler = require('./commands');
  
client.on('ready', () => {
  client.user.setPresence({
    activity: { 
        name: 'Senpai',
        type: 'WATCHING'
    },
    status: 'idle'
  })
});

client.on('message', commandHandler);

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);

  if (newUsers.size > 10) {
    const defaultChannel = guild.channels.cache.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
    const userlist = newUsers.map(u => u.toString()).join(" ");
    defaultChannel.send("Welcome our new users!\n" + userlist);
    newUsers.clear();
  }
});


client.login(process.env.BOT_TOKEN);
