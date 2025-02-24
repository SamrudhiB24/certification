let p1=new Promise(function(resolve,reject){
    console.log("wait for promise");
    setTimeout(function(){
        //let data="promise is resolved,data mil gaya";
        let err="promise is rejected, mai paise nahi dunga";
       // resolve(data);
       reject(err)
    },2000)
})
p1.then(function(data){
    console.log(data)
})

p1.catch(function(err){
    console.log(err);
})