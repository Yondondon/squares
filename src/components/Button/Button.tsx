import React, { FC } from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="startBtn" onClick={onClick}>
      {text}
    </button>
  )
}