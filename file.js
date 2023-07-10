// //read a file
 const fs = require('fs');
 fs.readFile('./doc/sample.txt',(err,data)=>{
     if(err){
         console.log(err);
     }
     console.log(data.toString());
 });

 //write a file
  fs.writeFile('./doc/sample.txt','vanakam',()=>{
     console.log('file was written');
  });

 //create a folder
 if(fs.existsSync('./newfol')){
    console.log("already existed")
 }
 else{
    fs.mkdir('./newfol',(err)=>{
        console.log('folder created successfull');
 });
 }

 //delete a folder
 fs.rmdir('./newfol',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file deleted");
 });
 
 //delete the file

 fs.unlink('./doc/deleteme.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file deleted");
 });