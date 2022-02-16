import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BtnReturn from "../elements/ButtonReturn";

const ExpenditureCategory = () => {
  return (
    <>
      <Helmet>
        <title>Expenditures by Category</title>
      </Helmet>
      <Header>
        <BtnReturn />
        <Title>Expenditures by Category</Title>
      </Header>
    </>
  );
};

export default ExpenditureCategory;
