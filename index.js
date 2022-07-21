window.addEventListener('load', ()=>{/*escuchamos cuando cargue el js*/

/*creamos dos constante una para buscar el display y otro los botoness*/
    const p = document.querySelector("#resultado")
    const button=document.getElementsByClassName("button")

    /*creamos otra constante para convertir el htmlcollection a un array*/
    const keypadButtonsArray = Array.from(button)

    /*iteramos el array de botones*/
    keypadButtonsArray.forEach(buttons => {

        /*a cada boton le agregamos un listener*/
       buttons.addEventListener('click', ()=>{
        calculadora(buttons,p)
       })
        
    });


})

/*aqui las funciones*/

function calculadora(buttons,p){

    switch(buttons.innerHTML){
        case"c":
        borrar(p);
        break;
        case"=":
        calcular(p)
        break;
        default:
            actualizar(p,buttons)
            break;
    }
}
function calcular(p){
  p.innerHTML=  eval(p.innerHTML)
}
function actualizar(p,buttons){
    if(p.innerHTML==0){
        p.innerHTML='';
    }
    p.innerHTML+=buttons.innerHTML
}
function borrar(p){
    p.innerHTML=0;
}
