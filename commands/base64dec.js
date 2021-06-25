module.exports = {
    name: 'base64dec',
    description: "A Base64 decoder!",
    
    execute(message, args){
  
        let data = 'SGVsbG8gV29ybGQ=';
        let buff = new Buffer.from(data);
        let base64data = Buffer.from(data, 'base64').toString('ascii');
        
        message.channel.send('"' + data + '" converted to ASCII (standard text) is "' + base64data + '"');
    }
}