//Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
 let x =arr1.length-1
 console.log(arr1[x])
 let y = arr2.length-1
 console.log(arr2[y])

 //Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join())
//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
function mergeX(arr3){
    if(arr3.length<= 1){
        return arr3
    }
    let middle =Math.floor(arr3.length/2)
    let left = arr3.slice(0,middle)
    let right = arr3.slice(middle)
    return (xx(mergeX(left),mergeX(right)))
}
function xx(left,right){
    const newX =[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            newX.push(left.shift())
        }else{
            newX.push(right.shift())
        }
    }
    console.log({newX}) 
      return[...newX,...left,...right]
}
console.log(mergeX(arr3))