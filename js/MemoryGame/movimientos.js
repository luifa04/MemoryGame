function actualizarMovimientos(){
  let movText= "";
  movimientos ++;
  movText = movimientos;

  if(movimientos > cantidadMovimientos){
    gameOver();
    return;
  }

   if(movimientos < 10){
     movText = "0" + movimientos
   }
  document.querySelector("#mov").innerText = movText;
}

function maxContador(){
  var movTextMaximo = cantidadMovimientos;
  if(cantidadMovimientos < 10){
     movTextMaximo = "0" + movTextMaximo;
  }
  
  document.querySelector("#mov-total").innerText = movTextMaximo;
}