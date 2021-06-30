module.exports = {
    name: 'base64enc',
    description: "A Base64 encoder!",
    
    execute(message, args){
  
        let data = message.content;
        data = data.substring(5);
        console.log(data); // here to make sure the output is working correctly. Will be removed once base64 testing is complete
        let buff = new Buffer.from(data);
        let base64data = buff.toString('base64');
        message.delete();
        message.channel.send(base64data);
    }
}