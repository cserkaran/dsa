const factors = (number) => {
    const original = number;
   
    let result = [];

    // first pull out all factors of 2.
    while(number % 2 === 0){
        number = number / 2;
        result.push(2);
    }

    let start = 3;
    let stop = Math.ceil(Math.sqrt(number));

    while(start <= stop){
        while(number % start === 0){
           number = number / start;
           result.push(start);
           // update the stop value to sqrt of current number.
           stop = Math.ceil(Math.sqrt(number));
        }
        
        // since we are starting at 3, 
        // we increment by 2 to skip factors of 2 e.g. 4,6,8.. so on.
        start += 2;
    }

    if(number > 1){
        result.push(number);
    }

    let product = 1;
    for(let index = 0; index < result.length; index++){
        product *= result[index];
    }

    console.log(`number = ${original} product = ${product} factors = ${result}`)

  
}

factors(6);
factors(204);
factors(88);
factors(204*88);
factors(204*88*91*76);
factors(15312322321);
factors(153);
factors(1234567890);
 