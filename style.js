// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolve after  2 seconds")
//     resolve(56)
//   }, 2000)
// })
// p1.then((value) => {
//   console.log(value)
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2")
//     }, 2000);
//     resolve("Promise 2")
//   });
//   return p2

// }).then((value) => {
//   console.log("we are done");
//   return 2
// }).then((value)=>{
//     console.log("Now we are done Pakka")
// })


// let loadScript = (src)=>{
//   return new Promise((resolve,reject) =>{
//     let script= document.createElement("script")
//     script.trype ="text/javascript"
//     script.src =src
//     document.body.appendChild(script)
//     script.onload=()=>{
//       resolve(1)
//     }
//     script.onerror =()=> {reject(0)}
//   })
// }

// let p1 = loadScript("http://localhgfhgost:3000/index.js")
// p1.then((value)=>{
//   console.log(value)
// })
// .catch((error)=>{
//   console.log("We are sorry -Cant Load the Script")
// })

// let p1 = new Promise  ((resolve,reject)=>
// {
//   setTimeout(()=>{
//        resolve("1");

//   },11000)
// })
// let p2 = new Promise  ((resolve,reject)=>
// {
//   setTimeout(()=>{
//         // resolve("2");
//         // reject(new Error("dont know"))

//   },11000)
// })
// let p3 = new Promise  ((resolve,reject)=>
// {
//   setTimeout(()=>{
//         resolve("3");
//         // reject(new Error("dont know"))

//   },1000)
// })

// // p1.then((Value)=>
// // {
// //   console.log(Value)
// // })
// // p2.then((Value)=>
// // {
// //   console.log(Value)
// // })
// // p3.then((Value)=>
// // {
// //   console.log(Value)
// // })

// let promise_all =Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//   console.log(value)
// })

// Asyncs Await 
async function rohit(){
      let p1 = new Promise  ((resolve,reject)=>
      {
        setTimeout(()=>{
            resolve("27 Deg");

        },1000)
      })

      let p2 = new Promise  ((resolve,reject)=>
      {
        setTimeout(()=>{
            resolve("30 Deg");

        },2000)
      })
      // p1.then(alert)
      // p2.then(alert)
      let prom1 =await p1
      let prom2 = await p2
      return[prom1,prom2]
}
console.log("Welcome to Weather Control Room")
let a = rohit()
console.log(a)
