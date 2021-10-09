"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});

const MESSAGE_RESPONSE = ["Huele a pedo", "La culona", "La hormiga","Es tictocker","CHTM"];
const MESSAGE_RESPONSE2 = ["La que se le cayó la vesícula","La beibi", "La doctora juguetes","La tengo tarea","La que se dio de baja"];
const MESSAGE_RESPONSE3 = ["El ¿Un fornais?","El oficial", "El guapote","El chido","El que se pelea con Isela","El que tiró a mariel", "El hacker"]
const MESSAGE_COLOR = ["Azul","Rojo","Verde","Amarillo","Morado","Blanco","Negro","Naranja","Rosa"];

function gotMessage (message){
  console.log("New Message!", message);
  
  if (message.content === "Sofia" || message.content === "sofia" || message.content === "SOFIA" && !message.author.bot){
    let randomIndex = Math.floor (Math.random() * MESSAGE_RESPONSE.length);
    message.channel.send (MESSAGE_RESPONSE [randomIndex]);
  }
  else if (message.content === "Tania" || message.content === "tania" || message.content === "TANIA" && !message.author.bot){
    let randomIndex = Math.floor (Math.random() * MESSAGE_RESPONSE2.length);
    message.channel.send (MESSAGE_RESPONSE2 [randomIndex]);
  }
  else if (message.content === "Angel" || message.content === "angel" || message.content === "ANGEL" && !message.author.bot){
    let randomIndex = Math.floor (Math.random() * MESSAGE_RESPONSE3.length);
    message.channel.send (MESSAGE_RESPONSE3 [randomIndex]);
  }
  else if (message.content === "Quien" || message.content === "quien" || message.content === "QUIEN" && !message.author.bot){
    message.reply ("Te peguntó");
  }
  else if (message.content ==="color" && !message.author.bot){
    let randomIndex = Math.floor (Math.random() * MESSAGE_COLOR.length);
    message.channel.send (MESSAGE_COLOR [randomIndex]);
  }
  
}

client.on ("messageCreate", gotMessage);
// Login to Discord with your client's token
client.login(TOKEN);
