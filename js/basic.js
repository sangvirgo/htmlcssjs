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