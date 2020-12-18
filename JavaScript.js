function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Thank you ' + nome.value + ' your data has been successfully forwarded!');
    }

}