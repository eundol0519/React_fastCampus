// 다중 입력 제어하기

import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("");
  const [flavor, setFlavor] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      setName(value);
    } else if (name === "essay") {
      setEssay(value);
    } else if (name === "flavor") {
      setFlavor(value);
    }
  };

  const handleSubmit = (e) => {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:&nbsp;
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:&nbsp;
        <textarea value={essay} name="essay" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={flavor} name="flavor" onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
