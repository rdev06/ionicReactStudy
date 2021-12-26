import {
  archiveOutline,
  archiveSharp,
  callOutline,
  callSharp,
  heartOutline,
  heartSharp,
  homeOutline,
  homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import { AppPage } from "./Models";

const loggedIn: AppPage[] = [
  {
    title: "Inbox",
    url: "/page/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Outbox",
    url: "/page/Outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Favorites",
    url: "/page/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Archived",
    url: "/page/Archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Trash",
    url: "/page/Trash",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: "Spam",
    url: "/page/Spam",
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];

const loggedOut: AppPage[] = [
  {
    title: "Home",
    url: "/public/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Contact Us",
    url: "/public/contactUs",
    iosIcon: callOutline,
    mdIcon: callSharp,
  },
  {
    title: "Auth",
    url: "/public/auth",
    iosIcon: callOutline,
    mdIcon: callSharp,
  }
];

export { loggedIn, loggedOut };
