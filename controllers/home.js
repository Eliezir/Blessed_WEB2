module.exports = function(app){
    var homeController = {
        index: function(req,res){
            //acesso ao BD

            res.render("home/index")
        },
        login: function(req,res){
            res.render("home/login")
        }
        
    }
    return homeController;
}