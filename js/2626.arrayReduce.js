var reduce = function(nums, fn, init){
    if (!nums.length) {
        return init;
    }
    
    let current = init;
    for (let i = 0; i < nums.length; i++) {
        current = fn(current, nums[i])
    }
    return current;
}

const func = function(accum, curr){
    return accum + curr
}


console.log(reduce([1,2,3,4], func, 0))