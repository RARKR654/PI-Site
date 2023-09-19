var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Abre o modal quando o botão de abrir é clicado
openModalBtn.onclick = function() {
    modal.showModal();
}

// Fecha o modal quando o botão de fechar é clicado
closeModalBtn.onclick = function() {
    modal.close();
}

function Ir(elemento) {
  //var destine = "../elementos/" + elemento + ".html";
  //alert(elemento)
  //window.location.href = destine;
  modal.showModal();
}