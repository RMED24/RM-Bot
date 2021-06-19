module.exports = {
    name: 'ping',
    description: "This is a command for ping. The first command!",
    
    execute(message, args){
  
            message.channel.send(`Latency to server: ${Date.now() - message.createdTimestamp}ms.`);
    }
}