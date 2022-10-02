module.exports = function(app){
    let perfil = app.controllers.perfil;
    app.get('/perfil', perfil.index )
};