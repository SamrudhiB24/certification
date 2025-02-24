//sync
// console.log("first");
// console.log("second");
// console.log("third");

//async
// console.log("first");
// setTimeout(function(){
//     console.log("it will after 2sec")
// },2000)

// console.log("third");
// console.log("1st");
// setTimeout(function(){
//     console.log("2nd")
// },5000)
// console.log("3rd");

//SetInterval()
// setInterval(function(){
//     console.log("run after 2 sec")
// },2000)

let count=0;
let intrvalID=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);
    if(count===10){
        clearInterval(intrvalID);
        console.log("task completed")
    }
},1000)