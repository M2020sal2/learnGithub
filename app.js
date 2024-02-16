// const user = {
//   name: "Mohamed",
//   gender: "male",
//   age: 23,
//   calcAge: (age) => {
//     const ageinDAys = age * 365;
//     return ageinDAys;
//   },
// };

// console.log(user.age);
// console.log(user.calcAge(user.age));
// ========================================

// let method = ["body", "params", "query", "file"];
// let RESTApis = {
//   body: () => `hellow`,
//   params: "ahmed params",
//   query: "ahmed query",
//   file: "fk me harder",
// };

// for (const key of method) {
// // console.log(RESTApis[key]());
// console.log(RESTApis[method[0]]());
// }

// let user = new Object();
let user = {
  name: "Mohamed",
  params: "ahmed params",
  query: "ahmed query",
  file: "fk me harder",
  getName: function () {
    console.log(`you name is ${user.naem}`);
  },
};

// let newuser = Object.create(user);
// newuser.name = "ahmed";
// console.log(newuser.getName());

let mo = {};
Object.defineProperty(mo, "name", { value: "Ahmed", configurable: false });

console.log(mo);

for (const key in user) {
  console.log(user[key]);
}
