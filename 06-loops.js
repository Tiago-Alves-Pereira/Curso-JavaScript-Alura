console.log('\n Loops - Laços de repetição')

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

const idadePassageiro = 15
const estaAcompanhada = true
let passagemComprada = false
const permissaoCompra = idadePassageiro >= 18 || estaAcompanhada
const destino = 'Brasília'
let contador = 0

console.log('\n> Destinos disponíveis:')
console.log(destinosViagem)

let destinoExiste = false
while (contador < destinosViagem.length) {
  if (destinosViagem[contador] == destino) {
    destinoExiste = true
    break
  }
  contador++
}

console.log('\n> Destino existe:', destinoExiste)

if (permissaoCompra && destinoExiste) {
  console.log('Boa Viagem!')
} else {
  console.log('Venda impossível de ser completada.')
}

for (let i = 0; i < destinoExiste.length; i++) {
  if (destinosViagem[i] == destino) {
    destinoExiste = true
    break
  }
}
