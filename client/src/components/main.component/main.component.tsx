import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./main.component.css";
import {NavbarComponent} from "../navbar.component/navbar.component";
import {LandingComponent} from "../pages/landing.component";

export const MainComponent: React.FC = () => {
    const [user, setUser] = useState<{}>({});
    return (
        <div id="main-component">
            <BrowserRouter>
                <NavbarComponent user={user}></NavbarComponent>
                <main>
                    <Switch>
                        <Route exact path="/">
                          <LandingComponent />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );

};
