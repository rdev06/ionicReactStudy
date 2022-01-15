import {
  callOutline,
  callSharp,
  homeOutline,
  homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons";
import { AppPage } from "./Models";

const loggedIn: AppPage[] = [
  {
    title: "Inbox",
    url: "/page/inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    default:true
  },
  {
    title: "Outbox",
    url: "/page/outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    default:false
  }
];

const loggedOut: AppPage[] = [
  {
    title: "Home",
    url: "/public/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    default:false
  },
  {
    title: "Contact Us",
    url: "/public/contactUs",
    iosIcon: callOutline,
    mdIcon: callSharp,
    default:false
  },
  {
    title: "Auth",
    url: "/public/auth",
    iosIcon: callOutline,
    mdIcon: callSharp,
    default:true
  }
];

export { loggedIn, loggedOut };
