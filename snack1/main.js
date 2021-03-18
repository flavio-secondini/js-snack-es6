const bici = [
  {
    nome: "bici1",
    pesoKg: 5,
  },
  {
    nome: "bici2",
    pesoKg: 3,
  },
  {
    nome: "bici3",
    pesoKg: 4,
  },
  {
    nome: "bici4",
    pesoKg: 2,
  },
  {
    nome: "bici5",
    pesoKg: 6,
  },
]

console.log(bici);

var pesoMinimo = bici[0].pesoKg
var numero = 0
var nomeBici = ""

for (var i = 1; i < bici.length; i++) {

  if (bici[i].pesoKg < pesoMinimo) {

    const {nome, pesoKg} = bici[i]
    pesoMinimo = pesoKg
    nomeBici = nome
    numero = i + 1
  }

}

console.log(`La bici più leggera è ${nomeBici}, la numero ${numero}, dal peso di ${pesoMinimo} kg`)
