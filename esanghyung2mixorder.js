var listlength = length.list2;
var count = 0;
var mixorder = newArray(listlength);
var joongbok2 = true;

while(count<listlength){
    
    var rd2 = parseInt(math.random()*(listlength-1));
    
    
    for(i=0;i<count;i++){
        if(rd2 === mixorder[i]){
            joongbok2 = false;
        }
    }

    if(joongbok2){
        rd2=mixorder[count];
        count++;
    }
    joongbok2 = true;
}