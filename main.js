import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 4001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = {
  users: [
    { name: "momen anagreh", age: 22 },
    { name: "isa anagreh", age: 29 },
  ],
};

const fab = {
  first: [

  ]
};

app.get("/:user", (req, res) => {
  console.log(req.params);
  res.send(req.params.user);
});
app.get("/", (req, res) => {
  console.log("home screen");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Worked");
});
// app.post("/user/:user", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   // let momen = req.body.family + " " + req.params.user
//   let users = db.users;
//   for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     if (user.name === (req.body.name || req.params.user)) {
//       res.send({ age: user.age });
//     }
//   }
// });
app.post("/user/:user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // let momen = req.body.family + " " + req.params.user
  const fibb = {
    fib: []
  };
  let a = 0;
  let b = 1;
  for(let i=0; i<20; i++){
    let c = a + b;
    a = b;
    b = c;
    fibb.fib.push(c);
  }
  res.send(fibb.fib);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
