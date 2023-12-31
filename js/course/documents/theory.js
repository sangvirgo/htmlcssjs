let js ="Sang";
// if(js==="Sang") alert("He lo em iu");

console.log(4546-78);
// section 1
js = "amazing";
// (js==="Sang") ? alert("He lo em iu") : alert("Lo con c"); 
console.log(40 + 8 + 23 - 10);

console.log("lo con cak");


let PI=3.1415;
console.log(PI);

console.log("Anh thich em lam do");
console.log('\n');
// data types
console.log(typeof null);
let dontDeclare;
console.log(dontDeclare);

// Operater 
let phannguyen=7/2 |0; // chia lay phan nguyen
console.log(7/2);
console.log(phannguyen);
console.log(2**3); // 2^3

let age=19
const isLarge= age>=18;
console.log(isLarge);

// Operater Precedence
let tempprecedence;
let Precedence=(tempprecedence=54)-41+78;
console.log(tempprecedence, Precedence);

// string
let string1="Sang";
const string2=`I am ${string1}`;
console.log(string2);
console.log(``);
// su dung dau ` thay vi ' de gan string vao

// use multiple for string
console.log(`String with \n\multiple \n\lines`);
// === with 
console.log(``);

console.log(`String with 
multiple
lines`);

// Type conversion and Coercion 
const tempyear=`2004`;
console.log(tempyear+19);
console.log(Number(tempyear)+19);

console.log('');

// NaH la mot so nhung khong hop le
console.log(typeof NaN);
console.log(Number(string1));

let string3=String(23);
console.log(string3);
console.log(typeof string3);

// some operater such as + - * / auto change  ex
let string4='100'+78;
console.log(string4);
console.log(typeof string4);

console.log(``);

let string5='23'+78+7;
console.log(string5);
console.log(typeof string5);

console.log(``);

let string6='23'+'34'-78;
console.log(string6);
console.log(typeof string6);

console.log(``);

let string7=7+'34'+'545';
console.log(string7);
console.log(typeof string7);


console.log('\n');
// Truthy and Falsy Value
//  5 falsy value: 0, '', undefined, null, NaH
console.log(Boolean(0), '\n');
console.log(Boolean(''), '\n');
console.log(Boolean(undefined), '\n');
console.log(Boolean(null), '\n');
console.log(Boolean(NaN), '\n');
console.log(Boolean('Sang'), '\n');

// ex
let height;
if(height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED!!");
}

console.log("\n");
/* if else 
const num1=prompt("What's your favourite number?");
if(num1==12) {
    console.log("This is a number!");
} else {
    console.log("This is a string");
}

const num2=Number(prompt("What's your favourite number?"));
if(num2===12) {
    console.log("This is a number!");
} else {
    console.log("This is a string");
}
*/

// switch

const day="monday";

switch(day) {
    case "monday":
        console.log("Plan course structure!");
        console.log("Go to meeting");
    case "tuesday":
        console.log("Prepare theory video");
        break;
    case "sunday":
        console.log("Sleep");
        break;
    default:
        console.log("Not a vaild day!");
}

// if
// age =19
console.log(`I like to drink ${age>=18?'wine':'water'}`);

// function expression 
const current=new Date();

const calcAge=function (birthday) {
    return current.getFullYear()-birthday;
}

const age1=calcAge(2004);

console.log(age1, age1);

// arrow function 
const calcAge1=birthday=>new Date().getFullYear()-birthday;
// or
// const calcAge1=birthday=>current.getFullYear()-birthday;
const age2=calcAge1(2004);
console.log(age2);


const yearsUntilRetirement=birthday=> {
    const age=new Date().getFullYear()-birthday;
    const retirement=65-age;
    return retirement;
}

console.log(yearsUntilRetirement(2004));

const yearsUntilRetirement1=(yourname, yearBirthDay)=> {
    const age=new Date().getFullYear()-yearBirthDay;
    const retirement=65-age;
    return `${yourname} is retiring in ${retirement+current.getFullYear()} year`;
}

console.log(yearsUntilRetirement1('Sang', 2004));



// Array
const friends=["Sang", "Han", "Su", "Dong"];
console.log(friends);

var array1=["Red", "Pink", 1, 3, 694, true];
var lengtharray1=array1.length;

console.log(array1[1]);
console.log(lengtharray1);

// Dùng forEach để duyệt qua mảng
let nums = [1, 2, 3, 4, 5, 6, 7];

nums.forEach(function(number) {
    console.log(number);
});

// duyet de cac dong no khongo tu dong xuongo dongf
nums.forEach(function(number, index)  {
    process.stdout.write(number + ' ');

    if(index === nums.length-1) {
        process.stdout.write('\n');
    }
});

//  map 
let squaredNumbers=nums.map(function(number) {
    return number*number;
});

console.log(squaredNumbers);

console.log(nums);

// filter 
let evenNumbers=nums.filter(function(number){
    // loc cac phan tu la mang la mang chan
    return number%2===0;
});

console.log(evenNumbers);

evenNumbers.forEach(function(number, index){
    process.stdout.write(number+' ');
    
    if(index===evenNumbers.length-1) {
        process.stdout.write('\n');
    }
});

// tinh tong cac so trong mang
let sum=nums.reduce(function(accumulator, currentValue){
    return accumulator+currentValue;
}, 0);

console.log(sum);

// find dung de tim phan tu dauy tien thoa dieu kien trong mang
let foundNumber=nums.find(function(number){
    return number>3;
});

console.log(foundNumber);

// Methods of array

// manipulate arrays 
const arrayNum1=[1, 2, 3, 4];
arrayNum1.push("Sang", 5);
console.log(arrayNum1);

// pop 
const variablepop=arrayNum1.pop();
console.log(variablepop);
console.log(arrayNum1);
arrayNum1.pop();
console.log(arrayNum1);

// shift   xoa phan tu dau remove the first element
const myArray = [["John", 23], ["dog", 3]];
const variableshift=myArray.shift();
console.log(variableshift);
console.log(myArray);


// unshift
arrayNum1.unshift("Han");
console.log(arrayNum1);

// find index
console.log(friends);
console.log(friends.indexOf('Sang'));
console.log(friends.indexOf('Sang1'));
// if its not find, it will log -1

// log true if found
console.log(friends);
console.log(friends.includes('Sang'));
console.log(friends.includes('Sang1'));

if(friends.includes('Sang')){
    console.log('You have a friend called Sang')
}

/* Write your code below. Good luck! 🙂 */


function calcTip(num) {
    return (num >= 50 && num <= 300) ? num * 0.15 : num * 0.2;
}

let bills = [125, 555, 44];
let tips = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
let totals = [];
for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}

console.log(totals);


// introduction to object
const arrayOfSang={
    firstName: 'Nguyen',
    lastName: 'Sang',
    age: new Date().getFullYear-2004,
    job: 'Dev',
    myLover: 'Su'
};

console.log(arrayOfSang);