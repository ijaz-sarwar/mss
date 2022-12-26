import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
// import Inbox from "./Inbox";
// import Notifications from "./Notifications";
// import Calendar from "./Calendar";
import Attachments from "./component/attachments/Attachments";
// import Favourites from "./Favourites";
import DrawerRouterContainer from "./component/drawerRouterContainer/DrawerRouterContainer";
function App() {
  return (
    <div className="App">
      <React.Fragment>
          <DrawerRouterContainer/>
      </React.Fragment>
      ,
    </div>
  );
}

export default App;
