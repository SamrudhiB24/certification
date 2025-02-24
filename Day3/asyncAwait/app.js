//asyncAwait

async function kuchkam(a,b) {
    console.log("wait for promise");
    console.log(a);
   let data=await fetch('https://api.tvmaze.com/search/shows?q=girls');
   console.log(data.json());
   console.log(b);

}
console.log(kuchkam(2,4));