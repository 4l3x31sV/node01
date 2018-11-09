function parse(req){
    var arreglo_parametros = [];
    var parametros = {};
    /*
    parametros = {nombre:"alex", curso:"node"}
    */
   if(req.url.indexOf("?")>0){
       // ["/" , "nombre=alex&curso=node"]
       var url_data = req.url.split("?");
       //["nombre=alex", "curso=node"]
       arreglo_parametros = url_data[1].split("&");
   }
   for(var i = 0; i< arreglo_parametros.length; i++){
       var parametro = arreglo_parametros[i];
       //["nombre", "alex"]
       var param_data = parametro.split("=");
       parametros[param_data[0]] = param_data[1];
   }
   console.log(parametros);
   return parametros;
}
module.exports.parse = parse;