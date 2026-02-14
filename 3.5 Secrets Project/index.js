//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import e from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = e();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    next();
  } else {
    console.log("Incorrect Password.");
    // res.send("<script>alert('Incorrect Password.');</script>");
    res.redirect("/");
  }
}
app.post("/check", passwordCheck, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
