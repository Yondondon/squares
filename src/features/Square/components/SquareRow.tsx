import React, { FC } from "react";
import { useAppSelector } from "../../../config/hooks";
import { SquareItem } from "./SquareItem";

type SquareRowProps = {
  row: number;
}

export const SquareRow: FC<SquareRowProps> = ({ row }) => {

  const square = useAppSelector(state => state.square);

  const buildRow = (rowLength: number) => {
    let rowItems = [];
    for(let i = 1; i <= rowLength; i++) {
      rowItems.push(<SquareItem key={Math.random()} column={i} row={row} />)
    }
    return rowItems;
  }

  return (
    <div className="squareRow" data-row={row}>{buildRow(square.size)}</div>
  )
}