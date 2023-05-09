const axios = require("axios");

const tokenEndpoint = "https://dev-67lutta2i4lj6mkv.us.auth0.com/oauth/token";

const oAuth = (req, res, next) => {
  const code = req.query.code;

  if (!code) {
    res.status(401).send("Missing authorization code");
  }

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", "QXOyBSzBVoRZoE4oncaY8jVZbgTsl5PI");
  params.append(
    "client_secret",
    "c2VKZdTD_B06jlH0OG1ZTv_AjQYI6dqGq3lLu3aQVhTxhVXOg0qrVXnSFH4u4oDq"
  );
  params.append("code", code);
  params.append("redirect_url", "http://localhost:3000/challenges");

  axios
    .post(tokenEndpoint, params)
    .then((response) => {
      req.oauth = response.data;
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json(`Reason: ${err.message}`);
    });
};

module.exports = oAuth;
