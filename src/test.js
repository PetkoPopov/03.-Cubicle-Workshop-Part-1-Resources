const u = require("uniqid")
let idies=[]
for (let index = 0; index < 11; index++) {
    const newId= u()
idies.push(newId);
    
}
console.log(idies);