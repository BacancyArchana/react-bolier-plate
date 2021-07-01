import React from "react";

const InputComponent = ({
  type,
  label,
  name,
  value,
  changeHandler,
  inputClass = "",
  labelClass = "",
  containerClass = "",
  isDisabled,
  labelRight,
  isChecked,
  options,
}) => (
  <div className={`input-container ${containerClass}`}>
    {!labelRight && (
      <label className={`input-label ${labelClass}`}>{label}</label>
    )}
    {type === "select" ? (
      <select
        disabled={isDisabled}
        className={`input ${isDisabled ? "input--disabled" : ""} ${inputClass}`}
        value={value}
        onChange={(e) => {
          changeHandler(
            name,
            type === "checkbox" ? e.target.checked : e.target.value
          );
        }}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        disabled={isDisabled}
        className={`input ${isDisabled ? "input--disabled" : ""} ${inputClass}`}
        value={value}
        onChange={(e) => {
          changeHandler(
            name,
            type === "checkbox" ? e.target.checked : e.target.value
          );
        }}
        checked={type === "checkbox" ? isChecked : false}
      />
    )}
    {labelRight && (
      <label className={`input-label ${labelClass}`}>{label}</label>
    )}
  </div>
);

export default InputComponent;
