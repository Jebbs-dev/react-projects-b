import React from "react";
import ReactDOM from "react-dom";
import {
  BackdropContainer,
  OverlayContainer,
  OverlayContent,
} from "./Modalstyles";

const Backdrop = (props) => {
  return (
    <>
      <BackdropContainer onClick={props.onClose}></BackdropContainer>
    </>
  );
};

const ModalOverlay = (props) => {
  return (
    <>
      <OverlayContainer>
        <OverlayContent>{props.children}</OverlayContent>
      </OverlayContainer>
    </>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
