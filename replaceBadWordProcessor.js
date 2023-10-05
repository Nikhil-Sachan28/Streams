const {Transform} = require("stream");

const processedString = new Transform({
    transform(chunk, encoding, callback){
        // processedString.emit("error", new Error("some thing wen wrong"));
        console.log(chunk);
        const badWordRemovedString = chunk.toString().replaceAll(/chunk/gi, "buffer");
        callback(null, badWordRemovedString);
    }
})

module.exports = processedString;