import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BtnReturn from "../elements/ButtonReturn";

const ListExpenses = () => {
  return (
    <>
      <Helmet>
        <title>List of Expenses</title>
      </Helmet>
      <Header>
        <BtnReturn />
        <Title>List of Expenses</Title>
      </Header>
    </>
  );
};

export default ListExpenses;
