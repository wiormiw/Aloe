const { default: fetch } = require('node-fetch');
const random = require('../utils/randomFunction');

let keywords = "pillar men";
if (msg.length > 1) {
    keywords = msg.slice(1, msg.length).join(" ");
}
let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.GIF_TOKEN}`;
let response = await fetch(url);
let json = await response.json();
const index = random(json.results);
message.channel.send(json.results[index].url);