import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { personAddOutline, personOutline } from "ionicons/icons";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth: React.FC = () => {
  const [segment, setSegment] = useState<"login" | "register">("login");
  return (
    <>
      <IonSegment
        onIonChange={(e) => setSegment(e.detail.value as any)}
        value={segment}
      >
        <IonSegmentButton value="login">
          <IonIcon icon={personOutline} />
          <IonLabel>Login</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="register">
          <IonIcon icon={personAddOutline} />
          <IonLabel>Register</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {segment === "login" ? <Login /> : <Register />}
    </>
  );
};

export default Auth;
