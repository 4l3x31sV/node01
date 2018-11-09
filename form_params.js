var http = require("http");
var fs = require("fs");
var parser = require("./params_parser.js");
var p = parser.parse;
http.createServer(function(req,res){

    console.log(req.url);
    fs.readFile("./index.html",(err,html) =>{
        var html_string = html.toString();
        var variables  = html_string.match(/[^\{\}]+(?=\})/g); //{fasdf}
        var nombre = ""
        var curso = "";
        var fecha = new Date();
        //variables = ['nombre', 'curso', 'fecha']
          //req.url => /?nombre=alex&curso=node
          //dividir la cadena ? => ["/" , "nombre=alex&curso=node"]
          //dividir cantidad de variables & => ["nombre=alex", "curso=node"]
          //dividimos losvalues =  => ["nombre", "alex"],["curso", "node"]
          var parametros = p(req);
        for(var i=0 ; i<variables.length; i++){
            //var value = eval(variables[i]); // nombre
            var variable = variables[i];
            
            html_string = html_string.replace("{" + variables[i] + "}", parametros[variable]);
        }
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(html_string);
        res.write(" Prueba ")
        res.end();
    });
    
}).listen(9000);