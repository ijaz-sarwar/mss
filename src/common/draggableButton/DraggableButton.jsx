import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useDraggable, Icon } from "@progress/kendo-react-common";
import { DrawerItem, } from "@progress/kendo-react-layout";

const DraggableButton = props => {
  
  const [pressed, setPressed] = React.useState(false);
  const [dragged, setDragged] = React.useState(false);
  const [initial, setInitial] = React.useState(null);
  const button = React.useRef(null);
  const handlePress = React.useCallback(() => {
    setPressed(true);
  }, []);
  const handleDragStart = React.useCallback((event) => {
    setDragged(true);
    setInitial({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);

  const handleDrag = React.useCallback(
    (event) => {
      if (!button.current || !button.current.element || !initial) {
        return;
      }
      const transform = `translate(${event.clientX - initial.x}px, ${
        event.clientY - initial.y
      }px)`;
      button.current.element.style.transition = "none";
      button.current.element.style.transform = transform;
    },
    [initial]
  );
  const handleDragEnd = React.useCallback(() => {
    if (!button.current || !button.current.element) {
      return;
    }
    button.current.element.style.transition = "transform .3s ease-in-out";
    button.current.element.style.transform = null;
    setDragged(false);
    setInitial(null);
  }, []);
  const handleRelease = React.useCallback(() => {
    setPressed(false);
  }, []);
  useDraggable(button, {
    onPress: handlePress,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onRelease: handleRelease,
  });
  return (
    <DrawerItem key={props.props.index} ref={button} {...props}>
      <div  style={{ display: "flex",}}>
        <span className={"k-icon flag " + props.props.icon} />
        <div className="item-descr-wrap">
          <div style={{ marginLeft: 20 }}>{props.props.text}</div>
        </div>
      </div>
    </DrawerItem>
  );
};

export default DraggableButton;
