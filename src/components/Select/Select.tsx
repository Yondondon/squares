import React, { FC } from 'react';

type SelectPros = {
  options: { name: string; field: number; }[] | [];
  onChange: (e: any) => void;
}

export const Select: FC<SelectPros> = ({ options, onChange }) => {
  return (
    <select className="selectMode" onChange={onChange}>
      {options.map(option => {
        return <option key={Math.random()} value={option.field}>{option.name}</option>
      })}
    </select>
  )
}