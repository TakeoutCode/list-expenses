import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerHeader,
  ContainerButton,
} from "./elements/Header";
import Button from "./elements/Button";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Add Expense</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Add Expense</Title>
          <ContainerButton>
            <Button to="/categories">Categories</Button>
            <Button to="/list">List of Expenses</Button>
            <Button to="/">x</Button>
          </ContainerButton>
        </ContainerHeader>
      </Header>
    </>
  );
};

export default App;
