module.exports = function(app){
    var homeController = {
        index: function(req,res){
            res.render("home/index")
        },
        login: function(req,res){
            console.log(req.body)
            let user = req.body.usuario.user;
            let password = req.body.usuario.password;
          
            if(user && password){
                let usuario = req.body.usuario;
                usuario["comentarios"] = [];
                console.log(usuario);
                res.redirect("/perfil")

            }
            else{
                res.redirect("/login")
            }
        },
        loginPage: function(req,res){
            res.render('home/login')
        },
        logout: function(req,res){
            req.session.destroy();
            res.redirect("/")
        }
    }
    return homeController;
}