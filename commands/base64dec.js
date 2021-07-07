module.exports = {
    name: 'base64dec',
    description: "A Base64 decoder!",
    
    execute(message, args){

        let data = message.content;
        if(data = "-dec") return message.reply("You need to input a string after using ``-dec``");

        data = data.substring(5);
        let buff = new Buffer.from(data);
        let asciidata = Buffer.from(data, 'base64').toString('ascii');
        message.channel.send("https://codebeautify.org/base64-decode?input=" + data);

        console.log(asciidata + " converted to "+ data); // here to make sure the output is working correctly. Will be removed once base64 testing is complete

    }
}