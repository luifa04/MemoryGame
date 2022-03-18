function finishGame(){
    if(nivelActual <= 5){
        document.querySelector("#subeNivel").classList.add("visible");
    }else{
        document.querySelector("#endGame").classList.add("visible");
    }
}