"use strict"
const { message, ayayay, gif, nickname } = require("./commands/index")

const commands = { message, gif, ayayay, nickname };

module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) == ';') {
        command = command.substring(1);
        console.log(command)
        commands[command](message, tokens);
    }
};