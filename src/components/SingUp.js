import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../elements/Button";
import { ContainerHeader, Header, Title } from "../elements/Header";
import { Form, Input, ContainerButton } from "../elements/ElementsForm";
import { ReactComponent as SvgSingup } from "../images/registro.svg";
import styled from "styled-components";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Alert from "../elements/Alert";

const Svg = styled(SvgSingup)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.5rem; /* 20px */
`;
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(false);
    setAlertContent({});

    const regularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regularExpression.test(email)) {
      setAlert(true);
      setAlertContent({
        type: "error",
        message: "invalid mail",
      });
      return;
    }
    if (email === "" || password === "" || password2 === "") {
      setAlert(true);
      setAlertContent({
        type: "error",
        message: "invalid mail",
      });
      return;
    }
    if (password !== password2) {
      setAlert(true);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      let message;
      switch (error.code) {
        case "auth/invalid-password":
          message = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          message =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          message = "El correo electrónico no es válido.";
          break;
        default:
          message = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      setAlertContent({ type: "error", message });
    }
  };
  return (
    <>
      <Helmet>
        <title>Sing Up</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Sing Up</Title>
          <div>
            <Button to="/login">Log In</Button>
          </div>
        </ContainerHeader>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleChange}
        />
        <ContainerButton>
          <Button primary as="button" type="submit">
            Sing Up
          </Button>
        </ContainerButton>
      </Form>
      <Alert
        type={alertContent.type}
        message={alertContent.message}
        alert={alert}
        setAlert={setAlert}
      />
    </>
  );
};

export default Register;
