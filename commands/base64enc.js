module.exports = {
    name: 'base64enc',
    description: "A Base64 encoder!",
    
    execute(message, args){
  
        let data = 'Hello';
        let buff = new Buffer.from(data);
        let base64data = buff.toString('base64');
        
        message.channel.send('"' + data + '" converted to Base64 is "' + base64data + '"');
    }
}