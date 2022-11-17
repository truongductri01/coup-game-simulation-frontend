import React from "react";
import { Outlet } from "react-router-dom";

function AuthScreen() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Outlet />
    </div>
  );
}

export default AuthScreen;
