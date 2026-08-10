const bouton = document.getElementById("button");
const U1 = document.getElementById("Unit-debut");
const UF = document.getElementById("Unit-final");
const T = document.getElementById("temp");
const Resultat = document.getElementById("result");

bouton.addEventListener("click", () => {

    const tempSaisie = parseFloat(T.value);
    let T_final = 0;
    if (U1.value === "F" && UF.value === "C") {
        T_final = (tempSaisie * 9) / 5 + 32;
        Resultat.value = T_final.toFixed(2);
    } 
    else if (U1.value === "C" && UF.value === "F") {
        T_final = ((tempSaisie - 32) * 5) / 9;
        Resultat.value = T_final.toFixed(2);
    } 
    else if (U1.value === "C" && UF.value === "K") {
        T_final = tempSaisie + 273.15;
        Resultat.value = T_final.toFixed(2);
    } 
    else if (U1.value === "K" && UF.value === "C") {
        T_final = tempSaisie - 273.15;
        Resultat.value = T_final.toFixed(2);
    } 
    else if (U1.value === "F" && UF.value === "K") {
        T_final = ((tempSaisie - 32) * 5) / 9 + 273.15;
        Resultat.value = T_final.toFixed(2);
    } 
    else if (U1.value === "K" && UF.value === "F") {
        T_final = ((tempSaisie - 32) * 5) / 9 - 273.15;
        Resultat.value = T_final.toFixed(2);
    }
    console.log(T_final);
    
});
