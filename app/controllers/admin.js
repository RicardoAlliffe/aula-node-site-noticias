module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia",{validacao:{} ,noticia:{}});
}

module.exports.noticias_salvar = function(application, req, res){

    var noticia = req.body;

    /*   function isValidDate(value) {
           if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
           
           const date = new Date(value);
           if (!date.getTime()) return false;
           return date.toISOString().slice(0, 10) === value;
           } */
       
       req.assert('titulo','Titulo é obrigatorio').notEmpty();
       req.assert('resumo','Resumo é obrigatorio').notEmpty().len(10, 100);
      // req.assert('resumo','Resumo é obrigatorio').len(10, 100);
       req.assert('autor','Autor é obrigatorio').notEmpty();
       req.assert('data_noticia','Data é obrigatorio').notEmpty();       
      // req.assert('data_noticia').custom(isValidDate).withMessage('A data é inválida');
       req.assert('noticia','Noticia é obrigatorio').notEmpty();
   
       var erros = req.validationErrors();
       
       console.log(erros);
   
       if(erros){
           res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
           return;
           }
       
   
   
       var connection = application.config.dbConnection();
       var noticiasModel = new application.app.models.NoticiasDAO(connection);
   
       noticiasModel.salvarNoticia(noticia, function (error, result) {        
           res.redirect('/noticias')
           /* res.render("noticias/noticias", {noticias : result });  */
       })     
   }