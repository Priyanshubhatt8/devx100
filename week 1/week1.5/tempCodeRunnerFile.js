
async function fetchdata(da) {
    fs.readFile("readme.txt", "utf-8", function (err, data) {
        da(data)
    })
}
function ondone(ok) {
    console.log(ok)
}

fetchdata(ondone)