function checkPrime(num) {
    if(num < 2) return false;
    if (num < 4) return true;
    for (let i = 2; i <= Math.sqrt(num) ; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
let arr = [1,5,6,23,8,47,10,3];
let primeArr = [];
for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i]) === true){
        primeArr.push(arr[i]);
    }
}
primeArr.sort(function(a, b) {
    return a - b;
});
document.write("Mảng bản đầu là "+arr +"<br>")
document.write("Mảng các số nguyên tố đã được sắp xếp tăng dần : " +primeArr);

