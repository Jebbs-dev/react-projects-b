import React from "react";
import { Button } from "./Button";
import {
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalMessage,
  ModalFooter,
} from "./ErrorModalStyle";

const ErrorModal = (props) => {
  return (
    <>
      <ModalBackdrop onClick={props.onHandleError} />
      <ModalContainer className="template">
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalMessage>{props.message}</ModalMessage>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onHandleError}>Okay</Button>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};

export default ErrorModal;
