var id;
function setId(index){
    document.getElementById('deleteButton').action = `/perfil/comentario/${index}?_method=delete`
}

document.querySelectorAll(".ratingStars").forEach(star =>{
star.addEventListener("click",function(){
var starNumber = parseInt(this.id.slice(-1))
document.getElementById("inputNota").value=starNumber;
for(var x = 1; x <= 5;x++){
    starCheck = document.getElementById(`star${x}`)
    if(x > starNumber && starCheck.classList.contains("fa-star")){
        starCheck.classList.add('fa-star-o')
        starCheck.classList.remove('fa-star')
    }
    else if(x <= starNumber){
        starCheck.classList.remove('fa-star-o')
        starCheck.classList.add('fa-star')
    }
 
}
})
})

$(function() {
    var filmes = [
      "Click","Um Faz De Conta Que Acontece",'Harry Potter'
    ];
    $("#filmeTitle" ).autocomplete({
      source: filmes
    });
  });
