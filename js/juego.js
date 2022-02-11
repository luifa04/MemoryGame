
const groupCards= [];
let totalCards = [];

async function constructorArray(){  

    for (let i = 0; i < 8; i++) {
             
        try {
            const numRamdom = () => Math.floor((Math.random() * (826 - 1 + 1)) + 1);
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${numRamdom()}`
            )
            const data = await response.json()
            console.log(data.image); 
            
            groupCards.push(data.image);
        } catch (error) {
            return new Error (console.log(error));
        }
    }
    totalCards= groupCards.concat(groupCards);
}


async function distributeCards(){
    await constructorArray();

   const mesa= document.querySelector("#mesa");
   
   mesa.innerHTML= "";
   
   const cardsMixes= mixCards();

   console.log(cardsMixes);

   cardsMixes.forEach(function(element) {
       const card = document.createElement("div");
       
       card.innerHTML= (
          '<div class="tarjeta vueltaFront">' +
          '<div class="tarjeta__contenido vueltaBack"'+
          'style= "background-image: url('+"'"+element+"'"+');">' +
          '</div>' +
          '</div>'
       );

      mesa.appendChild(card);
   });
}


function discover(){
    this.classList.add("descubierta");
}

function  mixCards () {
    const cardsMixes= totalCards.sort(() =>0.5 - Math.random());
    return cardsMixes;
}


async function prueba(){
   await distributeCards()

   document.querySelectorAll(".tarjeta").forEach(
    function (elemento){
       elemento.addEventListener("click",discover);
    }
   );
}

prueba();