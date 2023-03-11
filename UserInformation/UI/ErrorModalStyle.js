import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75)
  `;

export const ModalContainer = styled.div`

  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50%-20rem);
    width: 40rem;
  }
`;

export const ModalHeader = styled.header`
  background: #192c6b;
  padding: 1rem;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: white;
`;

export const ModalBody = styled.main`
  padding: 1rem;
`;

export const ModalMessage = styled.p`
  display: block;
`;


export const ModalFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
