let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
// os Dois tipos foi undefined ,pois não atribuimos o valor para essas variaveis,é uma variavel não definida
prompt("Qual o seu nome?")
prompt("Qual a sua idade?")
nome=prompt("Qual o seu nome?")
idade=prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// Os dois tipos saiu como Strings,pois o cosigo prompt sempre vai sair uma string 
console.log("Olá",nome,"você tem",idade,"anos")

//part2

let resp1=prompt("Qual é o seu time?")
let resp2=prompt("Qual o seu filme preferido?")
let resp3=prompt("O que esta achando da labenu?")
console.log(resp1,resp2,resp3)
//mandando a pergunta como variável
 let perguntaA="Qual é o seu time?"
 let respostaA=prompt(perguntaA)
 let perguntaB="Qual o seu filme preferido?"
 let respostaB=prompt(perguntaB)
 let perguntaC="O que esta achando da labenu?"
 let respostaC=prompt(perguntaC)
console.log(respostaA)
console.log(respostaB)
console.log(respostaC)

