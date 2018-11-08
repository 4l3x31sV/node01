var http = require("http")
var manejador = function(req,res){
    //res.write("Hola Mundo")
    console.log("Hola Mundo");
    res.write("Ejemplo")
    res.end("Hola Mundo");
}
var servidor = http.createServer(manejador);
servidor.listen(9000);