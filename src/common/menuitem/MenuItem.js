import React from "react";
import { DrawerItem, } from "@progress/kendo-react-layout";

import "./menuItem.scss";
const MenuItem = props => {
  console.log(props);

  return (
    <DrawerItem {...props}>
    <span className={"k-icon flag " + props.icon} />
    <div className="item-descr-wrap">
      <div>{props.text}</div>
      {props.text == "Paris" ? <span>Different Rendering 1 </span> : props.text == "Berlin" ? <span>Different Rendering 2</span> : null}
      <span className="item-descr">Capital of {props.country}</span>
    </div>
  </DrawerItem>
  );
};

export default MenuItem;
