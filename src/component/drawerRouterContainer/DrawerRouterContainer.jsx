import * as React from "react";
import { withRouter } from "react-router-dom";
import {
  Drawer,
  DrawerItem,
  DrawerContent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { useDraggable, Icon, DragAndDrop } from "@progress/kendo-react-common";
import DraggableButton from "../../common/draggableButton/DraggableButton";
import DashboardContent from "../dashboard/DashboardContent";
const items = [
  {
    text: "Inbox",
    icon: "k-i-inbox",
    selected: true,
    route: "/",
  },
  {
    text: "Notifications",
    icon: "k-i-bell",
    route: "/notifications",
  },
  {
    text: "Calendar",
    icon: "k-i-calendar",
    route: "/calendar",
  },
  {
    text: "Attachments",
    icon: "k-i-hyperlink-email",
    route: "/attachments",
  },
  {
    text: "Favourites",
    icon: "k-i-star-outline",
    route: "/favourites",
  },
];
const DrawerRouterContainer = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const [selec, setSelect] = React.useState(null);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  const onSelect = (e) => {
    console.log(e);
    setSelect(e.itemTarget.props.route);
  };
  // const setSelectedItem = (pathName) => {
  //   let currentPath = items.find((item) => item.route === pathName);
  //   if (currentPath.text) {
  //     return currentPath.text;
  //   }
  // };
  // let selected = setSelectedItem(props.location.pathname);
  const CustomItem = (props) => {
    const handleDragStart = React.useCallback((event) => {
      console.log(">>>", event);
    }, []);
    const button = React.useRef(null);
    useDraggable(button, {
      onDragStart: handleDragStart,
    });
    return (
      <DrawerItem {...props}>
        <div ref={button} style={{ display: "flex", margin: 10 }}>
          <span className={"k-icon flag " + props.icon} />
          <div className="item-descr-wrap">
            <div style={{ marginLeft: 20 }}>{props.text}</div>
          </div>
        </div>
      </DrawerItem>
    );
  };

  const [box, setBox] = React.useState("A");
  const handleDrop = React.useCallback((id) => {
    console.log(id);
  }, []);
  return (
    <div>
      <div className="custom-toolbar">
        <Button icon="menu" fillMode="flat" onClick={handleClick} />
      </div>
      <DragAndDrop>
        <Drawer
          expanded={expanded}
          position={"start"}
          mode={"push"}
          mini={true}
          items={items.map((item) => ({
            ...item,
            selected: item.text === "selected",
          }))}
          item={(props) => <DraggableButton props={props} />}
        >
          <DrawerContent
            style={{ backgroundColor: "#f9f1f1", margin: 10, height: "100vh" }}
          >
            <DashboardContent onDrop={handleDrop} />
          </DrawerContent>
        </Drawer>
      </DragAndDrop>
    </div>
  );
};
export default DrawerRouterContainer;
