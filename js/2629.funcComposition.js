
var compose = function(functions) {

    return function(x){
        
        if(!functions.length){
            return x;
        }
        
        let current = x;
        for (let i = functions.length - 1; 0 <= i; i--) {
            current = functions[i](current)
            console.log(current)
        }

        return current;
    }
}

var fns = [x => 10 * x, x => 10 * x, x => 10 * x]

var composed = compose(fns);

composed(1)

