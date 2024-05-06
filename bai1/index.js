let num;
do {
    num = +prompt("Nhập số lượng phần tử của mảng (n <= 20):");
} while (isNaN(num) || num <=0 || num > 20);
let arr = [];
for (let i = 0; i < num; i++) {
    let number;
    do {
        number = +prompt("Nhập phần tử thứ " +(i +1) +" của mảng")
    }while (isNaN(number));
    arr.push(number)
}
let sumEven = 0 ;
let sumOld = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 ){
        sumEven += arr[i];
    }else {
        sumOld += arr[i];
    }

}
let sum = sumEven - sumOld;
document.write("Kết quả của tổng các số chẵn - tổng các số lẻ =  " +sum)
