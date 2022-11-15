const input=document.querySelector("input");
const result=document.querySelector("h2");

document.querySelector("button").addEventListener("click", palindroma);

function palindroma(){
    const word=input.value;
    let revWord=word.split("").reverse().join("");
    if(word===revWord){
        result.innerHTML="Parola palindroma"
    }
    else{
        result.innerHTML="Parola non palindroma"
    }
}