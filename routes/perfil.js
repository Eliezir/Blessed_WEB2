module.exports = function(app){
    let perfil = app.controllers.perfil;
    let autenticar = require("../middlewares/autenticador");
    app.get('/perfil',autenticar, perfil.index )
    app.post("/perfil/:id/comentario",autenticar, perfil.comentarios)
    app.get("/perfil/:id/editar",autenticar, perfil.edit)
    app.delete("/perfil/:id/comentario",autenticar, perfil.destroy);
};