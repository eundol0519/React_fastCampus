import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("");
  const [flavor, setFlavor] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEssayChange = (e) => {
    setEssay(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFlavor(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:&nbsp;
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:&nbsp;
        <textarea value={essay} onChange={handleEssayChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={handleSelectChange}>
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
