//closures
function closure() {
    let a = 100
    return function (a: number) {
        return a++
    }
}


closure()
closure()