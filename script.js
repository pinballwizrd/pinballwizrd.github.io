const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MTA3ODA0MjQ0NTM2NDg2MzAwNw.G7zmyd.pX7JDqS07KNO6Lu31YqAreTaTKtsv16i36d5Pw';

client.login(token);

// Replace CHANNEL_ID with the ID of the channel you want to add the bot to
const channelId = 'fuel';

// Get the channel object
const channel = client.channels.cache.get(channelId);

// Send a message to the channel
channel.send('Hello, I have been added to this channel!');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
