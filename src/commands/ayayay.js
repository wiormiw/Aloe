"use strict"

const { MessageEmbed } = require('discord.js');

module.exports = 
function (message) {
    const embed = new MessageEmbed()
    .setTitle('Message from ALOE')
    .setColor(0xff0000)
    .setDescription('_AYAYAYAYAYAYAY_')
    .setImage('https://media1.tenor.com/images/77dbea24386c8908e8fcfdab9a31f679/tenor.gif?itemid=15161246')
    .setTimestamp()
    message.channel.send(embed);
}