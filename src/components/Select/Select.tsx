import React, { FC } from 'react';

type SelectProps = {
  options: { name: string; field: number; }[] | [];
  onChange: (e: any) => void;
}

export const Select: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select className="selectMode" onChange={onChange}>
      {options.map(option => {
        return <option key={Math.random()} value={option.field}>{option.name}</option>
      })}
    </select>
  )
}