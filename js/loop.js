// const readline = require('readline');
// // const readline = require('readline');: Khai báo một hằng số (const) có tên 
// // là readline và gán giá trị cho nó bằng một đối tượng được đưa vào từ module 'readline'.

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /* const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
//  Tạo một đối tượng readline.Interface bằng cách sử dụng phương thức createInterface của 
//  module readline. Đối tượng này được cấu hình để sử dụng process.stdin làm nguồn đầu vào 
//  và process.stdout làm đầu ra.*/
// r1.question('Enter the quantity of the array: ', (answer) => {
//     console.log('You have just entered: ' + answer);
//     r1.close;
// })
/* r1.question('Enter the quantity of the array: ', (answer)=> {
    console.log('You have just entered: ' + answer);
    r1.close;
 })  
 Sử dụng phương thức question của đối tượng r1 để đặt một câu hỏi cho người dùng. 
 Trong trường hợp này, câu hỏi là 'Enter the quantity of the array: '. 
 Hàm callback nhận giá trị người dùng nhập vào (được gọi là answer).
 Xuất ra console thông điệp cho biết giá trị mà người dùng vừa nhập.
 Đóng đối tượng readline.Interface bằng cách sử dụng phương thức close.
*/
var x=5;
for (let i = 0; i < x; i++) {
    process.stdout.write(i+ ' ');
    if(i===x-1) {
        process.stdout.write('\n');
    }
}

