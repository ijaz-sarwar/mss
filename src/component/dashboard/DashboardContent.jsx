import * as React from "react";
import { useDroppable } from "@progress/kendo-react-common";
const DashboardContent = (props) => {

  const button = React.useRef(null);
  
  const [isInside, setIsInside] = React.useState(false);
  const handleDragEnter = React.useCallback(() => {
    setIsInside(true);
  }, []);
  const handleDragLeave = React.useCallback(() => {
    setIsInside(false);
  }, []);
  const handleDrop = React.useCallback((id) => {
    props.onDrop(props.id);
  }, [props.onDrop, props.id]);
  useDroppable(button, {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
  });
  return (
    <div
      ref={button}
      style={{
        padding: 10,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        borderWidth: "3px",
        borderStyle: "solid",
        borderRadius: "5px",
        borderColor: !props.selected && isInside ? "orange" : "lightgray",
        transition: "border-color .2s ease-in-out",
      }}
    >
      {props.children || "Drop Here"}
    </div>
  );
};

export default DashboardContent;
