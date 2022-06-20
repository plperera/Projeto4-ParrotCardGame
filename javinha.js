jaTaVirada = "";
pontos = 0;
numeroDeCartas = 0;
trava = "sem trava";
stringDeErro = "";
click1 = "nada";
click2 = "nada mesmo";
quantidade = 0;
jogadas = 0;
lista = []




function comparador() { 
	return Math.random() - 0.5; 
}

function clickTeste(elemento){


    if (elemento.getAttribute('src') === null){

        let viradaParaCima = elemento.getAttribute('class');

        if(viradaParaCima !== "carta foiClicado" && viradaParaCima !== "carta acertou" ){
            if(trava === "sem trava"){

                trava = "travou"

                if (document.querySelector(".foiClicado") !== null){
                    
                    click2 = elemento.childNodes[1].childNodes[1].getAttribute('src')

                    jogadas++

                    elemento.classList.toggle("giragira")
                    elemento.classList.toggle("foiClicado")

                    setTimeout(function(){
                        
                        elemento.childNodes[1].classList.toggle("rodou");
                        elemento.childNodes[3].classList.toggle("rodou");
                        elemento.classList.toggle("giragira")
                        
                        }, 500);

                    if (click1 === click2){

                        document.querySelector(".foiClicado").classList.add("acertou")
                        document.querySelector(".foiClicado").classList.remove("foiClicado")
                        
                        document.querySelector(".foiClicado").classList.add("acertou")
                        document.querySelector(".foiClicado").classList.remove("foiClicado")
                        
                        pontos += 2

                        trava = "sem trava"
                        
                        terminou()
                        

                    }
                    else {

                        
                        setTimeout(function(){

                            click1 = "nada"
                            click2 = "nada mesmo"

                            const foiClicado1 = document.querySelector(".foiClicado");
                            document.querySelector(".foiClicado").classList.remove("foiClicado");
                            const foiClicado2 = document.querySelector(".foiClicado");
                            document.querySelector(".foiClicado").classList.remove("foiClicado");
                            
                                foiClicado1.classList.toggle("giragira")
                                foiClicado2.classList.toggle("giragira")


                                setTimeout(function(){
                                
                                    foiClicado1.childNodes[1].classList.toggle("rodou");
                                    foiClicado1.childNodes[3].classList.toggle("rodou");
                                    foiClicado1.classList.toggle("giragira")

                                    foiClicado2.childNodes[1].classList.toggle("rodou");
                                    foiClicado2.childNodes[3].classList.toggle("rodou");
                                    foiClicado2.classList.toggle("giragira")

                                    trava = "sem trava"
                                
                                }, 500);

                        }, 1000);                               
                    }
                                 
                } else {

                    click1 = elemento.childNodes[1].childNodes[1].getAttribute('src')

                    jogadas++

                    elemento.classList.toggle("giragira")
                    elemento.classList.toggle("foiClicado")

                    setTimeout(function(){
                        
                        elemento.childNodes[1].classList.toggle("rodou");
                        elemento.childNodes[3].classList.toggle("rodou");
                        elemento.classList.toggle("giragira")

                        trava = "sem trava"
                        
                        }, 500);
                    
                }   
                
            }
        }
    }

}

function cartasNaMesa(){
    quantidade = prompt("Com quantas cartas você quer jogar ? \nLembre-se de colocar um numero par")
    if (quantidade % 2 !== 0){ cartasNaMesa() }
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
function terminou(){

    setTimeout(function(){
    if (Number(pontos) === Number(quantidade)){

        alert(`Você ganhou em ${jogadas} jogadas!`)

        /*
        if (prompt('Bora mais uma ?', 'Bora') === "Bora") {

            document.querySelector(".caixa-cartas").innerHTML = ""
            
            jaTaVirada = "";
            pontos = 0;
            numeroDeCartas = 0;
            trava = "sem trava";
            stringDeErro = "";
            click1 = "nada";
            click2 = "nada mesmo";
            quantidade = 0;
            jogadas = 0;
            lista = []

            cartasNaMesa()
        }
        */

    }
    }, 1100);
    
}

cartasNaMesa()
