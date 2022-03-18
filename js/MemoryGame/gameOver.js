function gameOver() {
    document.querySelector("#gameOver").classList.add("visible");
    document.querySelectorAll(".tarjeta").forEach(
      function (elemento){
            elemento.removeEventListener("click",discover);
      })
}