import React, { FC } from 'react';

type CoordListProps = {
  listItems: any[];
}

export const CoordList: FC<CoordListProps> = ({ listItems }) => {
  return (
    <ul className="coordList">
      {listItems.map(item => {
        return <li key={item.id}>Column: {item.column}, Row: {item.row}</li>
      })}
    </ul>
  )
}