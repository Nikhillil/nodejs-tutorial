const obj = {
    name: "Nikhil",
    age: 23,
    address: "Bhilai"
}

// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
const jsondata = JSON.stringify(obj);
// Converts a JavaScript Object Notation (JSON) string into an object.
const objdata = JSON.parse(jsondata);
console.log(jsondata);
console.log(objdata);