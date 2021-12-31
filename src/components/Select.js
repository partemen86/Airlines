import React from "react";

const Select = ({ 
  options,
  valueKey,
  titleKey,
  allTitle,
  value,
  onSelect }
) => {
  
  return (
    <select value={value} onChange={onSelect}>
      <option key='all' value='all'>{allTitle}</option>
      {options.map(option => {
        const val = option[valueKey]
        const name = option[titleKey]
        return <option key={val} value={val}>{name}</option>
      })}
    </select>
  )
}

export default Select