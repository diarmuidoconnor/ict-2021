// Array declaration and referencing
let nums = [12, 22, 5, 28] ;
let first = nums[0] ;  // Subscript notation
let second = nums[1] ;
console.log(second) ; //  22

let stuff = [ 12, 'web', {a : 1, b : 2},  null ] ;
console.log(stuff[1]) ;  // 'web'
console.log(stuff[2].b) ; //  2

// Manipulating arrays - push/pop, shift/unshift
nums.push(10) ;             // add to tail of array
console.log('After push:\t\t ' + nums) ;  
let element = nums.pop() ;  // remove from tail of array
console.log('After pop:\t\t ' + nums)
console.log('Removed: ' + element) ;  
nums.unshift(3) ;           // add to head 
console.log('After unsfift:\t\t' + nums) ;  element = nums.shift() ;   // remove from head
console.log('After shift:\t\t' + nums) ;  
console.log('Removed: ' + element) ;  

