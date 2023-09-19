emailsparaenvio = [];

function enviard(){
    const titulo = document.getElementById("titular");
    const problem = document.getElementById("Probl");
    const txt = document.getElementById("txt");

    const obra = {
        "Titulo": titulo.value, 
        "Problema": problem.value,
        "Texto": txt.value,  
    };

    alert(obra.Titulo + " - " + obra.Problema + " - " + obra.Texto)
    emailsparaenvio.push(obra);

}