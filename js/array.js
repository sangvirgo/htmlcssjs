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

//  function
function food(pizza) {
    console.log("I love "+ pizza);
};

food("Sang");

function order(quantily, price ) {
    console.log("I have just ordered " + quantily+" slices");
    console.log("Each slice cost: "+ price+"$");
    console.log("The total of my bill was " + quantily*price+" dollars");
}

order(15, 45);

