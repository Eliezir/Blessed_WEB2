module.exports = function(app){
    let perfil = app.controllers.perfil;
    app.get('/perfil', perfil.index )
    app.post("/perfil/:id/comentario", perfil.comentarios)
    app.get("/perfil/:id/editar", perfil.edit)
    app.delete("/perfil/:id/comentario", perfil.destroy);
};