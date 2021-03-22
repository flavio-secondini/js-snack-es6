var cats = [
    {
        nome: 'Silvestro',
        eta: 10,
        colore: 'Nero',
        sesso: 'Maschio'
    },
    {
        nome: 'Clara',
        eta: 8,
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
        eta: 11,
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

    $(".lista2").append(`<li>${element.nome} è di colore ${element.colore}<i class="fas fa-ribbon ${colore}"></i></li>`)
});
