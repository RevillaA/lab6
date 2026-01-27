function numprimo(n){
    if(n === 1){
        return true;
    }
    else if(n === 2){
        return true;
    }
    else if(n % 2 === 0){
        return false;
    }
    else{
        return numprimo(n - 1);
    }
}   

module.exports = numprimo;