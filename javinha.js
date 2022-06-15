jaTaVirada = ""
pontos = 0
numeroDeCartas = 0

function comparador() { 
	return Math.random() - 0.5; 
}

function listaAleatoria(numero){

    let lista = []

    for(let i = 0; i < (numero); i++){
        lista.push(i + 1)
    }

    lista = lista.sort(comparador);
    return lista;
}

function converterLista(lista){
    let listaConvertida = []
    for(let i = 0; i < lista.length;i++){

        switch (lista[i]) {
            case 1:
                lista[i] = 1;
                break;

            case 2:
                lista[i] = 3;
                break;

            case 3:
                lista[i] = 5;
                break;

            case 4:
                lista[i] = 7;
                break;

            case 5:
                lista[i] = 9;
                break;
            
            case 6:
                lista[i] = 11;
                break;

            case 7:
                lista[i] = 13;
                break;

            case 8:
                lista[i] = 15;
                break;

            case 9:
                lista[i] = 17;
                break;

            case 10:
                lista[i] = 19;
                break;

            case 11:
                lista[i] = 21;
                break;
            
            case 12:
                lista[i] = 23;
                break;
            default:
                break;
        }
    }
    return lista;

}

function quantidadeDeCartas(){

    const numero = prompt("Com quantas cartas você deseja jogar (LEMBRE DE COLOCAR UM NUMERO PAR) ?");
    let lista = listaAleatoria(numero);
    10
    cartasNaMesa(lista)
}
function cartasNaMesa(lista){

    numeroDeCartas = lista.length;
    let localizarA = document.querySelector(".caixa-cartas-A")

    let listaConvertida = converterLista(lista)

    for(let i = 0; i < lista.length; i++){
        //[ 2 , 3 , 1 , 4]
        //[ 1 , 3 , 1 , 3]
        switch (i + 1) {

            /////document.querySelector("#image").setAttribute('src', 'outra_imagem.png')

            case 1:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora") 
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/um.gif')
                break;             
            case 2:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")  
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/um.gif') 
                break;  
            case 3:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")  
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/dois.gif')
                break;   
            case 4:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/dois.gif')  
                break;   
            case 5:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")  
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/tres.gif') 
                break;  
            case 6: 
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora") 
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/tres.gif')   
                break; 
            /////////////////////************************************************************************** */
            case 7:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora") 
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/quatro.gif')
                break;             
            case 8:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")  
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/quatro.gif') 
                break;  
            case 9:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")  
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/cinco.gif')
                break;   
            case 10:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/cinco.gif')  
                break;   
            case 11:
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora")  
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/seis.gif') 
                break;  
            case 12: 
                localizarA.childNodes[listaConvertida[i]].classList.toggle("fora") 
                localizarA.childNodes[listaConvertida[i]].childNodes[3].setAttribute('src', 'imagens/seis.gif')   
                break; 

                       
            default:
                
        }
    }
}

function fimDeJogo(){}
function clicou (elemento){

    //contador de jogadas++
    
    //verificar se tem alguma virada
    

    if( document.querySelector(".virada") !== null ){

        elemento.classList.toggle("virada");
        elemento.childNodes[1].classList.remove("lado-de-cima");
        elemento.childNodes[1].classList.add("lado-de-baixo");
        elemento.childNodes[3].classList.remove("lado-de-baixo");
        elemento.childNodes[3].classList.add("lado-de-cima");

            if( jaTaVirada == elemento.childNodes[3].getAttribute('src')){
                pontos += 2;
                document.querySelector(".virada").classList.remove("virada");
                document.querySelector(".virada").classList.remove("virada");
            } 
            else{
            
            setTimeout(function(){
                    document.querySelector(".virada").classList.add("giragira");
                    elemento.classList.add("giragira")

                
                setTimeout(function(){

                    document.querySelector(".virada").classList.remove("giragira");
                    elemento.classList.remove("giragira")

                }, 500);

                setTimeout(function(){
                    
                        document.querySelector(".virada").childNodes[1].classList.add("lado-de-cima");
                        document.querySelector(".virada").childNodes[1].classList.remove("lado-de-baixo");
                        document.querySelector(".virada").childNodes[3].classList.add("lado-de-baixo");   
                        document.querySelector(".virada").childNodes[3].classList.remove("lado-de-cima"); 
                        document.querySelector(".virada").classList.remove("virada");

                        document.querySelector(".virada").childNodes[1].classList.add("lado-de-cima");
                        document.querySelector(".virada").childNodes[1].classList.remove("lado-de-baixo");
                        document.querySelector(".virada").childNodes[3].classList.add("lado-de-baixo");   
                        document.querySelector(".virada").childNodes[3].classList.remove("lado-de-cima");                        
                        document.querySelector(".virada").classList.remove("virada");
                    
                },500);
            },600);
            }

    } else {

        elemento.classList.toggle("virada");
        elemento.childNodes[1].classList.add("lado-de-baixo");
        elemento.childNodes[1].classList.remove("lado-de-cima");
        elemento.childNodes[3].classList.add("lado-de-cima");
        elemento.childNodes[3].classList.remove("lado-de-baixo");
        jaTaVirada = document.querySelector(".virada").childNodes[3].getAttribute('src')
    }
        //tem
            //virar a clicada
                //comparar
                    //é igual
                        //mudar classe para correto
                            //colocar no contador de corretos +2
                            //verificar se estão todas corretas
                    
                    //é igual não
                        //virar carta para baixo
        
        //tem nao
            //virar carta

            

    //elemento.classList.toggle(virada)
    

}
10
quantidadeDeCartas()


