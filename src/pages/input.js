import React, { useState } from "react";

import Container from "../components/common/container";
import InputComponent from "../components/input";

const Input = () => {
  const [inputs, setInputs] = useState({
    simpleInput: "",
    checkbox: false,
    checkboxRight: true,
    select: "",
  });

  const SelectOptions = [
    {
      key: "orange",
      label: "Orange",
    },
    {
      key: "red",
      label: "Red",
    },
    {
      key: "green",
      label: "Green",
    },
  ];

  const changeHandler = (name, value) => {
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Container>
      <h2 className="header text-primary my-20">Input Component</h2>
      <div className="p-20 bg-white br-8">
        <p className="my-10 fs-20 fw-600 text-primary-light">
          Different types of Inputs
        </p>
        <div className="my-20">
          <p className="my-10 fs-16 fw-600 text-secondary">1. Simple Input</p>
          <div className="d-flex">
            <InputComponent
              label="Simple Input"
              name="simpleInput"
              value={inputs.simpleInput}
              changeHandler={changeHandler}
            />
            <InputComponent
              label="Disabled Input"
              name="simpleInput"
              value={inputs.simpleInput}
              isDisabled
              changeHandler={changeHandler}
            />
          </div>
        </div>
        <div className="my-20">
          <p className="my-10 fs-16 fw-600 text-secondary">2. Checkbox</p>
          <InputComponent
            label="Checkbox"
            name="checkbox"
            isChecked={inputs.checkbox}
            type="checkbox"
            changeHandler={changeHandler}
          />
          <InputComponent
            label="Right side label"
            name="checkboxRight"
            isChecked={inputs.checkboxRight}
            type="checkbox"
            labelRight
            changeHandler={changeHandler}
          />
        </div>
        <div className="my-20">
          <p className="my-10 fs-16 fw-600 text-secondary">2. Select</p>
          <InputComponent
            type="select"
            label="Select"
            name="select"
            value={inputs.select}
            options={SelectOptions}
            changeHandler={changeHandler}
          />
          <InputComponent
            type="select"
            label="Select Disabled"
            name="select"
            isDisabled
            value={inputs.select}
            options={SelectOptions}
            changeHandler={changeHandler}
          />
        </div>
      </div>
    </Container>
  );
};

export default Input;
