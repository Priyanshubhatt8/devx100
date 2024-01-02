
function jimmy() {
    return new Promise(function (resolve) {

        for (let i = 0; i < 30; i++) {

            setTimeout(function () {
                resolve(i)
            }, 1000)
        }

    })

}
const value = jimmy();
value.then(function (data) {
    console.log(data)
})