//var dbConncetion = require('../../config/dbConnection');

module.exports = function (application) {
    
    application.get('/noticias', function(req, res) {
        application.app.controllers.noticias.noticias(application, req, res);
        
    });   
    
    application.get('/noticia', function(req, res) {
        application.app.controllers.noticias.noticia(application, req, res);
        
    });   
}

//'select * from noticias



/* PESQUISA USANDO LIKE PARA ACHAR ELEMENTOS QUE USEM A PESQUISA

var pesquisa = 'Tirania dos Dragões'

        connection.query(`select * from noticias where titulo like '%${pesquisa}%'`, function (error, result) {
            //res.send(result)
            res.render("noticias/noticias", {
                noticias: result
            });*/