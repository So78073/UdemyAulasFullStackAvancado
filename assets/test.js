
const firtName = [
    "Ana", "João","Mariana","Pedro","Carla","Lucas","Juliana",
    "Rafael","Fernanda","Diego","Maria","Gustavo","Camila",
    "Daniel","Isabela","Rodrigo","Amanda","Matheus","Laura",
    "Bruno","Renata","Leonardo","Luiza","Guilherme","Natália",
    "Felipe","Vanessa","Arthur","Larissa","Gabriel","Carolina",
    "Eduardo","Lívia","Vinícius","Paula","Thiago","Helena","Alexandre",
    "Cristina","Marcelo","Rosa","Fábio","Andréia","Roberto","Patrícia",
    "Luciana","Renato","Tatiana","Ricardo"
];

const lastNames = [
    "Garcia", "Ramos", "Machado", "Ferreira", "Rocha",
    "Barros", "Nunes", "Correa", "Vieira", "Campos",
    "Farias", "Morais", "Castro", "Azevedo", "Dantas",
    "Diniz", "Leal", "Miranda", "Viana", "Lopes",
    "Cunha", "Borges", "Andrade", "Carneiro", "Teixeira",
    "Paiva", "Pacheco", "Moreira", "Santos", "Oliveira",
    "Souza", "Pereira", "Rodrigues", "Almeida", "Costa",
    "Carvalho", "Pinto", "Gomes", "Martins", "Alves",
    "Araújo", "Monteiro", "Barbosa", "Ribeiro", "Cardoso",
    "Nascimento", "Mendes", "Melo", "Sousa", "Freitas",
    "Sales", "Cavalcanti", "Correia", "Dias", "Johnson",
    "Williams", "Jones", "García", "Rodríguez", "López",
    "Martínez", "Pérez", "Müller", "Schmidt", "Rossi",
    "Dupont", "Ivanov", "Petrov", "Kovačević", "Popescu",
    "Kowalski", "Mandela", "Soweto", "Nkrumah", "Kenyatta",
    "Diop", "Kim", "Lee", "Wong", "Chen", "Singh",
    "Wilson", "Taylor", "Anderson"
]



function generatePeople() {
    return {nome: firtName[Math.floor(Math.random() * firtName.length)], idade: Math.floor( Math.random() * 60)}
}