//closures
function closure() {
    let a = 100
    return function () {
        return a++
    }
}

const makeClosure = closure()
console.log(makeClosure())
console.log(makeClosure())