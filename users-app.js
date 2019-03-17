var users=require("./users.json");
// [
//     // {
//     //     login: "ionut",
//     //     pasword:"123"
//     // },
//     // {
//     //     login: "vanea",
//     //     pasword:"3456"
//     // },
//     // {
//     //     login: "petea",
//     //     pasword:"890"
//     // }
// ];
var uf=require("./users-function.js");
// global.users=users;

///////////////////////run
uf.showUser(users);