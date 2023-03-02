
// It is a built in modules in node.js

const path = require("path");

const a = path.basename("/foo/bar/baz/asdf/quux.html"); // return basename
const b = path.dirname("/foo/bar/baz/asdf/quux.html"); // return directory name
const c = path.extname("/foo/bar/baz/asdf/quux.html"); // return extension name
console.log(a);
console.log(b);
console.log(c);