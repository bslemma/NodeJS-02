var http=require('http');
var fs=require('fs');
const server=http.createServer(function(req,res)
{
//1. Using Asynchronous and streaming
    const inputImg=fs.createReadStream('./testBigImage.jpg');
    inputImg.pipe(res);
    
//2. Using Synchronous reading
    // const inputImg=fs.readFileSync('./testBigImage.jpg');
    // res.end(inputImg);
    
//3. Using Asynchronous reading 
   /* fs.readFile('./testBigImage.jpg',function(error,data)
    {
        if(error)
        res.end("Error Message");
        else
        res.end(data);
    });*/
});
server.listen(4000);