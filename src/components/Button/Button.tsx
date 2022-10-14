import React, { FC } from 'react';

type ButtonPros = {
  text: string;
  onClick: () => void;
}

export const Button: FC<ButtonPros> = ({ text, onClick }) => {
  return (
    <button className="startBtn" onClick={onClick}>
      {text}
    </button>
  )
}