const {
    Readable,
    Writable
} = require("stream");


const readableStream = new Readable({
    highWaterMark : 5, // number of byte stream can have
    read() {}
});

const writableStream = new Writable({
    write(s){
        console.log('writting: ', s.toString())
    }
})

readableStream.on('data', (chunk) =>{
    console.log("data : ", chunk)
    writableStream.write(chunk);
})


console.log(readableStream.push(
    "name"
))