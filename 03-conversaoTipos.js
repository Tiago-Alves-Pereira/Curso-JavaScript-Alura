console.log('Conversão dde tipos JS')

//Quando tentamos misturar texto e números no JS temos o seguinte comportamento:

console.log('ano' + 2021)
console.log('2' + '2')
//Para a operação de soma, entre textos ou texto e um número, temos uma 'concatenação' de argumenetos.

//Podemos forçar a transformação de um texto em número por meio do comando parse:
console.log(parseInt('2') + parseInt('2'))
//Esta conversão é chamada de explícita.

//Para outras operações aritméticas se os textos forem números, temos:
console.log('2' * '3')
console.log('10' / 2)
//O que temos aqui é uma conversão implícita.

//Se tentarmos fazer uma conversão implícita entre palavras, teremos como retorno o erro NaN (Not a Number).
console.log('Tiago' * 2)
