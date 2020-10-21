import React from "react";
import PropTypes from "prop-types";

export const InputText = ({ label, value, name, onChange }) => {
  const funcOnChange = (e) => onChange(e.target.value, name);

  return (
    <div className="field-wrapper">
      <label>{label}</label>
      <input name={name} type="text" value={value} onChange={funcOnChange} />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  value: "",
};
