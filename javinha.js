jaTaVirada = "";
pontos = 0;
numeroDeCartas = 0;
trava = 0;
stringDeErro = "";
//////////////////////////
lista = []

function comparador() { 
	return Math.random() - 0.5; 
}

function clicou (elemento){

    //contador de jogadas++
    if( trava === 0 ){

    if( document.querySelector(".virada") !== null ){

        let carta1 = document.querySelector(".virada")
        let carta2 = elemento

        elemento.classList.toggle("virada");
        elemento.childNodes[1].classList.remove("lado-de-cima");
        elemento.childNodes[1].classList.add("lado-de-baixo");
        elemento.childNodes[3].classList.remove("lado-de-baixo");
        elemento.childNodes[3].classList.add("lado-de-cima");

            if( jaTaVirada == elemento.childNodes[3].getAttribute('src')){
                pontos += 2;
                document.querySelector(".virada").classList.remove("virada");
                document.querySelector(".virada").classList.remove("virada");
                trava = 0;
            } 
            else{

                trava = 1;
            
            setTimeout(function(){

                    carta1.classList.add("giragira");
                    carta2.classList.add("giragira")

                
                setTimeout(function(){

                    carta1.classList.remove("giragira");
                    carta2.classList.remove("giragira")

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
                        trava = 0
                    
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
}

function clickTeste(elemento){

    console.log(elemento)

    elemento.classList.toggle("giragira")
    
    setTimeout(function(){
        
        elemento.childNodes[1].classList.toggle("rodou");
        elemento.childNodes[3].classList.toggle("rodou");
        elemento.classList.toggle("giragira")
        
        }, 500);
  
}

function cartasNaMesa(){
    const quantidade = prompt("Manda")
    const elemento = document.querySelector(".caixa-cartas")

    for (let i = 0; i < quantidade; i++){

        if (i <= (quantidade - 1 ) / 2){
        lista.push(i + 1)
        lista.push(i + 1)
        }
    }

    lista = lista.sort(comparador)

    for (let z = 0; z < quantidade; z++){
    elemento.innerHTML = elemento.innerHTML + `
    <div class = "carta " data-identifier="card" onclick="clickTeste(this)">

    <div class="carta-frente rodou">
        <img src="imagens/${lista[z]}.gif" alt="" data-identifier="front-face">
    </div>

    <div class="carta-costa ">
        <img src="imagens/front.png" alt="" data-identifier="back-face">
    </div>

    </div>
    `;
    }
   

    
    console.log(lista)

}

cartasNaMesa()
