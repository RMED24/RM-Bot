module.exports = {
    name: 'kick',
    description: "A command to kick a server member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const targetUser = message.guild.members.cache.get(member.id);
            targetUser.kick();
            message.channel.send("You've successfully kicked <@" + member + ">");
        }

        else{
            message.channel.send("Member couldn't be found");
            message.channel.send("Make sure you don't input a user ID. Instead, do it as '<@UserID>");
        }
    }
}