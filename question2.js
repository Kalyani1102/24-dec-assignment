//Take n from the user and print first n prime numbers.



var c = prompt("Enter number: ");

for(var i=4; i<=c ;i++){

        var isPrime = true;

        for(var j=4; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    } 