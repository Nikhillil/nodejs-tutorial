// Iske under ham non-blocking-io-module (asynchronous) kaise kaam karta hai ye samjhe ge 

// non-blocking-io-module (asynchronous) means ye code ko block nhi karta hai ye dekhta hai agarg kisi function ko execute hone mei time lgega ya koi call back funtion hua to vo usko apne piche background mei run krata rehta hai, or jab tk vo fun run ho tb tk aage ke line of code ko execute karta hai, or fir jaise hi vo function execute ho jaye usko print kar deta hai.

const fs = require("fs");

//1. ---- Write File ------//

// // non-blocking-io-module (asynchronous)
// fs.writeFile("file.txt", "data is added to file", () => {
//     console.log("data is successfully added");
// })

// blocking-io-module (synchronous)
const b = fs.writeFileSync("file2.txt", "data added");
console.log(b);

console.log("simplyjs suscribe");

//2. ---- Read File ----//
fs.readFile("file.txt", "utf-8", (err, data) => {
    console.log(err);
})

//3. ---- Append File ----
//  Append File se apan ek file mei jo data tha uske or data daal ke usko update kar diys means change kar diya
fs.appendFile("file.txt", "data is not nikhil lilwani", (err) => {
    console.log(err);
});

//4. ----rename File ----
// file ka naam change karsakte hai isse apan
// fs.rename("file2.txt", "pathaan.txt", (err) => {
//     console.log(err);
// })

//5. ---- delete file ----
fs.unlink("pathaan.txt", (err) => {
    console.log(err);
})