import React from "react";

export const InputText = ({ label, value, name, fn }) => {
  let input =
    value !== null ? (
      <input
        name={name}
        type="text"
        defaultValue={value}
        onChange={(e) => fn(e.target.value, name)}
      />
    ) : (
      <input
        name={name}
        type="text"
        onChange={(e) => fn(e.target.value, name)}
      />
    );

  return (
    <div className="field-wrapper">
      <label>{label}</label>
      {input}
    </div>
  );
};
