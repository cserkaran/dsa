const activitySelection = (s,f) => { 

    activities = [];
    let k = 0;

    // select first activity as starting activity.
    activities.push("a" + (k + 1));

    for(let m = 1; m < s.length;m++){
        if(s[m] >= f[k]){
            // if there is no overlap
            k = m;
            activities.push("a" + (k + 1));
        }
    }

    return activities;

}

const activitySelectionRecursive = (s,f, k, activities = []) => {

    // start at activity k
    activities.push("a" + (k + 1));
    
    let m = k + 1;
    
    while(m < s.length && s[m] < f[k]){
        m = m + 1;
    }
    
    if(m < s.length){
        // m is the next compatible activity.
        k = m;
        activitySelectionRecursive(s,f,k, activities);
    }
    
    return activities;
}

console.log(activitySelection([1,3,0,5,3,5,6,7,8,2,12],
    [4,5,6,7,9,9,10,11,12,14,16]));

console.log(activitySelectionRecursive([1,3,0,5,3,5,6,7,8,2,12],
    [4,5,6,7,9,9,10,11,12,14,16],0));