"use strict"

const { MessageEmbed } = require('discord.js');

module.exports = async function (message, args) {
    let nickname = args.slice(1).join(" ");
    let user = message.mentions.users.first();
    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const embed = new MessageEmbed()
    .setTitle('Yoo-hoo!')
    .setColor(0xff0000)
    .setDescription(`Successfully change ${user.tag}'s nickname to ${nickname}`)
    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1RcV02zT_Nz-7nwnaYX3lxzFnfkWKt7Ngw&usqp=CAU')
    .setTimestamp()
    message.channel.send(embed);
};