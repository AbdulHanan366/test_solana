const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var https = require("https");
var fs = require("fs");

var cors = require("cors");
var indexRouter = require("./routes/main");
const app = express();
const PORT = process.env.PORT || 8081;

app.set("view engine", "jade");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Allow", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  next();
});

app.use("/", indexRouter);

app.use(function (req, res, next) {
  res.send({ success: false, data: "404 Not Found" });
  return;
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env_production") === "development" ? err : {};
  res.status(err.status || 500);
  res.json("error");
});

// var options = {
// 	key: fs.readFileSync('/var/www/privkey.pem'),
// 	cert: fs.readFileSync('/var/www/fullchain.pem'),
// };

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

https.createServer(app).listen(4000);
