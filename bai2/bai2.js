let count = 0;

function countUpper(check) {
    for (let i = 0; i < check.length; i++) {
        if (check[i] === check[i].toUpperCase()) {
            count++;
        }
    }
    if (count === 0) {
        document.write("The Strings is not contain upper char ");
    }
}

countUpper("abcdEF");
document.write("Số kí tự in hoa trong mảng là " + count);

