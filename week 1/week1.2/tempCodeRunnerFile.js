
function arithmeticop(a, b, callback) {
    const ans = callback(a, b);
    return ans
}

function sum(a, b) {
    const ans = a + b;
    return ans;

}


const ansers = arithmeticop(30, 50, sum)
console.log(ansers)