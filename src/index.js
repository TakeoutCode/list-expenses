import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import WebFont from "webfontloader";
import Container from "./elements/Container";
import LogIn from "./components/LogIn";
import ExpenditureCategory from "./components/ExpenditureCategory";
import SingUp from "./components/SingUp";
import ListExpenses from "./components/ListExpenses";
import EditExpenses from "./components/EditExpenses";
import { Helmet } from "react-helmet";
import Background from "./elements/Background";
import favicon from "./images/logo.png";
import "./index.css";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-Serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/categories" element={<ExpenditureCategory />} />
            <Route path="/list" element={<ListExpenses />} />
            <Route path="/edit/:id" element={<EditExpenses />} />
          </Routes>
        </Container>
      </Router>
      <Background />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
