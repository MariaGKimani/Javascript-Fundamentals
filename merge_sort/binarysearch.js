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


//search for 42
function divide2(num1,target1){
    let left = 0;
    let right = num1.length-1;
    while(left <= right){
        let middle1 = Math.floor((left + right)/2)
        if(num1[middle1] ===target1){
            return middle1;
        }else if(num1[middle1]< target1){
            left =middle1+1;  
        }else{
            right =middle1-1;
        }
    }
    return -1
}
target1 = 42;
let num1 = [12,13,14,16,27,35,38,42,67,89,90]
console.log(divide2(num1, target1));



//search for 14
function last(num3,target3){
    let left3 = 0;
     let right3 = num3.length -1;
     while(left3 <=right3 ){
        let middle3 = Math.floor((left3 + right3)/2)
            if(num3[middle3]=== target3){
                return middle3          
        }else if(num3[middle3]< target3){
            left3 = middle3 + 1
        }else{
            right3 = middle3 - 1
        }
     }
     return null
}
let target3 = 14
let num3 = [12,13,14,16,27,35,38,42,67,89,90]
console.log(last(num3,target3))


//search for 90
function lastlast(num4,target4){
    let left4 =0;
    let right4 = num4.length-1
    while(left4< right4){
        let middle4 = Math.floor((left4 + right4)/2)
        if(middle4 ===target4){
            return middle4
           
        }else if(num4[middle4] < target4){
            left4 =middle4 + 1;
        }else{
            right4 =middle4 -1;
        }
    }
    return null
}
let target4 = 90
let num4 = [1,2,3,5,8,9,12,13,14,16,27,35,38,42,67,89,90]
console.log(last(num4,target4))

function hundred(num5,target5){
    let left5 = 0;
    let right5 =num5.length -1
    while(left5 < right5){
        let middle5 =Math.floor((left5 + right5)/2)
        if(middle5 ===target5){
            return middle5
        }else if(num5[middle5]< target5){
            left5 = middle5 +1
        }else{
            right5 =middle5 -1
        }
    }
    return null  
}
let target5 = 100
let num5 = [1,2,3,5,8,9,12,13,14,16,27,35,38,42,67,89,90]
console.log(hundred(num5,target5))




function tamati(num6,target6){
    let left6 = 0;
    let right6 = num6.length -1
    while(left6 <right6){
        let middle6 = Math.floor((left6+right6)/2);
        if(middle6===target6){
            return middle6
        }else if(num6[middle6]< target6){
            left6 = middle6 + 1
        }else{
            right6 = middle6 - 1
        }
    }
    return null
}
let target6 = 1
let num6 = [1,2,3,5,8,9,12,13,14,16,27,35,38,42,67,89,90]
console.log(tamati(num6,target6))