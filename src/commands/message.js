const { MessageEmbed } = require('discord.js');
const random = require('../utils/randomFunction');

const h_msg = [
    'Nanika? :face_with_raised_eyebrow:',
    '~Ohayou~ :sunglasses:'
];

module.exports = function(message){
    const embed = new MessageEmbed()
    .setTitle('Message from ALOE')
    .setColor(0xff0000)
    .setDescription(h_msg[random(h_msg)]);
    message.channel.send(embed);
} 

