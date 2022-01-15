import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import * as icons from "ionicons/icons";
import React, { Suspense } from "react";
import { Redirect, Route, useRouteMatch } from "react-router";

const InboxMenuItems = [
  {
    label: "Schedule",
    tab: "schedule",
    url: "/schedule",
    icon: "calendar",
    import: "./Schedule",
    default: true,
  },
  {
    label: "Speakers",
    tab: "speakers",
    url: "/speakers",
    icon: "people",
    import: "./Speakers",
    default: false,
  },
  {
    label: "About",
    tab: "about",
    url: "/about",
    icon: "informationCircle",
    import: "./About",
    default: true,
  },
];

const Inbox: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Suspense fallback={<div>Loading...</div>}>
            <Redirect
              exact
              from={path}
              to={path + InboxMenuItems.find((e) => e.default)!.url}
            />
            {InboxMenuItems.map((inboxMenuItem, i) => (
              <Route
                path={path + inboxMenuItem.url}
                key={i}
                component={React.lazy(() => import(`${inboxMenuItem.import}`))}
                exact
              />
            ))}
          </Suspense>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {InboxMenuItems.map((inboxMenuItem, i) => {
            //@ts-ignore
            const useIcon = icons[inboxMenuItem.icon];
            return (
              <IonTabButton
                tab={inboxMenuItem.tab}
                href={path + inboxMenuItem.url}
                key={i}
              >
                <IonIcon icon={useIcon} />
                <IonLabel>{inboxMenuItem.label}</IonLabel>
              </IonTabButton>
            );
          })}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Inbox;
