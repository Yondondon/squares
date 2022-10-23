import React, { FC } from 'react';
import { useAppDispatch } from '../../../config/hooks';
import { setColor } from '../../../config/reducers/square'

type ColorPaletteItemProps = {
  color: string;
}

export const ColorPaletteItem: FC<ColorPaletteItemProps> = ({ color }) => {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(setColor(color))} className={`colorPaletteItem ${color}`} />
  )
}