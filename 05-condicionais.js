console.log('Condicionais - Operadores Relacionais e Lógicos')

const destinosViagem = new Array(
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
  'Goiânia'
)

const idadePassageiro = 21

if (idadePassageiro >= 18) {
  console.log('Destinos disponíveis:', destinosViagem)
} else {
  console.log('Passageiro menos de idade, não é possível realizar a venda.')
}
//blocos de códigos condicionais que são autoexcludentes
/*
Seguem os operadores relacionais comuns/matemáticos que usamos para verificar a válidade da condição:
Maior que [>]; Menor que [<]; Maior ou igual que [>=]; Menor ou igual que [<=]; Igual a [==]; Diferente de [!=]
E tem como retorno os status verdadeiro ou falso atráves das palavras reservadas: true / false.
*/

/*
Podemos ainda colocar mais de uma condição para executar nossos blocos condicionais com os operadores booleanos ou lógicos:
E [&&]; OU [||]
*/
