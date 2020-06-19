`use strict`

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("la conexión a la base de datos está funcionando correctamente...");

        app.listen(port,function(){
            console.log("Servidor del api de musica escuchando en http://localhost:"+port);
        })
    }
});

