
const counter2 = function(init){
    let value = init;
    return {
        val: init,
        increment: () =>{
            value++
            return value
        },
        decrement: () => {
            value++
            console.log(value)
            return value
        },
        reset: () => {
            value = init
            return value
        }
    }
}

var obj = counter2(5)
console.log(obj.increment())
console.log(obj.increment())
console.log(obj.increment())
console.log(obj.increment())
console.log(obj.reset())
