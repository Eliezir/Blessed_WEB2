module.exports = function(app){
    let PerfilController = {
        index: function(req, res){
            let usuario = req.session.usuario;
            let params = {usuario: usuario}
            res.render("perfil/index", params)
        },
    }
    return PerfilController;
}