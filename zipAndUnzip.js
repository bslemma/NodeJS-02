const fs= require('fs');
const zlib=require('zlib');

const zip = (sourcePath,destinationPath)=> {
    const rFile=fs.createReadStream(sourcePath);
    const wFile=fs.createWriteStream(destinationPath);
    rFile.pipe(zlib.createGzip()).pipe(wFile).on('finish',function(){
        console.log("Output: Compressed");
    });
};

const unzip = (sourcePath,destinationPath)=> {
    const rFile=fs.createReadStream(sourcePath);
    const wFile=fs.createWriteStream(destinationPath);
    rFile.pipe(zlib.createGunzip()).on('error',function(err){console.log(err);})
    .pipe(wFile).on('finish', function(){console.log('Output: Extracted'); });
};

zip(__dirname+'/testFile1.txt',__dirname+'/testFile1.txt.gz');
unzip(__dirname+'/testFile2.txt.gz',__dirname+'/testFile2.txt');