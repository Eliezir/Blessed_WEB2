module.exports = function(app){
    let PerfilController = {
        index: function(req, res){
            let usuario = req.session.usuario;
            let comentarios = usuario.comentarios
            let params = {usuario: usuario, comentarios: comentarios}
            res.render("perfil/index", params)
        },
        create: function(req, res){
            var comentario = req.body.comentario,
            usuario = req.session.usuario;
            usuario.comentarios.push(comentario);
            res.redirect("/perfil")
        },
        comentarios: function(req, res) {
            var id = req.params.id
            comentario = req.session.usuario.comentario[id],
            parametro = {contato: contato, id:id};
            res.render("comentarios/show", params);
        },
        edit: function (req, res) {
            var id = req.params.id,
            usuario = req.session.usuario,
            comentario = usuario.comentario[id],
            params = { usuario: usuario, comentario: comentario, id: id };
            res.render("perfil/edit", params);
            },
            update: function (req, res) {
                var comentario = req.body.comentario,
                usuario = req.session.usuario;
                usuario.comentarios[req.params.id] = comentario;
                res.redirect("/comentarios");
                },
            destroy: function (req, res) {
                var usuario = req.session.usuario,
                id = req.params.id;
                usuario.comentarios.splice(id, 1);
                res.redirect("/comentarios");
                },
    }
    return PerfilController;
}