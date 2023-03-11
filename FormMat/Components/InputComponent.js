import React from "react";

const InputComponent = () => {
  return (
    <>
      <FormInputContainer>
        <FormInputLabel htmlFor="name">Name</FormInputLabel>
        <FormInput type="text" id="name" />
      </FormInputContainer>
      <FormInputContainer>
        <FormInputLabel htmlFor="email">E-mail</FormInputLabel>
        <FormInput type="email" id="email" />
      </FormInputContainer>
    </>
  );
};

export default InputComponent;
