import React from 'react';
import { ColorPaletteItem } from './components/ColorPaletteItem';

const colorPalette = [ 'red', 'green', 'yellow', 'orange', 'gray', 'black', 'blue' ];

export const ColorPalette = () => {
  return (
    <div className='colorPaletteWrap'>
      {colorPalette.map(item => {
        return <ColorPaletteItem key={Math.random()} color={item} />
      })}
    </div>
  )
}