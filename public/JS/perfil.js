var id;
function setId(index){
    document.getElementById('deleteButton').action = `/perfil/comentario/${index}?_method=delete`
}
