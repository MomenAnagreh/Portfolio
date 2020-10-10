import express from "express" 
import bodyParser from "body-parser"
const app = express();
const port = 4001;
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("home screen");
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send("Worked");
});

app.get("/momen", (req, res) => {
  res.send("Momen anagreh!");
});

app.get("/user/name/:name", (req, res) => {
  res.send("Momen anagreh!");
});

app.get("/:channelName/videos", (req, res) => {
  res.send("Momen anagreh!");
});

app.get("/user/name/:age", (req, res) => {
  res.send("Momen anagreh!");
});

app.post("/momen", (req, res) => {
    let momen = req.body
    console.log(momen)
    res.send({ family: "anagreh" });
});



const db = {
  users: [
    { name: "momen anagreh", age: 22 },
    { name: "isa anagreh", age: 29 },
  ],
};


app.post("/users/:user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let users = db.users;
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.name === (req.body.name || req.params.user)) {
      res.send({ age: user.age });
    }
  }
  res.send({ age: "not found" });
});








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
