const Discord = require('discord.js');


const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Woah the bot is online');
    client.user.setAvatar('https://cdn.discordapp.com/icons/818595833607094273/b50e1b288d1362347ce5dbf753e64af8.png')
    client.user.setActivity('Nothing because I am a bot')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);  
    }else if(command === 'enc'){
        client.commands.get('base64enc').execute(message, args);
    }else if(command === 'dec'){
        client.commands.get('base64dec').execute(message, args);
    }

});



client.login('!ENTER PRIVATE TOKEN HERE!');