import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Public from "./modules/Public";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { loggedIn, loggedOut } from "./MenuItems";
import { useState } from "react";
import { AuthState, useAuth } from "./context/AuthContext";
import Inbox from "./modules/Inbox";
import Outbox from "./modules/Outbox";

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<Boolean>(false);

  const authData = useAuth();
  authData.setLoggedIn = setLoggedIn;

  return (
    <IonApp>
      <AuthState setLoggedIn={setLoggedIn}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu menuItems={!isLoggedIn ? loggedOut : loggedIn} />
            <IonRouterOutlet id="main">
              <Redirect exact path="/" to="public/Home" />
              {!isLoggedIn ? (
                <Route path="/public/:name" component={Public} />
              ) : (
                <Redirect
                  path="/public"
                  to={loggedIn.find((e) => e.default)!.url}
                />
              )}
              {isLoggedIn ? (
                <Switch>
                  <Route path="/page/inbox" component={Inbox} />
                  <Route path="/page/outbox" component={Outbox} />
                </Switch>
              ) : (
                <Redirect path="/page" to="/" />
              )}
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </AuthState>
    </IonApp>
  );
};

export default App;
