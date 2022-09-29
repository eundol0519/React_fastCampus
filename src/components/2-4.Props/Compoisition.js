import React from "react";

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

export default function Compoisition() {
  return (
    <>
      <Welcome name="Saebom"></Welcome>
      <Welcome name="Bom"></Welcome>
      <Welcome name="Ohsaebom"></Welcome>
    </>
  );
}
