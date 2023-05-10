import React from "react";

const LoginButton = () => {
  const login = async () => {
    // Configure auth0 application
    const domain = "dev-67lutta2i4lj6mkv.us.auth0.com";
    const audience = "https://www.challenges-api.com";
    const scope = "read:challenges";
    const clientId = "QXOyBSzBVoRZoE4oncaY8jVZbgTsl5PI";
    const responseType = "code";
    const redirectUri = "https://localhost:3000/challenges";

    const response = await fetch(
      `https://${domain}/authorize?` +
        `audience=${audience}&` +
        `scope=${scope}&` +
        `response_type=${responseType}&` +
        `client_id=${clientId}&` +
        `redirect_uri=${redirectUri}`,
      {
        redirect: "manual",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "Authorization, Content-Type",
        },
      }
    );
    console.log(response);

    window.location.replace(response.url);
  };

  return (
    <div className="Login-button" onClick={() => login()}>
      Login
    </div>
  );
};

export default LoginButton;
