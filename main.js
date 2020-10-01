import express from "express" 
import bodyParser from "body-parser"
const app = express();
const port = 4001;
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());

app.get("/momen", (req, res) => {
  res.send("Momen anagreh!");
});
app.get("/", (req, res) => {
  console.log("home screen");
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send("Worked");
});
app.post("/momen", (req, res) => {
    let momen = req.body
    console.log(momen)
    res.send({ family: "anagreh" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
