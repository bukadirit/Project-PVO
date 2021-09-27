import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./main.component.css";
import {NavbarComponent} from "../navbar.component/navbar.component";
import {LandingComponent} from "../pages/landing.component";
import { StoreComponent } from "../pages/store.component";
import { AboutComponent } from "../pages/about.component";

export const MainComponent: React.FC = () => {
    const [user, setUser] = useState<{}>({name: "BOB"});
    return (
        <div id="main-component">
            <BrowserRouter>
                <NavbarComponent user={user}></NavbarComponent>
                <main>
                    <Switch>
                        <Route exact path="/">
                          <LandingComponent />
                        </Route>
                        <Route exact path="/store">
                          <StoreComponent />
                        </Route>
                        <Route exact path="/about">
                          <AboutComponent />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );

};
