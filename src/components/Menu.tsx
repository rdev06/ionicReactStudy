import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import { AppPage } from "../Models";

import "./Menu.css";

const Menu: React.FC<{ menuItems: AppPage[] }> = ({ menuItems }) => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          <IonListHeader>
            <h5>Brand Name</h5>
          </IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {menuItems.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
