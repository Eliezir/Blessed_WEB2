const { get } = require("../app");

module.exports = function(app){
    var home = app.controllers.home;
    app.get("/",home.index); 
    app.get("/login",home.login);


}