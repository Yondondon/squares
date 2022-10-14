import React from "react";
import { useAppSelector } from "../../config/hooks";
import { SquareRow } from "./components/SquareRow";

export const Square = () => {

  const square = useAppSelector(state => state.square);

  const buildRows = (rowsAmount: number) => {
    let rows = [];
    for(let i = 1; i <= rowsAmount; i++) {
      rows.push(<SquareRow row={i} key={Math.random()} />)
    }
    return rows;
  }

  return (
    <div>
      {buildRows(square.size)}
    </div>
  )
}