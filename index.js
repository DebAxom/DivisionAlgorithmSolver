const stepsDiv = document.getElementById('steps');

function printSteps(dividend,divisor,quotient,remainder){
    stepsDiv.innerHTML+=`${dividend} = ${divisor} x ${quotient} + ${remainder}`;
    stepsDiv.innerHTML+="<br>";
}

function HCF(dividend,divisor){
    var quotient = Math.floor(dividend/divisor);
    var remainder = dividend%divisor;
    printSteps(dividend,divisor,quotient,remainder);
    if(remainder===0) {
        stepsDiv.innerHTML+="The HCF is: "+ divisor;
        return;
    };
    HCF(divisor,remainder);
}
function Calculate(){
    stepsDiv.innerHTML="";
    var numx = document.getElementById('numx').value;
    var numy = document.getElementById('numy').value;
    if(numx===numy){
        printSteps(numx,numy,1,0);
        return;
    }
    if(numx>numy){
        HCF(numx,numy);
        return;
    }
    HCF(numy,numx);
    return;
}