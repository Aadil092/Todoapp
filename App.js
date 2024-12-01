import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleValuechange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <div className="container">
      <h2>Dynamic Input Fields</h2>

      {inputFields.map((inputField, index) => (
        <div className="input-container" key={index}>
          <input 
            type="text" 
            placeholder="Enter a value" 
            value={inputField.value} 
            onChange={(e) => handleValuechange(index, e)} 
          />
          <button className="delete-btn" onClick={() => handleRemoveFields(index)}>
            <span className="material-symbols-outlined delete-icon">Delete</span>
          </button>
        </div>
      ))}
      <button className="add-btn" onClick={handleAddFields}>
        <span className="material-symbols-outlined add-icon"></span> Add Field
      </button>
    </div>
  );
};

export default App;
