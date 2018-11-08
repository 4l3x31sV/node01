var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    fs.readFile("./index.html",(err,html) =>{
        var html_string = html.toString();
        var nombre = "Pdro"
        var variables  = html_string.match(/[^\{\}]+(?=\})/g);
        //var value = eval(variables[0]); 
        html_string = html_string.replace("{" + variables[0] + "}", nombre);


        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(html_string)
        res.end();
    });
    
}).listen(9000);