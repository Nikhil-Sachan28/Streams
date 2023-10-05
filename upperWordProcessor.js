const {Transform} = require("stream");

const finalString = new Transform({
    transform(chunk, encoding, callback){
        console.log(chunk);
        const badWordRemovedString = chunk.toString().replaceAll(/chunk/gi, "buffer");
        callback(null, badWordRemovedString);
    }
})

module.exports = finalString;