/*Implement a function, findProduct(), that takes an array of integers, replaces each element of the array with the product of the other elements. 

let array = [ 1, 2, 3, 4 ] => [24, 12, 8, 6]
Let array1 = [0,1,2,3,4] => [24, 0, 0, 0]
 */
function findProduct(arr){
  const sumOfCompArray = (compArray) => {
    let product = 1
    for(let num of compArray){
      product = product * num
    }
    return product
  }
  
  let resultingArray = []
  //[1,2,3,4]
  for(let num of arr){
    let complimentArray = arr.filter(a => a !== num)
    resultingArray.push(sumOfCompArray(complimentArray))
  }
  
  return resultingArray
}

console.log(findProduct([1,2,3,4]))
console.log(findProduct([0,1,2,3,4]))

/*Write a function that merges elements of at most two arrays and returns an array of the merged elements in sorted order.

E.g. given, let array1 = [1, 2, 4, 5, 10, 6, 3 ] and let array2 = [0, 8, 19, 90, 11, 16, 13 ]
Should return => [0,1,2,3,4,5,6,8,10,11,13,16,19,90].
 */
function mergeArray(arr1,arr2){
  return arr1.concat(arr2).sort((a,b)=a-b)
}
let array1 = [1, 2, 4, 5, 10, 6, 3 ], array2 = [0, 8, 19, 90, 11, 16, 13 ]
console.log(mergeArray(array1,array2))
