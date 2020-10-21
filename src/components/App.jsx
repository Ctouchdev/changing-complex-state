import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>

      <input
        onChange={handleChange}
        name="fName"
        placeholder="First Name"
        value={fullName.fName}
      />
      <input
        onChange={handleChange}
        name="lName"
        placeholder="Last Name"
        value={fullName.lName}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
