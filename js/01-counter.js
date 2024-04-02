var createCounter = function(n) {
    return function(values){
        return n++
    }
}

const func = createCounter(10);

console.log(func(["call", "call", "call"]))

