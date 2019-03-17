// using module file sistem

var fs=require('fs'); //globaly instaled


// 1 write "Hello file" insert file hello.txt
fs.writeFileSync("./hello.txt","Hello file");

setTimeout(function(){fs.unlinkSync("./hello.txt");},5000);
// console.log(fs);
fs.watch("./file/data",function(event,filename){console.log("change")});
