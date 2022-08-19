import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "../Components/auth/ForgotPassword";
import Login from "../Components/auth/Login";
import ResetPassword from "../Components/auth/Resetpassword";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

export const Router = () => {
  return (
    <BrowserRouter basename="/Driver-web">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/set-password/:token" component={ResetPassword} />
        <ProtectedRoute path="/dashboard" component={DashboardLayout} />
      </Switch>
    </BrowserRouter>
  );
};
