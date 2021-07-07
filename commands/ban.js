module.exports = {
    name: 'ban',
    description: "A command to ban a server member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const targetUser = message.guild.members.cache.get(member.id);
            targetUser.ban();
            message.channel.send("You've successfully banned <@" + member + ">");
        }

        else{
            message.channel.send("Member couldn't be found");
        }

    }
}