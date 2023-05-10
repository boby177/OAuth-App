import React from "react";

const LogoutButton = () => {
  const logout = async () => {
    const domain = "dev-67lutta2i4lj6mkv.us.auth0.com";
    const clientId = "QXOyBSzBVoRZoE4oncaY8jVZbgTsl5PI";
    const returnTo = "http://localhost:3000";

    const response = await fetch(
      `https://${domain}/logout?client_id=${clientId}&return_to=${returnTo}`,
      {
        redirect: "manual",
      }
    );

    window.location.replace(response.url);
  };

  return (
    <div className="Login-button" onClick={() => logout()}>
      Logout
    </div>
  );
};

export default LogoutButton;
