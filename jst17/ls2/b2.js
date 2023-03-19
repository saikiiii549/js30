//bai1
const arr1 = [1,2,3,5]
const arr2 = [5,3,2,1]

const arr = [...arr1,...arr2]
console.log(arr);






//bai 2
const arrA = [ "Hello", "Xin chao"]
const arrB = [ "Bonjour", "Ola"]
const waytoSayHello = [...arrA, ...arrB];
console.log(waytoSayHello);









//bai3 
const arrM = [0,1,2,3,4,5,6,7,8]
const arrSquace = arrM.map((num) => {
    return num*num;
})
console.log(arrSquare);
const arrOdds = arrX.filter((num) => {
    return (num %2 == 1);
})
console.log(arrOdds);





// bai 4
arrow functions
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
console.log(filterRange([1,2,3,4], 2, 4));