import React from 'react'
import {Route, Switch} from "react-router-dom"
import { ForgotPassword } from '../Components/auth/ForgotPassword'
import { Login } from '../Components/auth/Login'
import { Resetpassword } from '../Components/auth/Resetpassword'
import DashboardLayout from '../Components/Dashboard/DashboardLayout'

export const Router = () => {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route exact path="/resetpassword" component={Resetpassword}/>
            <Route  path="/dashboard/" component={DashboardLayout}/>
        </Switch>
    </div>
  )
}
