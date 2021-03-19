var squadre = [
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
]

for (var i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = Math.floor(Math.random() * 20) + 1
  squadre[i].falliSubiti = Math.floor(Math.random() * 10) + 1
}

console.log(squadre);

var squadreSenzaPunti = []

for (var j = 0; j < squadre.length; j++) {

  var {nome, falliSubiti} = squadre[j]
  squadreSenzaPunti.push(nome, falliSubiti)

}

console.log(squadreSenzaPunti);
