import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Route, Switch, useParams } from "react-router";
import Auth from "./components/Auth/Index";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {name.charAt(0).toUpperCase() +
              name
                .slice(1)
                .replace(/([A-Z])/g, " $1")
                .trim()}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Switch>
          <Route path="/public/Home">
            <Home />
          </Route>
          <Route path="/public/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/public/auth">
            <Auth />
          </Route>
        </Switch>
      </IonContent>
    </IonPage>
  );
};

export default Page;
