const express = require("express");
var cors = require("cors");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");
const guard = require("express-jwt-permissions")();

const port = process.env.PORT || 8080;
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const jwtCheck = auth({
  audience: "https://challenges-api.com",
  issuerBaseURL: "https://dev-67lutta2i4lj6mkv.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// enforce on all endpoints
app.use(jwtCheck);

app.get("/challenges", guard.check(["read:challenges"]), function (req, res) {
  res.json({
    challenge1: "This is the first challenge",
    challenge2: "This is the second challenge",
  });
});

app.listen(port);

console.log("Running on port ", port);
