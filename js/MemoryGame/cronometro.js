function inciarCronometro(){
    //el cronometro cuenta hacia atras, para hacerlo funcionar primero
    //hacer variables globales segundos y minutos 
    //luego setiar dentro de switch del constructor de niveles y movimientos el tiempo
    //del nivel asi el cronometro hara la cuenta decendiente.
    //acordarse descomentar la funcion actualizar cronometro en juego.js
  let segundos= 0;
  let minutos = 0;
  let minutosTexto="";
  let segundosTexto="";

  function actualizaContador(){
 
      segundos  --;
     if(segundos > 0 ){
      segundos= 59;
      minutos  --;
     }
     
     //detiene el cornometro, deja en cero si entra aqui
     //tendria que saltar la advertencia que perdiste por el timepo
     if(minutos < 0){
        segundos=0;
        minutos=0;
     }

      segundosTexto= segundos;
      minutosTexto= minutos;

      if(segundos < 10){
           segundosTexto= "0" + segundos;
      }

      if(minutos < 10){
        minutosTexto = "0" + minutos;
      }

      document.querySelector("#minutos").innerText = minutosTexto;
      document.querySelector("#segundos").innerText = segundosTexto;
  }

  setInterval(actualizaContador,1000)

}