
async function prueba(){
   movimientos=0;
   
   await distributeCards()
   maxContador();

   document.querySelector("#mov").innerText = "00";
   document.querySelector("#endGame").classList.remove("visible");
   document.querySelector("#gameOver").classList.remove("visible");
   document.querySelector("#subeNivel").classList.remove("visible");

 
   document.querySelectorAll(".tarjeta").forEach(
         function (elemento){
            elemento.addEventListener("click",discover);
         }
   )

   //inciarCronometro();
}

function reiniciar(){
   nivelActual=0;
   groupCards=[];
   totalCards=[];
   actualizaNivel();
   prueba();
}

async function ver(){
   await prueba();

   document.querySelectorAll(".reiniciar").forEach(function(elemento){
           elemento.addEventListener("click", reiniciar);
     });
     
  document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

}

ver();





