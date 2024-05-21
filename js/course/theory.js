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


// tra ve cap khoa gia tri
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

const weekend=['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const openingHours ={
  [weekend[3]]: {
    open: 12,
    close: 24,
  },
  [weekend[4]]: {
    open: 11,
    close: 23,
  },
  [weekend[5]]: {
    open: 10,
    close: 20,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Fireze Italy",
  categories: ["Italian", "Pizzeria", "Vegatable", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],


  // Enhanced Object Literals
  openingHours,



  // fix syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(info) {
    console.log(info);
  },

  infoOrder({
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


// Optional Chaining 

// if nos khong co thi se la undefined
console.log(restaurant.openingHours.mon?.open);


// practical examples
const days=['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

for(const day of days) {
  // console.log(day);
  const open= restaurant.openingHours[day]?.open;
  console.log(`On ${day}, We open at ${open}.`);
}


console.log(restaurant.order?.(0, 2) ?? "Method does not exit");

console.log(restaurant.orderDelivery?.(0, 2) ?? "Method does not exit");

const users=[{
  name: "Sang",
  email: 'sdfhas@gamil.com',
}]

console.log(users[0]?.name  ?? "user array empty!");


// Property Name
const properties=Object.keys(openingHours);

console.log(properties);

console.log(`We are open on ${properties.length} days`);

// Property Value 
const values=Object.values(openingHours);
console.log(values);


// tra ve thu tu voi mot object
const entries=Object.entries(openingHours);
console.log(entries);


for(const [key, {open, close}] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}



// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,



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

  for(const [id, name] of game.scored.entries()) {
    console.log(`Goal ${id+1}: ${name}`);
  }


const odds = Object.values(game.odds);
let average=0;
for(const it of odds) average+=it
console.log(average/odds.length); 

console.log(game[0]);


// 3
for(const [team, odd] of Object.values(game.odds)) {
  console.log(game[team]);
}





// Set

const ordersSet=new Set([
    'Pizza',
    'Pasta',
    'Pizza',
    'Risotto',
    'Pasta'
]); 


console.log(ordersSet);

console.log(new Set('Sang'));

// Set(3) { 'Pizza', 'Pasta', 'Risotto' }
// Set(4) { 'S', 'a', 'n', 'g' }



// size 
console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

console.log(ordersSet.has('Bread'));

// add value

ordersSet.add("Rice")
ordersSet.add("Rice")
ordersSet.add("Rice")
 
console.log(ordersSet);

ordersSet.delete('Pizza');

console.log(ordersSet);


// delete all value
// ordersSet.clear();

// console.log(ordersSet);

for(const order of ordersSet) console.log(order);

const staff=['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];

const staffUnique=new Set(staff);

console.log(staffUnique);








// Map

const rest=new Map();
rest.set("Name", "Tan Sang");
rest.set("HomeTown", "Tien Giang");

rest
  .set('wakup', 9)
  .set(2, "I am Soang hai ka tu")
  .set("Go To Bed", 1)
  .set('School', "Ptit")
  .set(true, "I get up")
  .set(false, "I am sleeping")

console.log(rest.get("wakup"));

const time=21;
console.log(rest.get(time > rest.get('wakup') && time > rest.get('Go To Bed')));


// method
console.log(rest.has("Sang"));

// delete an element 
console.log(rest);
rest.delete(2);
console.log(rest);


// size of map
console.log(rest.size);

// clear map
rest.clear();

// khi tao arr func hay ob thi nho no cung chunmg bo nho

const arr=[1, 2];
rest.set(arr, "Test");
rest.set([1, 2], "Test");
rest.set(document.querySelector(".TitleOfWeb"), "Heading");

console.log(rest.get(arr));
console.log(rest.get([1, 2]));

console.log(rest);


// Map

// Main restaurant 
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

const question=new Map([
  ['Question', "What is the best programing language in the world?"],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'TypeScript'],
  ['Correct', 3],
  [true, "Correct ⭐"],
  [false, "Try again⭕"]
])

console.log(question);


// const hoursMap=new Map(Object.entries(restaurant.openingHours))
// tao map
// console.log(hoursMap);


// in du lieu duoi dang mang
// console.log(Object.entries(restaurant.openingHours));


const myAnswer=4;

console.log(question.get("Question"));
for(const [key, value] of question) {
  (typeof key ==='number') ? console.log(`Answer ${key}: ${value}`) : '';
}
console.log(`Your answer: ${myAnswer}`);
console.log(question.get((myAnswer===3)));

// convert map to arr
console.log(...question);

console.log(question);

console.log(question.entries());

console.log(...question.keys());

console.log(...question.values());



// So sanh object and map

const taskObject={
  task: "Code",
  date: "today",
  repeat: true
}

const taskMap= new Map([
  ["task", "Code"],
  ['Date', "today"],
  [true, "repeat"]
])


// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// ⚽
// [FIRST HALF] 17:
// GOAL
// GOOD LUCK 😀


const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);


const events =[...new Set(gameEvents.values())]

console.log(events);

gameEvents.delete(64);

console.log(gameEvents);


for(const [time, event] of gameEvents.entries()) {
  (time<45) ? console.log(`[FIRST HALF] ${time}: ${event}`) : console.log(`[SECOND HALF] ${time}: ${event}`)
}



// Working with Strings

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log('A320'[0]);

console.log('A320'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// if not found return -1
console.log(airline.indexOf('portugal'));
console.log(airline.indexOf('Portugal'));

// The slice() method in JavaScript is used to extract a section of a string without modifying the original string. It takes two parameters: the starting index (inclusive), and the ending index (exclusive). If the ending index is not provided, it extracts till the end of the string.

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// -1 = the last character of string
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  const b = seat.slice(-1);
  (b === 'B' || b === 'E' ) ? console.log('You got the middle seat') : console.log('You got lucky');
}


checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Sang'));
console.log(typeof new String('Sang'));

// Kết quả đầu tiên sẽ in ra [String: 'Sang'], là một cách biểu diễn của đối tượng chuỗi được tạo ra bằng cách sử dụng constructor String.

// Kết quả thứ hai sẽ in ra object, cho biết kiểu dữ liệu của đối tượng được tạo ra là một đối tượng.


console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// format name
const myName='nguyen luu tan sang';
const temp =myName.split(' '); // tach chuoi thanh cac chu

const capitalizeName=temp.map(temp=>temp[0].toUpperCase() + temp.slice(1))

const nameCorrect=capitalizeName.join(' ');
console.log(nameCorrect);

// format email
const email1='   shajfdhjas@gmail.com';
const email2='hihih@gmail.com       ';

const formatEmail=(email) =>{
  return email.trim().toLowerCase();
}

console.log(formatEmail(email1));
console.log(formatEmail(email2));


// replaceing
const priceVN='670,000,000VND';
const priceUS=priceVN.replace('VND', '$').replaceAll(',', '.');
console.log(priceUS);

// notes: replace only replace the first math, so that we need to use replaceAll


// booleans
console.log(airline.includes('Sang'));

console.log(airline.startsWith('Sang'));
console.log(airline.startsWith('TAP'));

// split
console.log('sang+luu+tan+sang'.split('+'));

const [firstName, lastName]='Nguyen Sang'.split(' ');

const newName1=['Mr.', firstName, lastName.toUpperCase()];

console.log(newName1.join(' '));
// Phương thức join() trong JavaScript được sử dụng để nối tất cả các phần tử của một mảng thành một chuỗi. Các phần tử sẽ được phân cách bằng một ký tự hoặc chuỗi bạn chỉ định.

const capitalizeName1= (name) => {
  const names=name.split(' ');
  console.log((names.map(temp=> temp.replace(temp[0], temp[0].toUpperCase()))).join(' '));
}

capitalizeName1('nguyen sang'); 
capitalizeName1('nguyen luu tan sang');


// Padding
const message='Go to gate 23!';
// console.log(message.length); //14
console.log(message.padStart(30, "+").padEnd(40, "+"));
console.log('Sang'.padStart(30, "+").padEnd(40, "+"));

// The padStart() method is called on the message string with a total length of 30 and a padding string of "+". The length of the message string is 15 characters, so the padding string "+" will be repeated 15 times to reach a total length of 30 characters.

const markCreditCard = (num) =>{
  const last=String(num).slice(-4);
  return last.padStart(String(num).length, '*')
} 

console.log(markCreditCard('123456789'));
console.log(markCreditCard(123456789123456789));
console.log(markCreditCard(346545334523456789));


// Repeat
const message2='Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));


const rocketsInShy =(n) => {
  console.log(`${'🚀'.repeat(n)}`);
}

rocketsInShy(10);

// more information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 



// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// 
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase✅
// firstName
// ✅✅
// someVariable
// calculateAge✅✅✅
// ✅✅✅✅
// delayedDeparture✅✅✅✅✅

// Hints:
// §Remember which character defines a new line in the textarea 😉
// §The solution only needs to work for a variable made out of 2 words, like a_b
// §Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// §
// This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


const convertToCamelCase = (stringg) => {
  const string1 = stringg.split('\n');
  string1.map((wordss, index)=>{
    const words= wordss.split('_');
    const result= words[0][0].toLowerCase() +words[0].slice(1) + words.slice(1).map(word=>word[0].toUpperCase() + word.slice(1).toLowerCase()).join('') + '✅'.repeat(index+1);
    console.log(result);
  })
}

document.querySelector('textarea').addEventListener("keypress", (event)=> {
  // Kiểm tra xem phím đã được nhấn có phải là Enter không
  if (event.keyCode === 13) {
      // Ngăn chặn hành động mặc định của phím Enter (tránh tạo dòng mới trong textarea)
      // event.preventDefault();

      const text=document.querySelector('textarea').value;

      convertToCamelCase(text);

      document.querySelector('textarea').value='';
  }
}); 



// String Methods Practice
const flights ="_Delayed_Departure;fao93766109;txl2133758440;11:25+Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flight=flights.split('+');
flight.forEach((temp)=> {
  const [type, from, to, time] = temp.split(';');
  const from1=from.slice(0, 3).toUpperCase();
  const to1=to.slice(0, 3).toUpperCase();
  const time1=time.replace(':', 'h');
  const result= `${(type.startsWith('_Delayed'))? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${from1} to ${to1} (${time1})`;
  console.log(result.padStart(50, ' '));
})


///////////////////////////////////////////////////////////////////////////////////////
// a closer look at functions
// default parameters   

const bookings = [];

const createBooking =(flightNum, numPassengers=1, price=199)=> {
  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

console.log(bookings);


// How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const sang= {
  name: 'Nguyen Sang',
  passport: 3434343434,
}

const CheckIn=(flightNum, passenger)=> {
  flightNum='LH999';
  passenger.name='Mr.' + passenger.name;

  if(passenger.passport === 3434343434) {
    console.log('Check in');
  } else {
    console.log('Wrong passport');
  }
}

// CheckIn(flight, sang);
// console.log(flight);
// console.log(sang);

const newPassport= function(person) {
  person.passport=Math.trunc(Math.random()*1000000000000);
}

newPassport(sang);
CheckIn(flight, sang);
console.log(sang); 




// Higher-order function (Hàm bậc cao) trong lập trình là một hàm mà thực hiện ít nhất một trong hai việc sau:

// Nhận một hoặc nhiều hàm như là tham số đầu vào.
// Trả về một hàm như kết quả đầu ra.

// Functions Accepting Callback Functions
const oneWord = function (str) {
  // find all the space and replace it with nothing then lower case
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const greet = (meeting) => {
  return (name) => {
    console.log(`${meeting} ${name}`);
  }
}

const hey = greet('Hey');
hey('Sang');
hey('Han');

greet('Hello')('Sang');

const greetHello = greeting => name => console.log(`${greeting} ${name}`);
greetHello('Hello')('Sang');



// The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(name, flightNum) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }
}

lufthansa.book('Sang', 239);  
lufthansa.book('Han', 239);
console.log(lufthansa);

const book = lufthansa.book;
// does not work
// book('Tan', 239);

book.call(lufthansa, 'Tan', 239);
console.log(lufthansa);

// Đoạn mã JavaScript này sử dụng phương thức call để gọi hàm book với một ngữ cảnh cụ thể (lufthansa) và hai tham số ('Tan', 239). Điều này cho phép chúng ta gọi hàm book như một phương thức của đối tượng lufthansa, thay vì gọi nó như một hàm độc lập.

// apply method
const flightData = ['Su', 149];
book.apply(lufthansa, flightData);
console.log(lufthansa);

// call: Các đối số được truyền vào hàm một cách riêng lẻ, như các đối số bình thường của hàm. Ví dụ: func.call(thisArg, arg1, arg2, ...)

// apply: Các đối số được truyền vào hàm dưới dạng một mảng. Ví dụ: func.apply(thisArg, [arg1, arg2, ...])

// The bind Method
const bookEW = book.bind(lufthansa);
bookEW('Putin', 843);
console.log(lufthansa);
// Phương thức bind() trong JavaScript tạo ra một hàm mới, mà khi được gọi, có giá trị this được đặt thành giá trị được cung cấp, với một chuỗi đối số tiếp theo được đặt thành các đối số của hàm mới.

// Cú pháp: func.bind(thisArg[, arg1[, arg2[, ...]]])

// Trong đó:

// thisArg: Giá trị this được cung cấp cho hàm khi chạy.
// arg1, arg2, ...: Đối số được truyền vào hàm khi gọi hàm mới.


const bookEW23 = book.bind(lufthansa, 'Sangnekk');
bookEW23(214);
bookEW23(546);

lufthansa.place=300;
lufthansa.buyFlight=function() {
  console.log(this);

  ++this.place;
  console.log(lufthansa.place);
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyFlight.bind(lufthansa));
// Trong trường hợp của bạn, lufthansa.buyFlight.bind(lufthansa) tạo ra một hàm mới mà khi được gọi, giá trị this trong hàm buyFlight sẽ là lufthansa.

// practical example
const addTax= (rate, value) => value + value*rate;

const addVAT= addTax.bind(null, 0.31);
console.log(addVAT(100));
console.log(addVAT(23));

const calculateTax= (rate) => {
  return (value) => {
    return value +value*rate;
  }
}

console.log(calculateTax(0.23)(100));




// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1.
// Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.
// Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course
// 20Test data for bonus:
// §Data 1: [5, 2, 3]
// §Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),


  // quick function call
  registerNewAnswer() {
    const inputUser = prompt(`${poll.question}\n${poll.options.join('\n')}`);
    const choice = Number(inputUser);
    if(choice>=0 && choice <=this.options.length-1 && typeof inputUser === 'number') {
      this.answers[choice]++;
      this.displayResults(); // default is array so we dont need to declare it
      this.displayResults('string');//
    } else {
      alert("Wrong option number. Please try again.");
    }
  },

displayResults(type='array') {
    if(type=='array') {
      console.log(this.answers);
    } else if(type=='string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [5, 2, 3]}, 'string');

document.querySelector(".answer").addEventListener('click', poll.registerNewAnswer.bind(poll)); 


// Immediately Invoked Function Expressions (IIFE)
let isPublic=46;

(()=>{
  console.log('He loo cac ban ');
  const isPrivate=23; // it is not accessable from outside
  console.log(isPublic);
})();


// closure
// la mot ham co the ghi nho noi no duoc toa vao truy cap vao bien o ben ngoai pham vi cua no
const counter = () => {
  let cnt=0;
  return ()=> {
    cnt++;
    console.log(cnt);
  }
}

// thì hàm sẽ được gọi nhưng giá trị trả về sẽ không được lưu lại, do đó bạn không thể gọi nó 
// lại sau này
// counter();
// counter();
// counter();

const count=counter();
count();
count();
count();

console.dir(count);

const dem = counter();
dem();
dem();


// var is a global scope
  // for(var i=0; i<3; i++) {
  //   const log = () => {
  //     console.log(i);
  //   }
  //   setTimeout(log, 100);
  // }

  // for(let i=0; i<3; i++) {
  //   const log = () => {
  //     console.log(i);
  //   }
  //   setTimeout(log, 100);
  // }

// example

let b;
let f;

const g=() => {
  const a=23;
  f=() => {
    console.log(a*2);
  };
}

const h=() => {
  const b=777;
  f=() => {
    console.log(b*2);
  }
}

g(); 
f();

h();
f();


// example  2
const boardPassenger = (n, wait) => {
  const perGroup = n/3;
  
  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  });
  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassenger(180, 3);


// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';

document.querySelector('body').addEventListener('click', () => {
  header.style.color = 'blue';
});
})();

*/ 


// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////


const display = (movements) => {
// inner html 
// Bảo mật: Tránh chèn trực tiếp dữ liệu không tin cậy vào innerHTML vì có thể dẫn đến lỗ hổng bảo mật XSS (Cross-Site Scripting). Đảm bảo rằng dữ liệu được kiểm tra và xử lý an toàn trước khi chèn.

// Hiệu suất: Khi thay đổi innerHTML, trình duyệt sẽ phân tích lại toàn bộ nội dung HTML bên trong phần tử, điều này có thể ảnh hưởng đến hiệu suất nếu bạn thay đổi nội dung lớn hoặc thực hiện thay đổi thường xuyên.

// Sự kiện bị mất: Khi thay đổi nội dung của một phần tử bằng innerHTML, tất cả các sự kiện gắn với các phần tử con của nó sẽ bị mất.

  containerMovements.innerHTML='';

  movements.forEach((mov, i)=> {
    const type = mov > 0? 'deposit' : 'withdrawal';
    const html= `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} deposit</div>
    <div class="movements__value">${mov}€</div>
  </div>`

  containerMovements.insertAdjacentHTML("beforeend", html)
  })
}

display(account1.movements);

const calcBalance = (mov)=> {
  const balance= mov.reduce((accumulator, current)=> {return accumulator + current}, 0);
  labelBalance.textContent= `${balance}€`;
}

calcBalance(account1.movements);

const createUserNames = (accs)=> {
  accs.forEach(acc=> {
    acc.username=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  })
}
createUserNames(accounts);


const calcDisplaySummary = (movs)=> {
  const incomes= movs.filter(mov=> mov>0).reduce((acc, mov)=> acc+mov, 0);
  const outcomes=movs.filter(mov=> mov<0).reduce((acc, mov)=> acc+mov, 0);
  const interest=movs.filter(mov=> return mov>=1).map(mov=>mov*1.2/100).reduce((acc, mov)=> acc+mov, 0);


  labelSumIn.textContent=`${incomes}€`;
  labelSumOut.textContent=`${Math.abs(outcomes)}€`;
  labelSumInterest.textContent=`${interest}€`;
}
calcDisplaySummary(account1.movements);



// console.log(accounts);

/////////////////////////////////////////////////
// LECTURES




/////////////////////////////////////////////////


let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

// similar to string, arrays also have some methods

// slice method: if no argument, it will return a shallow copy of the array
// console.log(arr.slice(2));
// // lay vi tri thu 3 nhung khong lay thu 4
// console.log(arr.slice(3, 4));
// console.log(arr.slice(-3));
// console.log(arr.slice(1, -2));

// splie methods: remove elements from array
// console.log(arr.splice(2)); // remove all elements from index 2
// console.log(...arr);
// console.log(arr.splice(-1));


// reverse method: reverse the array
// let arr1=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1.reverse());

// // concat method: merge two arrays
// const arr2=[a, b, c, d, e];
// const letters=arr1.concat(arr2);
// console.log(arr1.concat(arr2));




// // JOIN 
// console.log(letters.join('-'));

// Câu console.log(letters.join('-')); trong JavaScript được sử dụng để nối các phần tử của một mảng thành một chuỗi, sử dụng một chuỗi ngăn cách được chỉ định và sau đó in ra chuỗi kết quả ra console.


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [i, movement] of movements.entries()) {
//   if(movement>0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("============FOREACH================");
// forEach method: loop through the array
// movements.forEach((movement, i)=>{
//   if(movement>0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// })


// forEach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach((value, key, map)=>{
//   console.log(`${key}: ${value}`);
// })

const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach((value, key, set)=> {
//   console.log(`${key}: ${value}`);
// })



////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog
// 🐶 number 1 an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// ")
// 4. Run the function for both test datasets
// Test data:
// §Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// §Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

// const checkDogs = (dogsJulia, dogsKate) => {
//   const combine= dogsKate.concat(dogsJulia.slice(1, dogsJulia.length-1));
//   combine.forEach((value, i)=> {
//     (value >= 3) ? console.log(`Dog 🐶 number ${i+1} an adult, and is ${value} years old`) : console.log(`Dog number ${i+1} is still a puppy`);
//   })
//   console.log(combine);
// }



// const ju1=[3, 5, 2, 12, 7];
// const kate1=[4, 1, 15, 8, 3];
// const ju2=[9, 16, 6, 8, 3];
// const kate2=[10, 5, 6, 1, 4];

// checkDogs(ju1, kate1);


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// map method
const eurToUsd=1.1;
 
const movementsUSD = movements.map((mov) => mov*eurToUsd);
// console.log(movements);


const user = 'Steven Thomas Williams';
const username = user.toLowerCase().split(" ").map((name) => {
  return name[0];
}).join('');
// console.log(username);



// filter method 
const deposits = movements.filter(mov=> {
  return mov > 0;
})

// console.log(deposits);

const withdrawal = movements.filter(mov=> {
  return mov < 0;
})

// console.log(withdrawal);


/// reduce method
const balance = movements.reduce((accumulator, cur, i, arr) => {
  // console.log(`iteration ${i}: ${accumulator}`);
  return accumulator + cur;
}, 0)

// console.log(balance);


// maxium value 
const findMax = movements.reduce((accumulator, current)=> {
  return (accumulator>current)?accumulator:current;
}, movements[0]);



// console.log(movements);
// console.log(findMax);


// challenge two 
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// §Data 1: [5, 2, 4, 1, 15, 8, 3]
// §Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

const calcAverageHumanAge = (ages)=> {
  const human = ages.map(age=> {
    return (age>2) ? age*4+16 : age*2
  }).filter(age=> {
    return age>=18
  })
  const adults= human.reduce((accumulator, current)=> {
    return accumulator+current
  }, 0);
  console.log(adults/human.length);
}

const dogsKate=[5, 2, 4, 1, 15, 8, 3]
const dogsJulia=[16, 6, 10, 5, 6, 1, 4]
const combine= dogsJulia.concat(dogsKate);
calcAverageHumanAge(dogsKate);
