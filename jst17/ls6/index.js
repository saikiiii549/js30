//https://docs.google.com/document/d/1DR37_M_EFaUMIzT6Sb9K7J4ulywr34Ax_qf6m-QldHs/edit#heading=h.po9w7kcueuai
//- cau 1 -
const m = [1,2,3,4,5,6,"hh", "9", 80,100]
let a = m.map(Number).m.filter(Number)(x => map.pow(x,2));
console.log(a);

// - cau 2-
const stringA = "High know legne,high return"
let arr = stringA.split(" ").map(word => word.toLocaleLowerCase())
console.log(arr);
// - cau 3 -
let  arr1 = [1,2,4,5,6]
let  arr2 = [1,6,8,9,0]
let newarray = arr1.filter((x)=> arr2.includes(x))
console.log(newarray)
// - cau 5 -
const M = [1,2,4,5,6,7];
const n = [3,5,675,8,96];
const duplicatedList = [1, 8, 10, 96, 7]

let arr3 = [...M, ...n];
let arrRS = arr3.filter(item => !duplicatedList.includes(item));
console.log(arrRS);

