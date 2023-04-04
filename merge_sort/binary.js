//Write a function in Javascript that implements binary search 
//on a sorted array of numbers.
// The function should take two arguments: 
//the array and the target value,
// and return the index of the target value if it exists in the array, 
//or -1 if it doesn't.
function binarySearch(arr1,target2){
    let leftIndex =0
    let rightIndex = arr1.length -1
    while(leftIndex <= rightIndex){
    let middle= Math.floor((leftIndex + rightIndex)/2)
    if(arr1[middle] ===target2){
        return middle
    }else if(arr1[middle] < target2){
        left = middle + 1
    }else{
        right = middle -1
    }
}
return -1
}


let arr1 = [2,4,6,8,10,12,14,16,18,20]
let target2 = 1
console.log(binarySearch(arr1,target2))











//Given the following array, search for the following target
function search(arr2,target){
    let left = 0;
    let right = arr2.length -1
    while(left <=right){
        let middle = Math.floor((left+right) /2)
        if(arr2[middle] === target){
            return target 
        }else if(arr2[middle] < target){
            left = middle +1
        }else{
            right = middle -1
        }
    }

    return null
}
let target = 34
let arr2 = [1,4,5,6,34,35]
console.log(search(arr2,target))





let emp1 =[2,3,4,5,6,7,8,9,10]
let target1 = 9
let x =emp1.indexOf(target1);
if(x !== -1){
    console.log(`The target value of${target1} was found at index ${x}`)
}else{
    console.log("not found")
}
//also use .includes()


//binary search
function binarySearch(emp,target4){
    let left = 0
    let right = emp.length-1
    while(left< right){
        let middle =Math.floor((left+right)/2)
        if(emp[middle]===target4){
            return target4
        }else if(emp[middle]< target4){
            left = middle +1
        }else{
            right = middle -1
        }
    }
    return null
    
}
let emp =[2,3,4,5,6,7,8,9,10]
let target4 = 16
console.log(binarySearch(emp,target))