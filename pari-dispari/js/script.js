const oddEven=document.getElementById("odd-even");
const number=document.getElementById("number");
const result=document.querySelector("h2");
const cpuN=document.querySelector("div");

document.querySelector("button").addEventListener("click",
    function(){
        const n=number.value;
        const oddEvenBet=oddEven.value;
        oddEvenGame(n, oddEvenBet)
    }
);

function oddEvenGame(n, bet){
    n=parseInt(n);
    if(n<0||n>5){
        alert("inserisci un numero valido");
        return;
    }
    else if(bet!="pari"&&bet!="dispari"){
        alert("inserisci pari o dispari");
        return;
    }
    cpuBet=Math.floor(Math.random()*6)
    cpuN.innerHTML=`Numero del computer: ${cpuBet}`;
    const somma=n + cpuBet;
    console.log(somma);
    if (bet==="pari" && somma%2===0){
        result.innerHTML="vittoria!"
    }
    else if (bet==="pari" && somma%2!=0){
        result.innerHTML="sconfitta!"
    }
    else if (bet==="dispari" && somma%2===0){
        result.innerHTML="sconfitta!"
    }
    if (bet==="dispari" && somma%2!=0){
        result.innerHTML="vittoria!"
    }
}