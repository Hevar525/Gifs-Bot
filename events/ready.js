const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = client => {
  client.user.setStatus("online");
  var oyun = [
    "Best Gifs Best commands"
    
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
