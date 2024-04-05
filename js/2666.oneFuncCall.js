
var once = function(fn) {
    let chamadas = 0;

    return function(...args){
        
        if(chamadas == 0){
            ++chamadas
            return fn(...args)
        }
        return undefined
    
    }
};

var oneCall = once((a, b, c) => (a + b + c))

console.log(oneCall(1,2,3))
console.log(oneCall(1,2,3))
