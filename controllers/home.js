module.exports = function(app){
    var homeController = {
        index: function(req,res){
            //acesso ao BD

            res.render("home/index")
        },
        
    }
    return homeController;
}