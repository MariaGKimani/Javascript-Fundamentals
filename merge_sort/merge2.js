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
function x(arr){
    if(arr.length <= 1){
        return arr
    }
    let middle = Math.floor
}