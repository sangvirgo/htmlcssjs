console.log("Hello, World!");
console.log("his iu Su");

var string1="blue";
var string2="red";
var num1=4;
var num2=7;
var bool1=true;
var bool2=false;
//  cong cac chuoi bool so
console.log(string1+string2);
console.log(num1+num2);
console.log(num1+bool1);
console.log(string1+bool2);

var try1=string1.length;
// truy cap vao cac chuoi
console.log(try1);
console.log(string1[0]);

// Tìm chuỗi
var string3 = "i love Gia Han";

// Sử dụng hàm indexOf để lấy vị trí xuất hiện đầu tiên của chuỗi "Gia" trong chuỗi "i love Gia Han"
var try2 = string3.indexOf("Gia");

// In ra vị trí xuất hiện đầu tiên của chuỗi "Gia"
// Neu khong tim thay se tra ve ket qua la -1
console.log(try2);

// slice (cat chuoi)
// lay chuoi i love Gia Han
var try3=string3.slice(0, 6);
// se khong lay ki tu thu 6 ma chi lay toi ki tu thu 5
console.log(try3);

// replace
var string4 = "car, bus, plane, train";

// Thay thế chuỗi "bus" bằng "Sang"
var try4 = string4.replace("bus", "Sang");
console.log(try4); // Kết quả: "car, Sang, plane, train"
//  chuoi nay se khong thay doi vi khong co chuoi sang trong chuoi 4
var try5=string4.replace("sang", "Nam");
console.log(try5);

// concat noi chuoi
// var string1="blue";
// var string2="red";
// cach mot
console.log(string1+" "+string2);
// cach 2
var try6=string1.concat(", ", string3, "!!!!!");
console.log(try6);
// blue, i love Gia Han!!!!!

// chuyen in hoa in thuong
var string5="Hello";
console.log(string5.toUpperCase());
// HELLO
console.log(string5.toLowerCase());
// hello

// split chia cac mang thanh cac mang con
var string6="apple, plum, peach, banana, orange";
var try7=string6.split(", ");
console.log(try7);
console.log("Loại trái cây thứ 2: " + try7[1]);
//  [ 'apple', 'plum', 'peach', 'banana', 'orange' ]

// tra ve ki tu or unicode 
// string 5="Hello"
console.log(string5.charAt(1));
// e
console.log(string5.charCodeAt(1));

// loaij bo khoang trang o dau dong va cuoi dong
var string7="     Hello     World        ";
var try8=string7.trim();
console.log(try8);


// startsWith() và endsWith(): Kiểm tra xem chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi con cụ thể hay không.
var string8="Hello Gia Han iu dau";
console.log(string8.startsWith("Hello"));
// result: true
console.log(string8.endsWith("Sang"));
// false


// includes(): Kiểm tra xem chuỗi có chứa một chuỗi con cụ thể hay không.
console.log(string8.includes("Gia"));
console.log(string8.includes("Su"));
// true
// false


// substring(): Trả về một phần của chuỗi, giống như slice() nhưng không chấp nhận giá trị âm.


// repeat(): Lặp lại chuỗi một số lần cho trước.
var string9="Sang";
console.log(string9.repeat(3));
// lap lai 3l
// SangSangSang

// padStart() và padEnd(): Điền ký tự vào đầu hoặc cuối chuỗi để đạt được chiều dài mong muốn.
var string10="Sang";
console.log(string10.padStart(10, " "));
// sau
console.log(string10.padEnd(10, " ")+"Hi!!");
//       Sang
// Sang      Hi!!