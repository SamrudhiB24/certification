let fs=require('fs');
//perform CRUD operation

// let data="hii todays weather is cool";

// //task-1 create a file and write data into it

// // fs.writeFile('demo.txt',data,{encoding:'utf-8'},(err)=>{
// //     if (err) throw err;
// //     console.log("file created successfully")
// // })

// //way-2
// // fs.writeFileSync('demo.txt',data,(err)=>{
// //    if (err){ }throw err;
// //     console.log("file created successfully");
// // })

// //read file
// let fileread=fs.readFileSync('demo.txt');
// //console.log(fileread.toString());

//delete previous data from file
//fs.truncateSync('demo.txt')

// //update file
// fs.appendFileSync('demo.txt','\n i hope this weather will be same for next days');

// //delete data

// fs.unlinkSync('demo.txt');
let data="hii am student of kle college of bca,nipani";
fs.writeFileSync('demo.txt',data)
let readf=fs.readFileSync('demo.txt')
console.log(readf.toString());

fs.truncateSync('demo.txt');

fs.appendFileSync('demo.txt','am student');
