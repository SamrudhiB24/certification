//custom constructor function
// // function Details(){
// this.name="sneha";
// this.age=21;
// this.address="kagal"

// }
// let user=new Details();
// console.log(user.name)

function Details(naam,umar,gav){
    this.name=naam;
    this.age=umar;
    this.address=gav;
    this.description=function(){
        return (`my name is ${this.name}, my age is ${this.age}`)
    
    }
}
    let user=new Details("sneha",21,"kurukali");
    let user1=new Details("samrudhi",21,"kagal");
    //console.log(user);
    console.log(user.description())
   // console.log(user1);
    console.log(user1.description())