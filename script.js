const F = document.getElementById('F');
const C = document.getElementById('C');
const K = document.getElementById('K');
const bouton = document.getElementById('button');
const U1 = document.getElementById('Unit-debut');
const UF = document.getElementById('Unit-final');
const T = document.getElementById('temp-initial');
const T_final;
bouton.addEventListener("click",() =>{
    if(U1 === F && UF === C)
    {
        T_final = (T*9/5)+32;
        T.value = T_final; 
    }
    if(U1 === C && UF === F )
    {
        T_final = (T-32)*5/9;
    }
    if(U1 === C && UF === K){
        T_final = T + 273.15;
    }
    if(U1 === K && UF === C){
        T_final = T - 273.15;
    }
    if(U1 === F && UF === K){
        T_final = (T-32)*5/9 + 273.15;
    }
    if(U1 === K && UF === F){
        T_final = (T-32)*5/9 - 273.15;
    }
})