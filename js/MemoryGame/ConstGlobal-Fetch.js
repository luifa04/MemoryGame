let groupCards= [];
let totalCards = [];
let movimientos=0;
let nivelActual=0;

let cantidadCartas= 0;
let cantidadMovimientos=0;


async function constructorArray(){
    switch(nivelActual){
        case 0: 
        cantidadCartas=6;
        cantidadMovimientos= 11;
        break;
        case 1: 
        cantidadCartas = 8;
        cantidadMovimientos= 15;
        break;
        case 2: 
        cantidadCartas=10;
        cantidadMovimientos= 17;
        break;
        case 3: 
        cantidadCartas = 12;
        cantidadMovimientos= 19;
        break;
        case 4: 
        cantidadCartas=14;
        cantidadMovimientos= 22;
        break;
        case 5: 
        cantidadCartas = 16;
        cantidadMovimientos= 24;
        break;
    }

    for (let i = 0; i < cantidadCartas; i++) {
             
        try {
            const numRamdom = () => Math.floor((Math.random() * (826 - 1 + 1)) + 1);
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${numRamdom()}`
            )
            const data = await response.json()
            
            groupCards.push(data.image);
        } catch (error) {
            return new Error (console.log(error));
        }
    }
    totalCards= groupCards.concat(groupCards);
}