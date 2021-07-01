"use strict"

const { MessageEmbed } = require('discord.js');
const random = require('../utils/randomFunction');

const h_msg = [
    'Nanika? :face_with_raised_eyebrow:',
    '~Ohayou~ :sunglasses:',
    'Senpaaaaaai! :blush:',
    'Kyaaaaa~ :laughing:',
];

module.exports = function(message){
    const embed = new MessageEmbed()
    .setTitle('Message from ALOE')
    .setColor(0xff0000)
    .setDescription(h_msg[random(h_msg)])
    .setTimestamp()
    message.channel.send(embed);
} 

