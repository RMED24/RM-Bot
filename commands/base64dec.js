module.exports = {
    name: 'base64dec',
    description: "A Base64 decoder!",
    
    execute(message, args){
  
        let data = message.content.toString;
        let buff = new Buffer(data);
        let base64data = Buffer.from(data, 'base64').toString('ascii');
        
        message.channel.send('"' + data + '" converted to ASCII (standard text) is "' + base64data + '"');
    }
}