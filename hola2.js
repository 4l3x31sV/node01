var http = require("http");

http.createServer(function(req,res){
    console.log("hola mundo");
    res.write("Hola mund2");
    res.end();
}).listen(9000);
/*http.createServer((req,res)=>{

})*/