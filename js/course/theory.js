/*
let js = "Sang";
// if(js==="Sang") alert("He lo em iu");

console.log(4546 - 78);
// section 1
js = "amazing";
// (js==="Sang") ? alert("He lo em iu") : alert("Lo con c");
console.log(40 + 8 + 23 - 10);

console.log("lo con cak");

let PI = 3.1415;
console.log(PI);

console.log("Anh thich em lam do");
console.log("\n");
// data types
console.log(typeof null);
let dontDeclare;
console.log(dontDeclare);

// Operater
let phannguyen = (7 / 2) | 0; // chia lay phan nguyen
console.log(7 / 2);
console.log(phannguyen);
console.log(2 ** 3); // 2^3

let age = 19;
const isLarge = age >= 18;
console.log(isLarge);

// Operater Precedence
let tempprecedence;
let Precedence = (tempprecedence = 54) - 41 + 78;
console.log(tempprecedence, Precedence);

// string
let string1 = "Sang";
const string2 = `I am ${string1}`;
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
const tempyear = `2004`;
console.log(tempyear + 19);
console.log(Number(tempyear) + 19);

console.log("");

// NaH la mot so nhung khong hop le
console.log(typeof NaN);
console.log(Number(string1));

let string3 = String(23);
console.log(string3);
console.log(typeof string3);

// some operater such as + - * / auto change  ex
let string4 = "100" + 78;
console.log(string4);
console.log(typeof string4);

console.log(``);

let string5 = "23" + 78 + 7;
console.log(string5);
console.log(typeof string5);

console.log(``);

let string6 = "23" + "34" - 78;
console.log(string6);
console.log(typeof string6);

console.log(``);

let string7 = 7 + "34" + "545";
console.log(string7);
console.log(typeof string7);

console.log("\n");
// Truthy and Falsy Value
//  5 falsy value: 0, '', undefined, null, NaH
console.log(Boolean(0), "\n");
console.log(Boolean(""), "\n");
console.log(Boolean(undefined), "\n");
console.log(Boolean(null), "\n");
console.log(Boolean(NaN), "\n");
console.log(Boolean("Sang"), "\n");

// ex
let height;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED!!");
}

console.log("\n");
// // if else
// const num1=prompt("What's your favourite number?");
// if(num1==12) {
//     console.log("This is a number!");
// } else {
//     console.log("This is a string");
// }

// const num2=Number(prompt("What's your favourite number?"));
// if(num2===12) {
//     console.log("This is a number!");
// } else {
//     console.log("This is a string");
// }

// switch

const day = "monday";

switch (day) {
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
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// function expression
const current = new Date();

const calcAge = function (birthday) {
  return current.getFullYear() - birthday;
};

const age1 = calcAge(2004);

console.log(age1, age1);

// arrow function
const calcAge1 = (birthday) => new Date().getFullYear() - birthday;
// or
// const calcAge1=birthday=>current.getFullYear()-birthday;
const age2 = calcAge1(2004);
console.log(age2);

const yearsUntilRetirement = (birthday) => {
  const age = new Date().getFullYear() - birthday;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(2004));

const yearsUntilRetirement1 = (yourname, yearBirthDay) => {
  const age = new Date().getFullYear() - yearBirthDay;
  const retirement = 65 - age;
  return `${yourname} is retiring in ${
    retirement + current.getFullYear()
  } year`;
};

console.log(yearsUntilRetirement1("Sang", 2004));

// Array
const friends = ["Sang", "Han", "Su", "Dong"];
console.log(friends);

var array1 = ["Red", "Pink", 1, 3, 694, true];
var lengtharray1 = array1.length;

console.log(array1[1]);
console.log(lengtharray1);

// Dùng forEach để duyệt qua mảng
let nums = [1, 2, 3, 4, 5, 6, 7];

nums.forEach(function (number) {
  console.log(number);
});

// duyet de cac dong no khongo tu dong xuongo dongf
nums.forEach(function (number, index) {
  process.stdout.write(number + " ");

  if (index === nums.length - 1) {
    process.stdout.write("\n");
  }
});

//  map
let squaredNumbers = nums.map(function (number) {
  return number * number;
});

console.log(squaredNumbers);

console.log(nums);

// filter
let evenNumbers = nums.filter(function (number) {
  // loc cac phan tu la mang la mang chan
  return number % 2 === 0;
});

console.log(evenNumbers);

evenNumbers.forEach(function (number, index) {
  process.stdout.write(number + " ");

  if (index === evenNumbers.length - 1) {
    process.stdout.write("\n");
  }
});

// tinh tong cac so trong mang
let sum = nums.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// find dung de tim phan tu dauy tien thoa dieu kien trong mang
let foundNumber = nums.find(function (number) {
  return number > 3;
});

// Methods of array

// manipulate arrays
const arrayNum1 = [1, 2, 3, 4];
arrayNum1.push("Sang", 5);
console.log(arrayNum1);

// pop
const variablepop = arrayNum1.pop();
console.log(variablepop);
console.log(arrayNum1);
arrayNum1.pop();
console.log(arrayNum1);

// shift   xoa phan tu dau remove the first element
const myArray = [
  ["John", 23],
  ["dog", 3],
];
const variableshift = myArray.shift();
console.log(variableshift);
console.log(myArray);

// unshift
arrayNum1.unshift("Han");
console.log(arrayNum1);

// find index
console.log(friends);
console.log(friends.indexOf("Sang"));
console.log(friends.indexOf("Sang1"));
// if its not find, it will log -1

// log true if found
console.log(friends);
console.log(friends.includes("Sang"));
console.log(friends.includes("Sang1"));

if (friends.includes("Sang")) {
  console.log("You have a friend called Sang");
}

// sort()
const fruits = ["apple", "banana", "orange", "grape", "kiwi", "cherry"];
fruits.sort();
console.log(fruits + "\n");

// sort by length
fruits.sort(function (a, b) {
  return a.length - b.length;
});

console.log(fruits + "\n");

const num3 = [8, 7, 1, 9, 6, 4, 5, 2, 1, 7, 5];
num3.sort();
console.log(num3);

// sort decreases gradually
num3.sort(function (a, b) {
  return b - a;
});
console.log(num3);

// how to use find
// its return the first element in an array that satisfies a provided tesing function

// use num3
const foundNumbers = num3.find(function (element) {
  return element > 5;
});

// const foundnumbers=num3.find(element=>elemet>5);

console.log(foundNumbers + "\n");

// how to use
// check if at least one element in an array satisfies a provided testing function

// use num3=   9, 8, 7, 7, 6, 5, 5, 4, 2, 1, 1

// const isGreaterThan5=num3.some(function(element){
//     return element>5;
// })

// another way
const isGreaterThan5 = num3.some((element) => element > 5);

console.log(isGreaterThan5 + "\n");

// how to use some
// if all element in an array satisfy a provided testing function
const isEvenNumber = num3.every((element) => element % 2 === 0);
console.log(isEvenNumber + "\n");

// how to use slice()
// extract a portion of an array and create a new array but its not including the end index

// [ 'kiwi', 'apple', 'grape', 'banana', 'cherry', 'orange' ]
const slicefruits = fruits.slice(2, 5);
console.log(slicefruits);

// how to use map()
// Create a new array
const doubleNumbers = num3.map((element) => element * 2);
console.log(num3);
console.log(doubleNumbers);

// how to use filter()
//  Creates a new array with all element that pass the test inplemented by the provided function
const isEvenNumbersByFilter = num3.filter((element) => element % 2 === 0);
console.log(isEvenNumbersByFilter);

// how to use reduce()
// reduce the element of an array to a single value
const sumOfReduce = num3.reduce((sum, num) => sum + num, 0);
console.log(sumOfReduce);

// how to use forEach
// Executes a provided function once for each array element
num3.forEach((num) => console.log(num - 2));
console.log();

// how to use lastIndexOf
// return the last index at which a given element can be found in the array
const fruits1 = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "cherry",
  "apple",
  "kiwi",
];
console.log(fruits1.lastIndexOf("apple"));

// how to use reverse()
// reverse the order of the element of an array in place
console.log(num3);
console.log(num3.reverse());

// how to use concat
// return a new array that includes element from the original array and additional element
const num4 = [1, 2, 3];
const num5 = [4, 5];
console.log(num4.concat(num5));

console.log(foundNumber);

function calcTip(num) {
  return num >= 50 && num <= 300 ? num * 0.15 : num * 0.2;
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

/*
// introduction to object
const arrayOfSang={
    firstName: 'Nguyen',
    lastName: 'Sang',
    age: new Date().getFullYear()-2004,
    job: 'Dev',
    friend: ['Son', 'Phuc', 'Quan'],
    myLover: 'Su'
};

console.log(arrayOfSang);

// Dot vs bracket notation
console.log(arrayOfSang.firstName);
console.log(arrayOfSang['myLover']);


const stringtemp='Name';
console.log(arrayOfSang['first'+stringtemp]);


console.log(arrayOfSang['last'+stringtemp]);

// const interestedIn = prompt("What do you want to know about Sang? Choose between firstName, lastName, job, myLover");

// if(interestedIn && arrayOfSang[interestedIn]) {
//     console.log(arrayOfSang[interestedIn]);
//     alert(`His ${interestedIn} is: `+arrayOfSang[interestedIn]);
// } else {
//     console.log('Invalid input or property not found!');
//     alert("Invalid input or property not found!");
// }


// add to arrayOFSang
arrayOfSang.location="Tien Giang";
arrayOfSang.fb="tuitenSoang";

console.log(arrayOfSang);

console.log(`${arrayOfSang.lastName} has ${arrayOfSang.friend.length} friend, and his lose friend is called ${arrayOfSang.friend[0]}`);


// Object Methods
const arrayOfSang = {
  firstName: "Nguyen",
  lastName: "Sang",
  birthDay: 2004,
  job: "Dev",
  friend: ["Son", "Phuc", "Quan"],
  myLover: "Su",
  hasDriverLicense: true,

  calc: function (birthDay) {
    return new Date().getFullYear() - birthDay;
  },

  calcthis: function () {
    return new Date().getFullYear() - this.birthDay;
  },
};

console.log(arrayOfSang.calc(2004));

console.log(arrayOfSang["calc"](2004));

console.log(arrayOfSang.calcthis());

console.log(
  `${arrayOfSang.lastName} is ${arrayOfSang.calcthis()} years old and ${
    arrayOfSang.job
  }, and he ${
    arrayOfSang.hasDriverLicense ? "has" : "hasn't"
  } a driver's license`,
);

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep} times`);
  rep++;
}

// ramdom number in the range from >=0 to <6
let dice = Math.random() * 6;
console.log(dice);

// control the dice
// interger in the range from >=1 <=6
for (let i = 0; i <= 10; i++) {
  let dice1 = Math.trunc(Math.random() * 6 + 1);
  console.log(`You rolled: ${dice1}`);
}

// Challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

bills.forEach(function (bill) {
  tips.push(calcTip(bill));
  totals.push(bill + calcTip(bill));
});

console.log(tips);
console.log(totals);

let sum = 0;
const calcAverge = () => {
  totals.reduce((sum, num) => sum + num, 0);
  return sum / totals.length();
};

console.log(calcAverge);





// return 
const temps = [3, -1, -5, 8, 'error', 15, -5];

const findMax = (arr, index = 0, currentMax = Number.MIN_SAFE_INTEGER) => {
    if (index === arr.length) {
        return currentMax;
    } else {
        if (typeof arr[index] === 'number') {
            currentMax = (currentMax < arr[index]) ? arr[index] : currentMax;
          }
          return findMax(arr, index + 1, currentMax);
    }
}

const findMin=(arr, index=0, currentMin=Number.MAX_SAFE_INTEGER) =>{
  if(index===arr.length) return currentMin;
  if(typeof arr[index]==='number') {
    currentMin=(currentMin>arr[index])?arr[index]:currentMin;
  }
  return findMin(arr, ++index, currentMin);
}

console.log(findMax(temps));
console.log(findMin(temps));

const tempprecedence=(arr)=> {
  return findMax(arr)-findMin(arr);
}


console.log(temps.max());
console.log(tempprecedence(temps));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// kham khao o web nay






const measureKelvin =()=> {
  const measurement ={
    type: "temp",
    unit: "celsius",
    value: parseFloat(prompt('Degrees celsius'))
  };
  return measurement.value+273;
};

alert(measureKelvin());



console.log(measureKelvin());
console.warn(measureKelvin());
console.error(measureKelvin());
console.table(measureKelvin());
// console.table(measurement);


const temperatureData = [
  {Stt: 1, location: 'Tokyo', celsius: 25, kelvin: 52},
  {Stt: 2, location: 'New York', celsius: 18, kelvin: 52 },
  {Stt: 3, location: 'London', celsius: 20, kelvin: 52 }
];

console.table(temperatureData);




// Challenge 
// Given an array of forecasted maximum temperatures, the thermometer 
// display a string with these temperature.

const printForecast=(arr)=> {
  let count=0;
  arr.forEach((num)=> console.log(`${num}*C in ${++count} ${(count===1)?'day':'days'}`));
};

const testcase1=[17, 21, 23];
const testcase2=[12, 5, -5, 0, 4];

printForecast(testcase1);
printForecast(testcase2);


console.log(me);
console.log(job);
console.log(year);

var me="Sang";
let job="tutor";
const year=2004;



if(!sang) deleteShopping();

var sang=10;

function deleteShopping() {
  console.log("hihih");
}






// try and catch
try {
  // Mã có thể gây ra ngoại lệ
  let result = 10 / 0; // Chia cho 0
  console.log(result); // Mã này sẽ không được thực thi nếu có ngoại lệ xảy ra trước đó
} catch (error) {
  // Xử lý ngoại lệ
  console.error("Đã xảy ra lỗi:", error.message);
}


try {
  (5).toUpperCase();
} 
catch(e) {
  console.log(`Oops, you can't uppercase a number. 
      Trying to do it resulted in the following`, e);
}




const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Fireze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegatable', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 24,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10,
      close: 20,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(info) {
    console.log(info);
  },

  infoOrder: function({starterIndex=0, mainIndex=0, time='22h30', address='Viet Nam'}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }
};


// const [first, ,second] = restaurant.categories;
// console.log(first, second);



// const [starter, main] = restaurant.order(0, 2);


// console.log(starter, main);


const {name, openingHours, categories} = restaurant;

console.log(name, openingHours, categories);

// set default value 

const {menu=[], starterMenu: starter= []} = restaurant;

console.log(menu, starter);

// mutating values

let a=82457234;
let b=34532;

const ojb ={a: 23, b: 45, c:34};

({a, b}=ojb);

console.log(a, b);


// nested objects

// truy caop vao thu sau
const {fri}=openingHours;
console.log(fri);

// access child elements

const {sat: {open, close}} =openingHours;

console.log(open, close);



restaurant.orderDelivery({
  time: '22',
  address: 'Chau Thanh Tien Giang',
  mainIndex: '2',
  starterIndex: '0',
})

restaurant.infoOrder({
  time: '22',
  address: 'Chau Thanh Tien Giang',
  mainIndex: '2',
  starterIndex: '0',
})

restaurant.infoOrder({
  time: '22',
  starterIndex: '0',
})




// the spread operator

const arr = [7, 8, 9];

const newArr = [1, 2, 3, ...arr];

console.log(newArr);

console.log(...newArr);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Fireze Italy",
  categories: ["Italian", "Pizzeria", "Vegatable", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 24,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10,
      close: 20,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (info) {
    console.log(info);
  },

  infoOrder: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "22h30",
    address = "Viet Nam",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
};

const newMenu = [...restaurant.mainMenu, "banh xeo", "hu tieu"];

console.log(newMenu);

// separates each characters in a string

const name = "Sang";

const eachCharacters = [...name];

console.log(eachCharacters);
console.log(...eachCharacters);


// Spread object
const newRestaurant={foundedIn: 1998, ...restaurant, founder: "Sang"};
console.log(newRestaurant);




const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Fireze Italy",
  categories: ["Italian", "Pizzeria", "Vegatable", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 24,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10,
      close: 20,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (info) {
    console.log(info);
  },

  infoOrder: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "22h30",
    address = "Viet Nam",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
};

// Rest Pattern 
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

console.log(a, b, ...others);

// some
const [str1, str2, ...otherFood] = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(str1, str2, '\n', ...otherFood);

// object 
const {fri, ...otherDays} = restaurant.openingHours;

console.log(otherDays);


// Functions
const add = (...numbers) => {
  let sum=0;
 numbers.forEach(element => {
  sum+=element;
 });   
 console.log(sum);
}

add(2, 3);
add(2, 3, 3, 5);
add(2, 3, 3, 2, 2);
add(2, 3, 4, 3345, 343);


// Short ciruiting  

// Trong JavaScript, toán tử || được gọi là toán tử "hoặc". Khi bạn sử 
// dụng toán tử này giữa hai giá trị, nó sẽ trả về giá trị đầu tiên có giá trị
//  "truthy" (không phải false, undefined, null, 0, NaN hoặc một chuỗi rỗng), 
//  hoặc giá trị cuối cùng nếu cả hai đều không "truthy".

console.log('Sang' || 3);
console.log(3 || 'Sang');

// do cai dau la null r nen chon cia sau

console.log(null || undefined);

console.log(undefined || 0 || '' || 'Sang');



// Trong JavaScript, toán tử && được gọi là toán tử "và". Khi bạn sử dụng 
// toán tử này giữa hai giá trị, nó sẽ trả về giá trị cuối cùng nếu cả
//  hai đều là "truthy", hoặc giá trị đầu tiên nếu một trong hai là "falsy".
console.log('-----------AND----------');
console.log('Sang' && 3);
console.log(3 && 'Sang');
console.log('' && 'Sang' && undefined);
console.log(undefined && 'Sang' && '');
// tra ve gia tri dau tien la falsy
console.log('Hello' && 23 && null && 'Sang');




// Trong JavaScript, toán tử ??, còn được gọi là Nullish Coalescing Operator,
//  được sử dụng để trả về giá trị bên phải nếu giá trị bên trái là null 
// hoặc undefined. Nó trả về giá trị bên trái nếu giá trị bên trái không phải
//  là null hoặc undefined.

console.log('-----------Nullish Coalescing operator----------');
console.log(undefined ?? 3425);
console.log(false ?? 33545);


// Logical Assignment Operators
const rest1 = {
  name: 'Sang',
  numGuests: 20,
}

const rest2 = {
  name: 'Han',
  address: 'Quan9',
}

rest1.numGuests ||= 23;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

rest1.secretNumber ??= 54;
rest2.secretNumber ??= 69;

console.log('-----------------');
console.log(rest1);
console.log(rest2);


rest1.secretNumber &&= 'Yeu Gia Han';
rest2.secretNumber &&= 'hihihih';

console.log('-----------------');
console.log(rest1);
console.log(rest2);




const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

console.log(players1Final);

const { odds: {team1, x: draw , team2}, } = game;

console.log(team1, draw, team2);


// 6
const printGoals= function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);





// Looping Arrays

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Fireze Italy",
  categories: ["Italian", "Pizzeria", "Vegatable", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 24,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10,
      close: 20,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (info) {
    console.log(info);
  },

  infoOrder: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "22h30",
    address = "Viet Nam",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const item of menu.entries()) {
  console.log(item);
}

console.log([...menu.entries()]);

// print look like the menu 
for(const item of menu.entries()) {
  console.log(`${item[0]+1}: ${item[1]}`);
}

console.log('\n' + "way two");
// way two

for(const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
}



// closure
// la mot ham co the ghi nho noi no duoc toa vao truy cap vao bien o ben ngoai pham vi cua no
function createCouter() {
  let counter=0;

  function increate() {
    return ++counter;
  }

  return increate;
}


const counter = createCouter();
// duoc tham chieu toi ham gan nhat
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// ung dung
function createLogger(namespace) {
  function logger(message) {
    console.log(`${namespace} ${message}`);
  }
  return logger;
}

const logger= createLogger('Complete!');


logger(`sending email`);
logger('hacker into NASA');

const logger1= createLogger('Error');


logger1(`Dam thang ngu Thua`);
logger1('Dam thang ngu Nhung');



// xu ly bat dong bo


// dong bo
// di theo thu tu nhat dinh

console.log(1);
console.log(2);
console.log(3);


// bat dong bo
// 1 bang mot milisecond
// 2000 bang 2 giay

// dong bo luon luon thuc hien truoc

let process1= setTimeout(function(){
  console.log(4);
}, 2000);

clearTimeout(process1);

console.log(5);

let process2= setTimeout(function(){
  console.log(6);
}, 2000);

let process3= setTimeout(function(){
  console.log(7);
}, 2000);


// set interval

const process4=setInterval(()=>{
  console.log("hello");
}, 2000);


clearInterval(process4);


// clock

console.log(new Date());

const clock=setInterval(()=>{
  const date=new Date();
  console.log(date.getHours(), date.getMinutes(), date.getSeconds());
}, 1000);


*/

// value types (primitive data types)
// string, number, boolean, bigint, symbol, underfined, null

// Reference types (non-primitive data types)
// object, array, function

let a= {
  name: 'Mercedes'
}

// tao mot bien a cap mot bo nho vao bo nho, sau do tra ve dia chi da luu va gan cho bien

let b=a;

// tao ra bien b tro bien b toi cung dia chi bo nho cua bien a

a.name='BMW';

console.log(b);


const student = {
  name: "tan sang",
  profile: {
    firstName: "tan",
    lastName: 'Sang',
    introduction: 'boy',
  }
}

// dau tien tao objec ten profile voi diaj chi bo nho 
// sau do gan no vao object


// tham tri
function sum(a, b) {
  a=0; 
  b=0;
  console.log(a, b);
}

const c=34;
const d=3533;

sum(c, d);

console.log(c, d);