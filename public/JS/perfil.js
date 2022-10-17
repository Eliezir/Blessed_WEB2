/* Create  */

var id;
var posterPath;
let PosterFilmes = ["arcanePoster300.jpg", "atypicalPoster300.jpg", "auto_da_compadecidaPoster.jpg", "Brooklyn99Poster300.jpg", "ClickPoster300.jpg", "comoSeFosse300.png", "DrWhoPoster300.jpg", "How_I_Met_Mother.jpg", "MaldicaoHillPoster300.jpg", "oneDayAtTimePoster300.jpg", "StrangerThings.jpg", "TheofficePoster300.jpg", "UmFazDeContaPoster300.jpg"]
function setPoster(poster) {
  filmes.some((filme) => {
    if (filme == poster) {
      posterPath = PosterFilmes[filmes.indexOf(poster)]
      return document.getElementById('posterModal').src = `imagens/posters/${posterPath}`
    }
  })

}

document.querySelectorAll(".ratingStars").forEach(star => {
  star.addEventListener("click", function () {
    var starNumber = parseInt(this.id.slice(-1))
    document.getElementById("inputNota").value = starNumber;
    document.getElementById("filmePoster").value = posterPath;
    for (var x = 1; x <= 5; x++) {
      starCheck = document.getElementById(`star${x}`)
      if (x > starNumber && starCheck.classList.contains("fa-star")) {
        starCheck.classList.add('fa-star-o')
        starCheck.classList.remove('fa-star')
      }
      else if (x <= starNumber) {
        starCheck.classList.remove('fa-star-o')
        starCheck.classList.add('fa-star')
      }

    }
  })
})

var filmes = ['Arcane', 'Atypical', 'Auto Da Compadecida', 'Brooklyn nine-nine', 'Click', 'Como se fosse a primeira vez', 'Dr Who', 'How I Met Your Mother', 'Maldição da residencia Hill', 'One Day At Time', 'Stranger Things', 'The Office', 'Um Faz De Conta Que Acontece']

$(function () {
  $("#filmeTitle").autocomplete({
    source: filmes
  });
});

/* Delete */
function setId(index) {
 
  document.getElementById('deleteButton').action = `/perfil/comentario/${index}?_method=delete`
}

/* Edit */
function setEditId(index,user){
  console.log(user)
  document.getElementById('filmeTitleEdit').value  =`usuario.comentarios[${index}].filme`
  console.log(document.getElementById('filmeTitleEdit').value)
  document.getElementById('inputNota').value = `usuario.comentarios[${index}].nota`
  document.getElementById('inputComentarioEdit').innerHTML = `usuario.comentarios[${index}].review`;
 }
