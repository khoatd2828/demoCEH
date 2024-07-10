import React from "react";
import { Outlet } from "react-router-dom";
import "./auth.scss";

export const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-background"></div>
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};
