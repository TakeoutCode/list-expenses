import React from "react";
import { Helmet } from "react-helmet";
import Button from "../elements/Button";
import { ContainerHeader, Header, Title } from "../elements/Header";
import { Form, Input, ContainerButton } from "../elements/ElementsForm";
import { ReactComponent as SvgLogin } from "../images/login.svg";
import styled from "styled-components";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100px */
  margin-bottom: 1.5rem; /* 20px */
`;

const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Log In</Title>
          <div>
            <Button to="/singup">Sing Up</Button>
          </div>
        </ContainerHeader>
      </Header>
      <Form>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          // value={}
          // onChange={}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          // value={}
          // onChange={}
        />
        <ContainerButton>
          <Button primary as="button" type="submit">
            Log In
          </Button>
        </ContainerButton>
      </Form>
    </>
  );
};

export default LogIn;
