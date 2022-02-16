import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../theme";

const slideDown = keyframes`
  0% {
      transform: translateY(-1.25rem); /* 20px */
      opacity: 0;
  }

  10% {
      transform: translateY(1.25rem);
      opacity: 1;
  }
  
  90% {
      transform: translateY(1.25rem);
      opacity: 1;
  }

  100% {
      transform: translateY(1.25rem);
      opacity: 0;
  }
`;

const ContainerAlert = styled.div`
  z-index: 10;
  width: 100%;
  left: 0;
  top: 1.25rem; /* 20px */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;

  p {
    background: ${(props) => {
      if (props.type === "error") {
        return theme.red;
      } else if (props.type === "seccess") {
        return theme.green;
      } else {
        return "#000";
      }
    }};
    color: #fff;
    padding: 1.25rem 2.5rem; /* 20px 40px */
    border-radius: 0.31rem; /* 5px */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

const Alert = (type, message, alert, setAlert) => {
  useEffect(() => {
    let timer;
    if (alert) {
      timer = setTimeout(() => {
        setAlert(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);
  return (
    <>
      {alert && (
        <ContainerAlert type={type}>
          <p>{message}</p>
        </ContainerAlert>
      )}
    </>
  );
};

export default Alert;
