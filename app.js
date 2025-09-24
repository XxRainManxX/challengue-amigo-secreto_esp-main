//inicializar variables y Array
let entrada = "";
let amigos = [];
//Función Agregar amigo, permite realizar la captacion del dato 
function agregarAmigo(){
    document.getElementById("sortear").innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
    entrada = document.getElementById('amigo').value;
    if(validarEntrada(entrada)){ 
        amigos.push(entrada);
        document.getElementById('amigo').value='';
        document.getElementById('resultado').innerHTML='';      
    }else {
        alert("Por favor, inserte un nombre.");
        console.log(amigos);
        return;       
    }
    actualizaAmigos(amigos);
}

//Funcion que valida la entrada de datos en la caja de input texto retornando 'false' si la entrada tiene valor vacío

function validarEntrada(entrada){
    return entrada!="";
}

function actualizaAmigos(amigos){    
    let listaHTML = document.getElementById("listaAmigos");
    let elementoLista = document.createElement("li");    
    for (let i = 0; i < amigos.length; i++) {
        elementoLista.textContent = amigos[i]; // Establece el texto del elemento
        listaHTML.appendChild(elementoLista); // Agrega el elemento a la lista en el HTML
    }
}

function sortearAmigo(){
    if(amigos.length>0){ //Validar que haya amigos disponibles
        let numeroLista =  Math.floor(Math.random()*amigos.length);//Generar un índice aleatorio
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = `El amigo secreto es ${amigos[numeroLista]}`; //Obtener el nombre sorteado y mostrar el resultado
        document.getElementById("sortear").innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sorteado';
        document.getElementById('listaAmigos').innerHTML = '';
        amigos =[];
    }else{
        alert('Ingresa por lo menos un amigo');
    }
}
