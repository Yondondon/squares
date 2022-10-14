import React, { FC } from 'react';

type CoordListPros = {
  listItems: any[];
}

export const CoordList: FC<CoordListPros> = ({ listItems }) => {
  return (
    <ul className="coordList">
      {listItems.map(item => {
        return <li key={item.id}>Column: {item.column}, Row: {item.row}</li>
      })}
    </ul>
  )
}