"use strict"

const { default: fetch } = require('node-fetch');
const random = require('../utils/randomFunction');

module.exports = async function (message, args) {
    let keywords, index;
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.GIF_TOKEN}`;
    let response = await fetch(url);
    let json = await response.json();
    let words = keywords.split(" ");
    if (words[words.length-1] == "random") {
        index = random(json.results);
    } else {
        let option = isNaN(parseInt(words[words.length-1])) ? 0 : parseInt(words[words.length-1])
        index = option;
    }
    message.channel.send(json.results[index].url);
}