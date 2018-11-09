var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    fs.readFile("./index.html",(err,html) => {
        var html_string = html.toString();
        var nombre = "Juan"
        
        var variables  = html_string.match(/[^\{\}]+(?=\})/g); //{fasdf}
        for(var i=0 ; i<variables.length; i++){
            var value = eval(variables[i]); 
            html_string = html_string.replace("{" + variables[i] + "}", value);
        }

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(html_string)
        res.end();
    });
    
}).listen(9000);