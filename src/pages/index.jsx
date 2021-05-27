import React from "react";
import Header from "../components/Header";
export const CommonLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
