var cats = [
    {
        nome: 'Silvestro',
        eta: 10,
        colore: 'Nero',
        sesso: 'Maschio'
    },
    {
        nome: 'Clara',
        eta: 40,
        colore: 'Verde',
        sesso: 'Femmina'
    },
    {
        nome: 'Bella',
        eta: 9,
        colore: 'Rosa',
        sesso: 'Femmina'
    },
    {
        nome: 'Tom',
        eta: 100,
        colore: 'Grigio',
        sesso: 'Maschio'
    },
]

cats.forEach((element, i) => {
  $(".lista").append(`<li>${element.nome} è color ${element.colore}`)
})

const maschi = cats.filter((item) => item.sesso == 'Maschio')
const femmine = cats.filter((item) => item.sesso == 'Femmina')

cats.forEach((element) => {
    let colore;

    if(element.sesso == 'Maschio') {
        colore = 'azzurro';
    }

    else if(element.sesso == 'Femmina') {
        colore = 'rosa';
    }

    let opacita

    if (element.eta < 25) {
      opacita = "chiaro"
    } else if (25 < element.eta && element.eta < 50) {
      opacita = "medio"
    } else {
      opacita = "scuro"
    }

    $(".lista2").append(`<li>${element.nome} è di colore ${element.colore}<i class="fas fa-ribbon ${colore} ${opacita}"></i></li>`)
});

var gattiOrdinati = [...femmine, ...maschi]

var nuoviGatti = gattiOrdinati.map((gatto, index, array) => {
  var {nome, colore} = gatto

  let opacita

  if (gatto.eta < 25) {
    opacita = "chiaro"
  } else if (25 < gatto.eta && gatto.eta < 50) {
    opacita = "medio"
  } else {
    opacita = "scuro"
  }

  let obj = {
    nome,
    colore,
    opacita
  }
  console.log(obj);
  $(".lista3").append(`<li>${obj.nome} è di colore ${obj.colore}</li>`)
})
