const express = require("express");
const axios = require("axios");
const app = express();
const oAuth = require("../dashboard-backend/middlewares/oAuth");
const port = process.env.PORT || 3001;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const challengesAPIEndpoint = "http://localhost:8080/challenges";

app.use(oAuth);

app.get("/challenges", async (req, res) => {
  try {
    const { access_token } = req.oauth;
    console.log(access_token);
    const response = await axios({
      method: "GET",
      url: challengesAPIEndpoint,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      res.status(401).json("Unautorized to access data");
    } else if (error.response.status === 403) {
      res.status(403).json("Permission denied");
    } else {
      res.status(500).json("Something went wrong");
    }
  }
});

app.listen(port);

console.log("Running on port ", port);
