module.exports = function(app){
    var homeController = {
        index: function(req,res){
            res.render("home/index")
        },
        login: function(req,res){
            let user = req.body.usuario.user;
            let password = req.body.usuario.password;
          
            if(user && password){
                let usuario = req.body.usuario;
                usuario["comentarios"] = [{filme:'Click',nota:5},{filme:'Adão Negro',nota:3.5}];
                req.session.usuario = usuario;
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