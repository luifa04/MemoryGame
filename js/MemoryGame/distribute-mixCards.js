function  mixCards () {
    const cardsMixes= totalCards.sort(() =>0.5 - Math.random());
    return cardsMixes;
}

async function distributeCards(){
    await constructorArray();

   const mesa= document.querySelector("#mesa");
   
   mesa.innerHTML= "";
   
   const cardsMixes= mixCards();

   cardsMixes.forEach(function(element) {
       const card = document.createElement("div");
       
       card.innerHTML= (
          '<div class="tarjeta vueltaFront" data-valor="'+
          element+'"'+
          '>' +
          '<div class="tarjeta__contenido vueltaBack"'+
          'style= "background-image: url('+"'"+element+"'"+');">' +
          '</div>' +
          '</div>'
       );

      mesa.appendChild(card);
   });
}