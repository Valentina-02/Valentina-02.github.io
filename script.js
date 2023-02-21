//SECCION INICIO:
//Funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada.
function seleccionar(link){
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";

}
//Funcion para abrir el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//SECCION IDIOMAS:
const seccionIdiomas = document.getElementById("idiomas");
const barrasProgreso = document.querySelectorAll(".barra-progreso");

function showProgress (){
  barrasProgreso.forEach(barraProgreso=> {
    const value = barraProgreso.dataset.progress;
    barraProgreso.style.opacity = 1;
    barraProgreso.style.width = `${value}%`;   
  });
}

function hideProgress () {
  barrasProgreso.forEach(p => {
    p.style.opacity = 0;
    p.style.widht = 0;
  });
}
window.addEventListener('scroll', () =>{
  const sectionPos = seccionIdiomas.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos < screenPos){
    showProgress ();
  }else{
    hideProgress ();
  }
});


