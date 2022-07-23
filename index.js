

window.addEventListener('load',()=>{ //we listen to load the js


    //We create two constants, one for the display and one for the buttons.
    const p = document.getElementById('display');
    const button= document.getElementsByClassName('btn--add');


    //
    const keypasButtons= Array.from(button);


    //we iterate the array
    keypasButtons.forEach(buttons=>{

        //add a listener to the buttons
        buttons.addEventListener('click',()=>{
            calculator(buttons,p)
            
           
        

        })
    })




    


})


function calculator(buttons,p){

    switch(buttons.innerHTML){
        case"c":
        clear(p);
        break;
        case"=":
        result(p)
        break;
        default:
            update(p,buttons)
            break;
    }
}
function result(p){
  p.innerHTML=  eval(p.innerHTML)
  
     

}
function update(p,buttons){
    if(p.innerHTML==0){
        p.innerHTML='';
    }
    p.innerHTML+=buttons.innerHTML
}
function clear(p){
    p.innerHTML=0;
}
