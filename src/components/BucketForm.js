import React, { useState } from "react";

function Dropdown({ eagerness, setEagerness }) {
  return (
    <div className="dropdown">
      <button className={`dropbtn ${eagerness}`}>
        {eagerness || "Priority"}
      </button>
      <div className="dropdown-content">
        {/* TODO: Add an onClick events that will set the corresponding eagerness level to "low", "medium", or "high" */}
        <p onClick={() => setEagerness("high")}>Must do</p>
        <p onClick={() => setEagerness("medium")}>Want to do</p>
        <p onClick={() => setEagerness("low")}>Take it or leave it</p>
      </div>
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder = "Add to your bucket list",
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name="text"
      className="bucket-input"
      onChange={onChange}
    ></input>
  );
}

function BucketForm(props) {
  const [input, setInput] = useState(props.edit?.value || "");
  const [eagerness, setEagerness] = useState(props.edit?.eagerness || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {};
    item.id = props.edit?.id || Math.random(Math.floor() * 1000) + Date.now();
    item.text = input;
    item.eagerness = eagerness || "low";

    props.onSubmit(item);
    setInput("");
    setEagerness("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  if (props.edit) {
    return (
      <div>
        <h3>Update entry: {props.edit.value}</h3>
        <form className="bucket-form" onSubmit={handleSubmit}>
          <TextInput
            value={input}
            onChange={handleChange}
            placeholder={props.edit.value}
          />
          <Dropdown setEagerness={setEagerness} eagerness={eagerness} />
          <button className="bucket-button">Update</button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <TextInput value={input} onChange={handleChange} />
        <Dropdown setEagerness={setEagerness} eagerness={eagerness} />
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  );
}

export default BucketForm;
