function xxx(arr,target){
    let left =0;
    let right = arr.length -1
    while(left < right){
        let middle = Math.floor(left+ right/2)
        if(middle=== target){
            return middle
        }else if(arr[middle]<target){
            left=middle +1
        }else{
            right=middle +1
        }
    }
    return -1;

 }
 let arr =[2,4,5,7,9,12,14,16,20,22]
 let target = 7
 console.log(xxx(arr,target))