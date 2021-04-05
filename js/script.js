//Variaveis
var score = document.getElementById('placar');
var pont = document.createElement('h1');

var soma = 0;
var Jogador = "Jogador 1";
var V1 = 0;
var V2 = 0;
var D1 = 0;
var D2 = 0;
var V3=0;
var D3=0;


//Função para dar lance de +1
function lance1(){ 
    soma = soma + 1;
    
      pont.innerHTML = parseInt(soma);

    //Condição de vitoria ou derrota
    if( soma < 21 && Jogador === "Jogador 1"){
        Jogador = "Jogador 2";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma < 21 && Jogador === "Jogador 2"){
        Jogador = "Jogador 1";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma == 21){
        pont.innerHTML = `${parseInt(soma)} <br> ${Jogador} Venceu a rodada!`;
    }

    
    else if( soma>21){
        pont.innerHTML = "Game Over! :("
    }
    //Contar Score para o Ranking
    if( soma == 21 && Jogador === "Jogador 1"){
        V1 = V1 +1;
        D2 = D2 +1;
    }
    else if( soma == 21 && Jogador === "Jogador 2"){
        V2 = V2 +1;
        D1 = D1 +1;
    }
    

}
//Função para dar lance de +2
function lance2(){    
    soma = soma+ 2;

    pont.innerHTML = parseInt(soma);

    //Condição de vitoria ou derrota
    if( soma < 21 && Jogador === "Jogador 1"){
        Jogador = "Jogador 2";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma < 21 && Jogador === "Jogador 2"){
        Jogador = "Jogador 1";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma == 21){
        pont.innerHTML = `${parseInt(soma)} <br> ${Jogador} Venceu a rodada!`;
    }

    else if( soma>21){
        pont.innerHTML = "Game Over! :("
    }
    //Contar Score para o Ranking
    if( soma == 21 && Jogador === "Jogador 1"){
        V1 = V1 +1;
        D2 = D2 +1;
    }
    else if( soma == 21 && Jogador === "Jogador 2"){
        V2 = V2 +1;
        D1 = D1 +1;
    }

}
//Função para dar lance de +3
function lance3(){
    soma = soma + 3;

    pont.innerHTML = parseInt(soma);

    //Condição de vitoria ou derrota
    if( soma < 21 && Jogador === "Jogador 1"){
        Jogador = "Jogador 2";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma < 21 && Jogador === "Jogador 2"){
        Jogador = "Jogador 1";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma == 21){
        pont.innerHTML = `${parseInt(soma)} <br> ${Jogador} Venceu a rodada!`;
    }

    else if( soma>21){
        pont.innerHTML = "Game Over! :("
    }

    //Contar o Score para o Ranking
    if( soma == 21 && Jogador === "Jogador 1"){
        V1 = V1 +1;
        D2 = D2 +1;
    }
    else if( soma == 21 && Jogador === "Jogador 2"){
        V2 = V2 +1;
        D1 = D1 +1;
    }
}

//Função para computador jogar
function aleatorio(){
    valorpc = Math.floor(Math.random()*2)+1;
    soma = soma + valorpc;
}

//Função lance para pc
function lance1pc(){ 
    soma = soma + 1;
    
      pont.innerHTML = parseInt(soma);

    //Condição de vitoria ou derrota
    if( soma < 21 && Jogador === "Jogador 1"){
        Jogador = "Computador";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma < 21 && Jogador === "Computador"){
        Jogador = "Jogador 1";
        aleatorio();
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma == 21){
        pont.innerHTML = `${parseInt(soma)} <br> ${Jogador} Venceu a rodada!`;
    }
    else if(soma >21){
        pont.innerHTML = "Game Over! :(";
    }
    //Contar Score para o Ranking
    if( soma == 21 && Jogador === "Jogador 1"){
        V1 = V1 +1;
        D3 = D3 +1;
    }
    else if( soma == 21 && Jogador === "Computador"){
        V3 = V3 +1;
        D1 = D1 +1;
    }
    

}

function lance2pc(){ 
    soma = soma + 2;
    
      pont.innerHTML = parseInt(soma);

    //Condição de vitoria ou derrota
    if( soma < 21 && Jogador === "Jogador 1"){
        Jogador = "Computador";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma < 21 && Jogador === "Computador"){
        Jogador = "Jogador 1";
        setTimeout(aleatorio(),2000);
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma == 21){
        pont.innerHTML = `${parseInt(soma)} <br> ${Jogador} Venceu a rodada!`;
    }

    else if(soma >21){
        pont.innerHTML = "Game Over! :(";
    }
    
    //Contar Score para o Ranking
    if( soma == 21 && Jogador === "Jogador 1"){
        V1 = V1 +1;
        D3 = D3 +1;
    }
    else if( soma == 21 && Jogador === "Computador"){
        V3 = V3 +1;
        D1 = D1 +1;
    }
    

}

function lance3pc(){ 
    soma = soma + 3;
    
      pont.innerHTML = parseInt(soma);

    //Condição de vitoria ou derrota
    if( soma < 21 && Jogador === "Jogador 1"){
        Jogador = "Computador";
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma < 21 && Jogador === "Computador"){
        Jogador = "Jogador 1";
        setTimeout(aleatorio(),2000);
        pont.innerHTML = `Vez do: ${Jogador} <br> ${parseInt(soma)}`;
    }
    else if( soma == 21){
        pont.innerHTML = `${parseInt(soma)} <br> ${Jogador} Venceu a rodada!`;
    }

    else if(soma >21){
        pont.innerHTML = "Game Over! :(";
    }
     //Contar Score para o Ranking
    if( soma == 21 && Jogador === "Jogador 1"){
        V1 = V1 +1;
        D3 = D3 +1;
    }
    else if( soma == 21 && Jogador === "Computador"){
        V3 = V3 +1;
        D1 = D1 +1;
    }
    

}

//Função para reiniciar o jogo
function reset(){
    pont.innerHTML = "";
    soma = 0;
}

//Função para imprimir o ranking das partidas
function ranking(){
    pont.innerHTML = `Jogador 1<br> Venceu: ${parseInt(V1)} e Perdeu: ${parseInt(D1)} <br> <br> Jogador 2<br> Venceu: ${parseInt(V2)} e Perdeu: ${parseInt(D2)}`;
    
}

//Função para imprimir o ranking das partidas PC
function rankingpc(){
    pont.innerHTML = `Jogador 1<br> Venceu: ${parseInt(V1)} e Perdeu: ${parseInt(D1)} <br> <br> Computador <br> Venceu: ${parseInt(V3)} e Perdeu: ${parseInt(D3)}`;
    
}


score.appendChild(pont);