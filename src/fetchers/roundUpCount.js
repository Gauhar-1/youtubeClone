export const RoundUp = (count)=>{
    if(count >= 1000000000){
        count/= 1000000000;
        count = count.toFixed(2);
        count += "B"
    }
    else if(count >= 1000000){
        count/= 1000000;
        count = count.toFixed(2);
        count += "M"
    }
    else if(count >= 1000){
        count /=1000;
        count = count.toFixed(2);
        count += "k"
    }
    return count;
}