import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Route, Switch, useLocation } from "react-router";
import { loggedOut } from "../../MenuItems";
import Auth from "./components/Auth";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

const Page: React.FC = () => {
  const {pathname} = useLocation<{ pathname: string }>();
  const name = loggedOut.find(e => e.url === pathname)?.title;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {name}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <Switch>
          <Route path="/public/Home" component={Home} />
          <Route path="/public/ContactUs" component={ContactUs} />
          <Route path="/public/auth" component={Auth} />
        </Switch>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
