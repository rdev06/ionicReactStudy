import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel
} from "@ionic/react";
import { useAuth } from "../../../../context/AuthContext";

const Login: React.FC = () => {
  const authState = useAuth();
  function handleLogin() {
    authState.setLoggedIn(true);
  }
  
  return (
    <IonCard>
      <IonItem>
        <IonLabel>To Login Click Here;</IonLabel>
      </IonItem>
  
      <IonCardContent>
        <IonButton
        color="tertiary"
        onClick={handleLogin}
        >Login</IonButton>
      </IonCardContent>
    </IonCard>
  )
};

export default Login;
