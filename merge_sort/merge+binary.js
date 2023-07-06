//Given an unsorted array of numbers return the sorted array in descending order
function ssoorrtt(ar){
    if (ar.length <= 1) {
        return ar
    }
    let middle = Math.floor(ar.length/2)
    let left =ar.slice( 0,middle);
    let right = ar.slice(middle);
   return ssoorrtt2(ssoorrtt(left),ssoorrtt(right))
    
}

function ssoorrtt2(left,right){
    const newArr =[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            newArr.push(left.shift())
        }else{
            newArr.push(right.shift())
        }
    }
    return[...newArr,...left,...right];
}
let ar =[123,89,5,23,9,56]
console.log(ssoorrtt(ar))

function divide(num2,targe){
    let left = 0;
    let right =num2.length-1;

        while(left<= right){
            let middle =Math.floor((left+right)/2)
            if(num2[middle]===targe){
                return middle
            }else if(num2[middle]< targe){
                left = middle +1
            }else{
                right = middle -1
            }
        }
        return null
}
targe = 73;
let num2 =[12,25,32,37,41,48,58,60,66,73,74,83,91,95];
console.log(divide(num2,targe))