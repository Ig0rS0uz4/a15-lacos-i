let inputUser = Number(prompt("digite um numero de 1 a 10 para saber a tabuada"))
if(inputUser <= 10){
for (let contador = 1; contador <= 10; contador++) {
    console.log(inputUser * contador);
}
}else{
    alert("numero invalido")
}