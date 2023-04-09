//es+6 (egmont scri6) -> modenren js -> nesjs (oop)
// ..let/ const...
function sayhello() {
     for (var index = 0; index < 5; index++)
     console.log(index)
     let index = 4;


     console.log(index)
index = 5;
}

sayhello();




//-----arrow functions---

const square = function(num) {
    return num * num ;
}

const square2 = (num => num*num);



//---array.map()---
const colors = ['red','green','blue'];
colors.map (color => console.log(color))


const itemlist = colors.map((colors)=> `<li>${color}</li>`);
const nums = [ 1, 5, 3, 9, 10, 0, 12]
const fil = nums.filter(num => num <= 5);
console.log(fil)


const students = [
    { name:"A", grade: 11, subject: ['sb1', 'sb2', 'sb3'] },
    { name:"B", grade: 12, subject: ['sb3', 'sb1', 'sb5'] },
    { name:"C", grade: 14, subject: ['sb5', 'sb8', 'sb2'] },
    { name:"D", grade: 10, subject: ['sb2', 'sb4', 'sb1'] },
    { name:"E", grade: 8, subject: ['sb1', 'sb2', 'sb3'] },
]
// loc tuoi 11
const ageList = students.filter(st => st.age <= 11)
console.log(ageList)

// in tuoi cua cac ban
const prinAge = students.map(st => st.age);
console.log(prinAge)


const nums = [ 1, 5, 3, 9, 10, 0, 12]
const sum = nums.reduce(((total,num ) => total + num ), 0);

// lot co sb1 <

const filSB = student.map(function(student) {

    student.subject.filter(sb => sb == 'sb1')