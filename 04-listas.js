console.log('Trabalhando com listas')

//arrays são estruturas de dados que englobam um conjunto de valores numa única varíavel como por exemplo uma lista de cidades, uma lista de pessoas, etc.

const listaCapitaisBrasil = new Array(
  'Aracaju',
  'Belém',
  'Belo Horizonte',
  'Boa Vista',
  'Brasília',
  'Campo Grande',
  'Cuiabá',
  'Curitiba',
  'Florianópolis',
  'Fortaleza',
  'Goiânia',
  'João Pessoa',
  'Macapá',
  'Maceió',
  'Manaus',
  'Natal',
  'Palmas',
  'Porto Alegre',
  'Porto Velho',
  'Recife',
  'Rio Branco',
  'Rio de Janeiro',
  'Salvador',
  'São Luís',
  'São Paulo',
  'Teresina',
  'Vitória'
)
//A estrutura acima é chamada de construtor, pois estamos constrindo nossa lista, tanto a estrutura de lista quanto os seus valores.

console.log('Capitais do Brasil:', listaCapitaisBrasil)

//Se quisermos adicionar ao fim da lista algum novo valor utilizamos o comando push:
listaCapitaisBrasil.push('nova capital')
console.log('Lista com o(s) valor(es) adicionado(s):', listaCapitaisBrasil)

//Se quisermos remover um valor da minha lista usamos o comando splice, passando a posição do item, lembrando que a contagem da lista começa em 0, e a quantidade de itens a ser excluida.
listaCapitaisBrasil.splice(27, 1)
console.log('Lista com o(s) valor(es) removido(s):', listaCapitaisBrasil)

//Se quisermos exibir somente um valor só precisamos indicar qual a posição (o indíce - lembrando que a contagem começa em 0) desse elemento:
console.log(`Capital: ${listaCapitaisBrasil[3]}`)
