// let num =[45,12,6,89,2,5]
// let target2 = 6

// function sorts(num){
//     if(num.length <= 1){
//         return num
//     }
//     let middle = Math.floor(num.length/2);
//     let left = num.slice(0,middle)
//     let right =num.slice(middle)
//     console.log({right})
//     console.log({left})
//     return mergeSort(sorts(left),sorts(right));
// }
// console.log(sorts(num))
// function mergeSort(left,right){
//     const newArr =[]
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             newArr.push(left.shift())    
//         }else{
//             newArr.push(right.shift())
//         }
//     }
//     console.log({newArr})
//     return[...newArr,...left,...right]  
// }
// // console.log(mergeSort(left,right))
// console.log(sorts(num))












//Given an unsorted array of numbers return the sorted array in descending order
function x(arr){
    if(arr.length <= 1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    console.log({right})
    console.log({left})

    return ssoorrtt(x(left),x(right))
}

function ssoorrtt(left,right){
    const newxArr =[]
    while(left.length && right.length){
        if(left[0] > right[0]){
            newxArr.push(left.shift())
        }else{
            newxArr.push(right.shift())
        }
    }
    
    return[...newxArr,...right,...left]
    
}
let arr =[123,89,5,23,9,56]
console.log(x(arr))

