var app = require('./config/server');

const port = 3000;

//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaFormulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);


app.listen(port, function(){
    console.log(`Servidor Online rodando na porta ${port}, link: http://localhost:${port}/`);
});