/* Create  */

var id;
var posterPath;
let PosterFilmes = ["arcanePoster300.jpg", "atypicalPoster300.jpg", "auto_da_compadecidaPoster.jpg", "Brooklyn99Poster300.jpg", "ClickPoster300.png", "comoSeFosse300.png", "DrWhoPoster300.jpg", "How_I_Met_Mother.jpg", "MaldicaoHillPoster300.jpg", "oneDayAtTimePoster300.jpg", "StrangerThings.jpg", "TheofficePoster300.jpg", "UmFazDeContaPoster300.jpg"]
function setPoster(poster,type) {
  filmes.some((filme) => {
    if (filme == poster) {
      posterPath = PosterFilmes[filmes.indexOf(poster)]
      if(type == 'edit'){
        document.getElementById("filmePosterEdit").value = posterPath;
      return document.getElementById('posterModalEdit').src = `imagens/posters/${posterPath}`}
      else{
      document.getElementById("filmePoster").value = posterPath;
      return document.getElementById('posterModal').src = `imagens/posters/${posterPath}`
    }
    }
  })

}

function setNota(tipoEstrela){
  for (var x = 1; x <= 5; x++) {
    starCheck = document.getElementById(tipoEstrela + x)
    if (x > starNumber && starCheck.classList.contains("fa-star")) {
      starCheck.classList.add('fa-star-o')
      starCheck.classList.remove('fa-star')
    }
    else if (x <= starNumber) {
      starCheck.classList.remove('fa-star-o')
      starCheck.classList.add('fa-star')
    }

  }
}

document.querySelectorAll(".ratingStars").forEach(star => {
  star.addEventListener("click", function () {
    starNumber = parseInt(this.id.slice(-1))
    document.getElementById("inputNota").value = starNumber;
    if(this.id.length ==5){
      setNota('star')
      document.getElementById("inputNota").value = starNumber;
    }
    else {
      setNota('EditStar')
      document.getElementById("inputNotaEdit").value = starNumber;
    }
  })
})

var filmes = ['Arcane', 'Atypical', 'Auto Da Compadecida', 'Brooklyn nine-nine', 'Click', 'Como se fosse a primeira vez', 'Dr Who', 'How I Met Your Mother', 'Maldição da residencia Hill', 'One Day At Time', 'Stranger Things', 'The Office', 'Um Faz De Conta Que Acontece']

$(function () {
  $("#filmeTitle").autocomplete({
    source: filmes
  });
$("#filmeTitleEdit").autocomplete({
  source: filmes
});
});

/* Delete */
function setId(index) {
 
  document.getElementById('deleteButton').action = `/perfil/comentario/${index}?_method=delete`
}

/* Edit */
function setEditId(index){
  action="/contato/<%- id %>?_method=put"
  document.getElementById('editButton').action = `/perfil/comentario/${index}/editar`
  console.log( document.getElementById('filmeTitleEdit').value)
  document.getElementById('filmeTitleEdit').value   =`usuario.comentarios[${index}].filme`
  document.getElementById('inputNota').value = `usuario.comentarios[${index}].nota`
  document.getElementById('inputComentarioEdit').innerHTML = `usuario.comentarios[${index}].review`;
 }


