function comparador() { 
	return Math.random() - 0.5; 
}

function numeroDeCartas(numero){

    let lista = []

    for(let i = 0; i < (numero * 2); i++){
        lista.push(i + 1)
    }

    lista = lista.sort(comparador);
    return lista;
}


