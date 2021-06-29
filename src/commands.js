const message = require('./commands/message');
const gif = require('./commands/gif');
const ayayay = require('./commands/ayayay');

const commands = { message, gif, ayayay };

module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) == ';') {
        command = command.substring(1);
        commands[command](message, tokens);
    }
};