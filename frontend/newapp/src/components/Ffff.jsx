
import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
