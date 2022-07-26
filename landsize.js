 const minLandSize = (l,b) => {
    while(l != b){
        console.log("l = " + l + " b = " + b);
        if(l < b){
            b = b - l;
        }
        else {
            l = l - b;
        }
    }

    return l;

 } 

 console.log(minLandSize(1680,640));
