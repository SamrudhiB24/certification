// //object
// // console.log(person);
// // console.log(person.name);

// //change properties 
// // person.name="abc dgc";
// // console.log(person);

// // //adding new property
// // person.gender="female"
// // console.log(person);

// //delete property
// delete person.favcolor;
// console.log(person);

// //

//advanced object
let person={
      name:"abc",
        age:23,
       favcolor:"black",
       fun: function print(){
        return(`my name is ${this.name} and my age is ${this.age}`);
       },
       newobj:{
        gender:"female",
        address:"kagal"
       }

    }
    // console.log(person.fun())
    console.log(person.newobj.address);