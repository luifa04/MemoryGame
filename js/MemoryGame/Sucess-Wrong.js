function sucess(cars){
    cars.forEach(function(elemento){
     elemento.classList.add("acertada");
    })

    document.querySelector("#sonido-acierto").play();
}
  
function wrong(cars){
    cars.forEach(function(elemento){
        elemento.classList.add("error");
    })

    document.querySelector("#sonido-error").play();

    setTimeout( function(){
       cars.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
    })},1000);
}