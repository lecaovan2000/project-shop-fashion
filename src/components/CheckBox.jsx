import React from "react";
import { useRef } from "react";

const CheckBox = (props) => {
  const inputRef = useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        checked={props.checked}
        onChange={onChange}
      />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check"></i>
      </span>
      {props.label}
    </label>
  );
};

export default CheckBox;
