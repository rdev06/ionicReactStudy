import { Route, Switch, useLocation } from "react-router";
import BasicPage from "../../components/BasicPage";
import { loggedOut } from "../../MenuItems";
import Auth from "./components/Auth";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

const Page: React.FC = () => {
  const {pathname} = useLocation<{ pathname: string }>();
  const name = loggedOut.find(e => e.url === pathname)!.title;
  return (
    <BasicPage label={name}>
      <Switch>
          <Route path="/public/Home" component={Home} />
          <Route path="/public/ContactUs" component={ContactUs} />
          <Route path="/public/auth" component={Auth} />
        </Switch>
    </BasicPage>
  );
};

export default Page;
