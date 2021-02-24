import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function RouterClubHorse() {
    const isSignIn = AuthService.isUserSignIn();
    return (
        <div>
            <Switch>
                {isSignIn && <Route path='/register/provider'>
                    <RegistrationForServiceProvider />
                </Route>}
                {!isSignIn && <Route path='/register'>
                    <Registration />
                </Route>}
                {!isSignIn && <Route path='/signin'>
                    <SignIn />
                </Route>}
               {isSignIn && <Route path='/accountmanagement'>
                    <AccountManagement />
                </Route>}
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>

        </div>
    )
}

export default RouterClubHorse