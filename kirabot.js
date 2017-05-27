const Client = require('discord.js').Client;
const music = require('discord.js-music');

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame(`kira help | I\'m serving ${client.guilds.size} servers!`)
  console.log(`Logged in as ${client.user.username}!`);

  var hd = require("humanize-duration");
var uptime = hd(client.uptime, {round: true});
});

// welcome message code start

// welcome message code stop

client.on('message', msg => {
  if (msg.content === 'kira ping') {
    msg.channel.send({embed: {
  color: 3447003,
  description: `:ping_pong: **Pong!**\nBot replied in: **${client.ping}ms**`
}});
  }

  if (msg.content === 'kira hello') {
    msg.channel.send({embed: {
  color: 3447003,
  description: `:wave: **Hello!**\nMy names Kira, I'm a Discord bot thats aim is to make your Discord server fun, inviting and useful!\n \nCreator:\n**Slimq#5885**\n \nGithub:\n**coming soon..**`
  }});
  }

  if (msg.content === 'kira stats') {
    msg.channel.send({embed: {
  color: 3447003,
  description: `:scroll: **Stats**\nHere are some stats about the bot:\n \nPing time:\n**${client.ping}**\n \nGuilds:\n**${client.guilds.size}**\n \nUsing Discord Nitro:\n**${client.user.premium}**`
  }});
  }

  if (msg.content === 'kira codebatman') {
    msg.channel.send({embed: {
  color: 3447003,
  description: `:bat: **NaNaNaNaNaNaNaNa Batman!**\nBatman is in code: https://cdn.discordapp.com/attachments/273420072041709569/310089504151306240/unknown.png`
  }});
  }

  if (msg.content === 'kira avatar') {
    msg.channel.send({embed: {
  color: 3447003,
  description: `:frame_photo: **Avatar**\nPlease wait while we Direct Message you your avatar..`
  }});

  msg.author.send(`Your avatar: ${msg.author.avatarURL}`)
}

if (msg.content === 'kira joinedguilds') {
  msg.channel.send({embed: {
color: 3447003,
description: `:scroll: **Current Joined Guilds:**\n \n${client.guilds.map(g=>g.name).join('\n')}\n \nTotal Guilds: **${client.guilds.size}**`
}});
}

if (msg.content === 'kira discord') {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Kira Discord Lounge**\nhttps://discord.gg/udFnv9S`
}});
}

// help commands

if (msg.content === 'kira help') {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Kira Help**\nSelect a page:\n \nPage One: **kira help 1**\nPage Two: **kira help 2**\nPage Three: **kira help 3**\nPage Three: **kira help 4**`
}});
}

if (msg.content === 'kira help 1') {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Help - Page 1**\nAvailable commands\n \nkira ping\nPings the bots connection\n \nkira hello\nProvides some handy info about the bot\n \nkira stats\nShows some cool stats about the bot\n \nkira avatar\nGrabs your avatar and DMs it to you\n \nkira discord\nGenerates an invite for the bots Discord server\n \nType **kira help 2** for help page 2.`
}});
}

if (msg.content === 'kira help 2') {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Help - Page 2**\nAvailable commands\n \nkira joinedguilds\nLists the guilds the bot has joined\n \nkira help <page>\nShows the specified page of help\n**Usable arguments:** 1, 2, 3.\n \nkira invite\nGenerates a link to invite the bot to your server\n \nkira me\nShows some handy / cool info about your acccount\n \nkira time\nShows the time (for the bot right now..)\n \nType **kira help 3** for help page 3.`
}});
}

if (msg.content === 'kira help 3') {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Help - Page 3**\nAvailable commands\n \nkira guildinfo\nShows some cool info about the guild the command is run in\n \nkira uptime\nShows the bots uptime\n \nkira codebatman\nShows a super funny image\n \nkira lenny <number>\nShows a lenny face. There are 4 at this time.\n**Useable arguments: 1, 2, 3, 4.**\n \nkira doggy\nShows a doggy face. Its cute.\n \n Type **kira help 4** for page 4.`
}});
}

if (msg.content === 'kira help 4') {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Help - Page 4**\nAvailable commands\n \nkira catty\nShows a cat face. Its cute.\n \nkira reboot\nReboots the bot\n \nkira botavatar\nRetrives the bots avatar`
}});
}
// help commands

if (msg.content === `kira invite`) {
  msg.channel.send({embed: {
color: 3447003,
description: `:envelope: **Invite**\nhttps://discordapp.com/oauth2/authorize?client_id=%20317566206397644801&scope=bot&permissions=8`
}});
}

if (msg.content === 'kira me') {
  msg.channel.send({embed: {
color: 3447003,
description: `:smiley: **About you**\nHere's come handy info about you ${msg.author}!\n \nUsername:\n**${msg.author}**\n \nJoined Guilds:\n**${msg.author.guilds}**\n \nAccount created:\n**${msg.author.createdAt}**\n \nFriends:\n**${msg.author.friends}**\n \nHas Discord Nitro:\n**${msg.author.Nitro}**\n \nPlaying:\n**${msg.author.status}**`
}});
}

if (msg.content === 'kira time') {
  msg.channel.send({embed: {
color: 3447003,
description: `:clock1: **Tick Tock!**\nThe current time for ${msg.author} is:\n${msg.author.time}`
}});
}

if (msg.content === 'kira guildinfo') {
  msg.channel.send({embed: {
color: 3447003,
description: `:scroll: **Guild Info**\nGuild Infomation:\n \nCreated:\n**${msg.guild.createdAt}**\n \nMember Count:\n**${msg.guild.members}**\n \nGuild Owner:\n**${msg.guild.owner}**\n \nAmount of Channels:\n**${msg.guild.channels}**`
}});
}


if (msg.content === 'kira uptime') {
  msg.channel.send({embed: {
color: 3447003,
description: `:clock1: **Uptime**\nBot has been online for: **${humanize-duration.uptime}**ms!`
}});
}

// lenny

if (msg.content === 'kira lenny 1') {
  msg.channel.send({embed: {
color: 3447003,
description: `( ͡° ͜ʖ ͡° )`
}});
}

if (msg.content === 'kira lenny 2') {
  msg.channel.send({embed: {
color: 3447003,
description: `ᕙ( $ ᨓ $ )ᕗ`
}});
}

if (msg.content === 'kira lenny 3') {
  msg.channel.send({embed: {
color: 3447003,
description: `ಠ_ಠ`
}});
}

if (msg.content === 'kira lenny 4') {
  msg.channel.send({embed: {
color: 3447003,
description: ` ᕕ( ᐛ )ᕗ`
}});
}

// lenny

if (msg.content === 'kira doggy') {
  msg.channel.send({embed: {
color: 3447003,
description: `**Woof Woof!** :dog:`
}});
}

if (msg.content === 'kira catty') {
  msg.channel.send({embed: {
color: 3447003,
description: `**Meeeeeowww!** :cat:`
}});
}

if (msg.content === 'kira botavatar') {
  msg.channel.send({embed: {
color: 3447003,
description: `My avatar: ${client.avatarURL} :D`
}});
}

if (msg.content.startsWith('kira reboot')) {
  console.log(timestamp + ": " + message.author.tag + " executed reboot command" )
    msg.channel.send("Restarting! Seeya soon!")
msg.channel.send()
    process.exit
    console.error()
     }

if (msg.content === "xd") {
  msg.react(`🤣`)
}

  if (msg.content === "xD") {
    msg.react(`🤣`)
}

    if (msg.content === "XD") {
      msg.react(`🤣`)
}

if (msg.content === "Xd") {
  msg.react(`🤣`)
}

if (msg.content === "lol") {
  msg.react(`🤣`)
}

if (msg.content === "LOL") {
  msg.react(`🤣`)
}

if (msg.content === "lul") {
  msg.react(`🤣`)
}

if (msg.content === "LUL") {
  msg.react(`🤣`)
}

if (msg.content === "lel") {
  msg.react(`🤣`)
}

if (msg.content === "LEL") {
  msg.react(`🤣`)
}


if (msg.content === 'kira status') {
  msg.channel.send({embed: {
color: 3447003,
description: `**I am currently:** __**${client.pm2.status}**__`
}});
}

if (msg.content === 'kira status2') {
  msg.channel.send({embed: {
color: 3447003,
description: `**I am currently:** lol ing`
}});
}

});

client.login('---');
