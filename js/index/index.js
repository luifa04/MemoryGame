
const API = "https://rickandmortyapi.com/api/character/?page=1";
let varNext;
let varPrevius;

const  $main = document.getElementById("cards-content");




async function takeInfoPage(page){
        try {
            const response = await fetch(`${page}`)
            const data = await response.json()
            const {info} = data;
            if(info.prev){
              varPrevius =`<button class="indicador"><</button>`;
              document.getElementById("previous").setAttribute("data-href",info.prev);
              document.getElementById("previous").innerHTML= varPrevius;
            }

            if(info.next){
              varNext =`<button class="indicador">></button>`;
              document.getElementById("next").setAttribute("data-href",info.next);
              document.getElementById("next").innerHTML = varNext;                
            }

            const {results} = data; 
            results.map(character => {
            const card = constructorCards(character);
            $main.appendChild(card);
          });
            return data;
        } catch (error) {
            return new Error (console.log(error));
        }
}

function constructorCards(element){

       const card = document.createElement("article");
       card.classList.add("card");
      
       card.innerHTML= `
       <div class="card-image">
         <img class="img-fluid" src="${element.image}" alt="imagen de ${element.name}">
         <span class="badge-top">${element.origin.name}</span>
       </div>
       <div class="card-body">
         <h3>${element.name}</h3>
         <p>${element.species}</p>
         <span class="${element.status.toLowerCase()}">${element.status}</span>
       </div>
       `;

       return card;
}


document.addEventListener("DomContentLoaded", takeInfoPage(API));
  

const next = document.querySelector("#next")

next.addEventListener("click",()=>{
  document.querySelectorAll("article").forEach(function (e){
    e.remove();
  });
  
  takeInfoPage(next.getAttribute("data-href"))
})

const previous = document.querySelector("#previous")

previous.addEventListener("click",()=>{
  document.querySelectorAll("article").forEach(function (e){
    e.remove();
  });
  
  takeInfoPage(previous.getAttribute("data-href"))
})


