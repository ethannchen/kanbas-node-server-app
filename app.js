import express from "express"
import Hello from "./hello.js"
import Lab5 from "./lab5.js";

const app = express()
Hello(app)
Lab5(app);

app.listen(4000)