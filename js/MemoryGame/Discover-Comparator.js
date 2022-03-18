function discover(){

   let allDiscover = document.querySelectorAll(".descubierta:not(.acertada)");
   if(allDiscover.length > 1){
     return;
   }

   this.classList.add("descubierta");

   document
    .querySelector("#sonido-carta")
    .cloneNode()
    .play();


   let carsDiscover = document.querySelectorAll(".descubierta:not(.acertada)");
   
   if(carsDiscover.length < 2){
     return;
   }
   
   comparator(carsDiscover);
   actualizarMovimientos();
    
   if(document.querySelectorAll(".tarjeta:not(.acertada)").length === 0){
      setTimeout(finishGame , 1000);
   }
}

function comparator(carsComparator){
  if(carsComparator[0].dataset.valor === carsComparator[1].dataset.valor){
    sucess(carsComparator);
  }else{
    wrong(carsComparator);
  }

}
