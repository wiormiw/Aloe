"use strict"

const { default: fetch } = require('node-fetch');
const random = require('../utils/randomFunction');

module.exports = async function (message, args) {
    let keywords
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.GIF_TOKEN}`;
    let response = await fetch(url);
    let json = await response.json();

    // didieu rek random wae?
    const index = random(json.results);
    message.channel.send(json.results[index].url);
}