/*
module.exports = {
    name: 'purge',
    description: "A command to clear multiple messages at once!",
        async execute(message, args){
            if(!args[0]) return message.reply("Did you input a number after 'purge'?");
            if(isNaN(args[0])) return message.reply("Are you sure that's an actual number?");

            if(args[0] > 100) return message.reply("To prevent issues, I've limited the amount to 100");
            
            if(args[0] < 1) return message.reply("You can't delete less than one message at a time");
            
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
            
        }
}

(Commenting this just in case the command trigger somehow slips through)
*/