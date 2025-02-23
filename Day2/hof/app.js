//case1
// function a(b){
//     console.log("i am fucnction a");
//     b();
// }
// function b(){
//     console.log("I am inside function b");

// }
// console.log(a(b));

//case2
function a(){
    console.log("i am fucnction a");

    function b(){
        console.log("I am inside function b");
    
    }
    return b;
    
}
let ans=a();
console.log(ans());
