module.exports = {
    name: 'base64dec',
    description: "A Base64 decoder!",
    
    execute(message, args){

        let data = message.content;
        data = data.substring(5);
        console.log(data); // here to make sure the output is working correctly. Will be removed once base64 testing is complete
        let buff = new Buffer.from(data);
        let asciidata = Buffer.from(data, 'base64').toString('ascii');
        
        message.author.send(asciidata);
        message.channel.send('Check your DMs for the result')
    }
}