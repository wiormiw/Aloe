require('dotenv').config();

const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

const h_msg = [
    'Nanika? :face_with_raised_eyebrow:',
    '~Ohayou~ :sunglasses:'
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', message => {
    let randomIndex = Math.floor(Math.random() * h_msg.length);
    if (message.content === 'Hello, Aloe!') {
      const embed = new MessageEmbed()
        .setTitle('Message from ALOE')
        .setColor(0xff0000)
        .setDescription(h_msg[randomIndex]);
      message.channel.send(embed);
    }
    else if (message.content == "AYAYAY") {
        const embed = new MessageEmbed()
        .setTitle('Message from ALOE')
        .setColor(0xff0000)
        .setDescription('_AYAYAYAYAYAYAY_')
        .setImage('https://s2.dmcdn.net/v/I0sW11O5mm8OVPv9t/x1080')
        message.channel.send(embed);
    }
  });

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'announcement');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });
  
  client.login(process.env.BOT_TOKEN);