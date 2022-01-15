import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const BasicPage: React.FC<{label:string, children:any}> = ({label, children}) => (
  <IonPage>
    <IonHeader>
    <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
              <IonLabel>
              {label}
              </IonLabel>
          </IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{label}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            {children}
        </IonContent>
      </IonContent>
  </IonPage>
);

export default BasicPage;
