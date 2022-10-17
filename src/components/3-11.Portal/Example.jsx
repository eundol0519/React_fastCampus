import React from "react";
import { createPortal } from "react-dom";
import ThankYouDialog from "./ThankYouDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
  return (
    <div
      onClick={() => {
        // portal에 있는 자식 요소(root와 별개의 요소)라도 onClick 이벤트가 전달된다.
        console.log("div");
      }}
    >
      <Portal>
        <ThankYouDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>Hahaha</button>
      </div>
    </div>
  );
}
