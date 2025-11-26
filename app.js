amigos = []
mensaje = ""

function agregarAmigo(){
    const name = document.getElementById("amigo").value.trim();
    
    if (name === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    
    if (amigos.includes(name)) {
        alert("Este amigo ya está en la lista.");
        return;
    }
    
    amigos.push(name);
    console.log(`Amigo ${name} añadido!`);
    
    // Limpiar el input
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function reiniciarAmigos(){
    amigos = [];
    console.log("Lista de amigos reiniciada.");
}

function mostrarAmigos(){
    if (amigos.length === 0) {
        mensaje = "No hay amigos en la lista.";
        document.getElementById("listaAmigos").innerHTML = `<li>${mensaje}</li>`;
    } else {
        let listaHTML = "";
        amigos.forEach((amigo, index) => {
            listaHTML += `<li>${index + 1}. ${amigo}</li>`;
        });
        document.getElementById("listaAmigos").innerHTML = listaHTML;
    }
    console.log(mensaje);
}
function ocultarAmigos(){
    const lista = document.getElementById("listaAmigos");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
    console.log("Lista de amigos ocultada o mostrada.");
}


function sortearAmigo(){
    if (amigos.length === 0) {
        mensaje = "No hay amigos para seleccionar.";
        document.getElementById("resultado").innerHTML = `<li>${mensaje}</li>`;
        return;
    }
    const randomIndex = Math.floor(Math.random() * amigos.length);
    mensaje = `Amigo seleccionado: ${amigos[randomIndex]}`;
    document.getElementById("resultado").innerHTML = `<li>${mensaje}</li>`;
    // Reiniciar la lista de amigos y actualizar la vista
    amigos = [];
    mostrarAmigos();
}