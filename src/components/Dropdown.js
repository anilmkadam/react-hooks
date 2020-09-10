import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.label === selected.label) {
      return null;
    }
    return (
      <div
        className='item'
        key={option.value}
        onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });
  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>select a color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
