import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
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
        <div className='ui selection dropdown visible active'>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className='menu visible transition'>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
