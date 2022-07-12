/* 
    ASSUMING
        - Lương/ngày: 100.000 (VNĐ)
        - Ngày làm: 26

    INPUT
        - Tạo biến payForDay gán giá trị 100000
        - Tạo biến workDay gán giá trị 26
    
    HANDLE
        - Tạo biến payRoll gán giá trị tích của payForDay*workDay

    OUTPUT
        - Hiển thị kết quả payRoll
*/

var payForDay = 100000;
var workDay = 26;
var payRoll;

payRoll = payForDay * workDay;

console.log(
   "Bảng lương " +
      workDay +
      " ngày công: " +
      payRoll.toLocaleString("vi-VN", {
         style: "currency",
         currency: "VND",
      })
);

/* 
    ASSUMING
        - 5 số thực: 20, 1/2, -4, 50, 99

    INPUT
        - Tạo biến realNumberX với x chạy từ 1-5 gán giá trị lần lượt 20, 1/2, -4, 50, 99
        - Tạo biến total gán tổng giá trị của các số thực
    
    HANDLE
        - Tạo biến mean gán giá trị trung bình của 5 số thực
        - Formula: Tổng giá trị các số thực/Số lượng số thực

    OUTPUT
        - Hiển thị kết quả mean
*/

var realNumber1 = 20;
var realNumber2 = 1 / 2;
var realNumber3 = -4;
var realNumber4 = 50;
var realNumber5 = 99;
var total, mean;

total = realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5;

mean = total / 5;

console.log("Giá trị trung bình của 5 só thực: " + mean);

/* 
    ASSUMING
        - Giá USD: 23.500 VND | 1$ USD = 23.500 VND
        - Số lượng USD quy đổi: 2$

    INPUT
        - Tạo biến exchangeRate gán giá trị 23.500
        - Tạo biến usdCurrency gán giá trị 2
    
    HANDLE
        - Tạo biến result gán giá trị quy đổi sang VND
        - Formula: VND = số lượng USD quy đổi * tỉ giá

    OUTPUT
        - Hiển thị kết quả result
*/

var exchangeRate = 23500;
var usdCurrency = 2;
var result;

result = usdCurrency * exchangeRate;

console.log(
   "Số tiền thực nhận: " +
      result.toLocaleString("vi-VN", {
         style: "currency",
         currency: "VND",
      })
);

/* 
    ASSUMING
        - Chiều dài: 20
        - Chiều rộng: 4

    INPUT
        - Tạo biến length gán giá trị 20
        - Tạo biến width gán giá trị 4
    
    HANDLE
        - Tạo biến acreage gán giá trị diện tích
        - Tạo biến perimeter gán giá trị chu vi
        - Formula: 
            + Chu vi: (length + width) * 2
            + Diện tích: length * 2

    OUTPUT
        - Hiển thị kết quả acreage, perimeter
*/

var length = 20;
var width = 4;
var acreage, perimeter;

perimeter = (length + width) * 2;
acreage = length * width;

console.log("Diện tích: " + acreage, "Chu vi: " + perimeter);

/* 
    ASSUMING
        - Số có 2 chữ số n = 12 | 12, 44, 83
        - Ký số của n | 1 + 2

    INPUT
        - Tạo biến twoDigitNumbers gán giá trị 12
    
    HANDLE
        - Tạo biến dozens = Math.floor(twoDigitNumbers / 10)
        - Tạo biến beforeDozens = Math.floor(twoDigitNumbers % 10)
        - Tạo biến total gán giá trị tổn 2 ký số của số có 2 chữ số
        - Formula: 
            + Tổng 2 ký số của số có 2 chữ số: hàng chục + hàng đơn vị

    OUTPUT
        - Hiển thị kết quả total
*/

var twoDigitNumbers = 12;
var dozens, beforeDozens, total;

dozens = Math.floor(twoDigitNumbers / 10);
beforeDozens = Math.floor(twoDigitNumbers % 10);

total = dozens + beforeDozens;

console.log("Tổng 2 ký số của số " + twoDigitNumbers + " : " + total);
