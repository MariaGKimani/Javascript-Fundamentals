let arr=[123,89,5,23,9,56]
function xx(arr){
    if (arr.length<=1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return xxxx(xx(left),xx(right))
}

function xxxx(left,right){
    const newArrr =[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            newArrr.push(left.shift())
        }else{
            newArrr.push(right.shift())
        }
    }
    // console.log({newArrr})
    return [...newArrr,...left,...right]
}
console.log(xx(arr))


let mg =[32,34,27,25,12,2,6,1,54,44,22];
function kim(mg){
    if(mg.length <=1){
        return mg
    }
    let middle2 = Math.floor(mg.length/2)
    let left2 = (0,middle2);
    let right2 =(middle2);
    return

}
function Gor(left2,right2){
    const bb=[]
    while(left2.length && right2.length){
        if(left2 < right2){
            bb.push(left2.shift())
        }else{
            bb.push(right2.shift())
        }
    }
    return [...bb,...left2,...right2]
}