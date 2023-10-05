const http = require("http");
const PORT = process.env.PORT || 5000;
const fs = require("fs");
const {
pipeline
} = require("stream");
const processedString = require("./replaceBadWordProcessor");
const finalString = require("./replaceBadWordProcessor");


const server = http.createServer((req, res) =>{
    // Downloading big file bad way

    // const file = fs.readFileSync('temp.txt');
    // res.writeHead(200, { 'Content-Type': 'video/mp4' });
    // return res.end(file);

    // Downloading big file using good way (Streams)

    // const readableStream = fs.createReadStream('temp.txt');
    // readableStrem -> writableStream
    // res.writeHead(200, { 'Content-Type': 'video/mp4' });
    // readableStream.pipe(res);


    //  Copy big file using bad way
    // const file = fs.readFileSync('temp.txt');
    // fs.writeFileSync('output.txt', file);


    // Copy big file good way
    // const readStream = fs.createReadStream('temp.txt');
    // const writeStream = fs.createWriteStream('output.txt');

    // readStream.on('data', (chunk) => {
    //     console.log('vbv: ', chunk.toString());
    //     writeStream.write(chunk);
    // });

    // res.end();

    const readableStream = fs.createReadStream('temp.txt');
    const writableStream = fs.createWriteStream('output.txt');

    // const finalString = new Transform({
    //     transform(chunk, encoding, callback){
    //         console.log(chunk);
    //         const badWordRemovedString = chunk.toString().replaceAll(/chunk/gi, "buffer").toUpperCase();
    //         callback(null, badWordRemovedString);

    //     }
    // })

    // readableStream.on('data',  (chunk) =>{
    //     console.log(chunk);
    //     const badWordRemovedString = chunk.toString().replaceAll(/chunk/gi, "buffer").toUpperCase();
    //     writableStream.write(badWordRemovedString);
    // })
    // readableStream.pipe(writableStream);

    // readableStream
    // .pipe(processedString)
    // .on("error", (err)=>{
    //     console.log(err);
    // })
    // .pipe(finalString)
    // .on("error", (err)=>{
    //     console.log(err);
    // })
    // .pipe(writableStream)
    // .on("error", (err)=>{
    //     console.log(err);
    // });


    pipeline(
        readableStream,
        processedString,
        finalString,
        writableStream,
        (err) =>{
            if(err){
                console.log("error handling here..", err);
            }
            
        }
    );



    
});




server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})