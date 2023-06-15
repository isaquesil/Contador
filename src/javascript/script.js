const mais = document.querySelector('#plus');
const menos = document.querySelector('#minus');
const reset = document.querySelector('#reset');
const value = document.querySelector('#value');

let cont = 0;
let intervalo=0;

mais.addEventListener('mousedown',()=>{
        cont += 1;
        value.innerHTML = cont 
    });

menos.addEventListener('click',()=>{
    cont -= 1
    value.innerHTML = cont

});
reset.addEventListener('click',()=>{
    cont = 0
    value.innerHTML = cont
});
