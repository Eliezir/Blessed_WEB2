module.exports = function(app){
    var filmeController = {
        adam: function(req,res){
            //acesso a pagina adam sandler
            res.render("filmes/adam")
        },
        lancamento: function(req,res){
            //acesso a pagina adam sandler
            res.render("filmes/lancamento")
        },
        cliches: function(req,res){
            //acesso a pagina adam sandler
            res.render("filmes/cliches")
        },
        nacional: function(req,res){
            //acesso a pagina adam sandler
            res.render("filmes/nacional")
        },
        
    }
    return filmeController;
}