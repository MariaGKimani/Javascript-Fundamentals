//Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
function sorting(arr){
    if(arr.length <= 1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    console.log({right})
    console.log({left})
    return sorting2(sorting(left),sorting(right))
}
function sorting2(left,right){
    const newArrr =[]
    while(left.length && right.length){
        if(left[0] < right[0]){
            newArrr.push(left.shift())
        }else{
            newArrr.push(right.shift())
        }
    }
    console.log({newArrr})
    return[...newArrr,...right,...left]
}
console.log(sorting(arr))







//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null

function x(num){
    if(num.length <= 1){
        return num
    }
    let middle =num.length/2
    let left1 = num.slice(0,middle)
    let right1 = num.slice(middle)
    return y(x(left1),y(right1))
   
}
function y(left1,right1){
    const newxy =[]
    while(left1.length && right1.length){
        if(left1[0] <right1[0]){
            newxy.push(left1.shift())
        }else{
            newxy.push(right1.shift())
        }
    }
    console.log(newxy)
    return [...newxy,...right1,...left1]
}
let num = [45,12,6,89,2,5]
let target = 6
console.log(x(num))