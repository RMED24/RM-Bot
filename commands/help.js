module.exports = {
    name: 'help',
    description: "For people who don't know where to start with this bot",
    
    execute(message, args){
        message.channel.send("So far you can run base64enc, base64dec and ping. A more finished help command is soon to come")
    }
}