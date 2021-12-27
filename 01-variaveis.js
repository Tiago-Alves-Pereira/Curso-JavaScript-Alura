console.log('Aula sobre variáveis!')

//JS é uma linguagem CASE SENSITIVE - exemplo abaixo:
const Idade = 20
const idade = 75

console.log('Idade é:', Idade + '. Já idade é:', idade + '.')
//Ou seja, varíaveis com as mesmas palavras escritas de jeitos diferentes, são consideradas varíaveis diferentes.
// Boa prática a ser seguida é escolher as variáveis com a primeira letra maíuscula ou tudo minuscula

// ------ DECLARAÇÃO DE VARIÁVEIS -----------
/* Há três possibilidades de variáveis no JS:
var: permite que a variável esteja disponível de modo global em todo o escopo do seu código e pode ser alterada.
let: variável disponível somente dentro do próprio escopo e não pode ser alterada.
const: variável disponível somente dentro do próprio escopo e não pode ser alterada. 
*/

//Uma boa prática é sempre usar const para evitar mudanças na variável, principalmente de tipo [string, int, float, boolean]. Usar let para as varíveis que precisaremos alterar seu estado como contadores, placares, etc. E evitar ao máximo as varíaveis var.

//Sempre declare suas variáveis de maneira a ficar claro o porque aquela varíavel existe e o que ela guarda.

const primeiroNome = 'Tiago'
const sobrenome = 'Pereira'

console.log('Meu nome é: ' + primeiroNome + ' ' + sobrenome + '.') //concatenaçaõ simples
console.log('Meu nome é:', primeiroNome, sobrenome + '.') //concatenação com vírgula
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}.`) //interpolação de variáveis
//Temos diversas maneiras de apresentar a mensagem ao usuário, sendo a terceira a de melhor prática
