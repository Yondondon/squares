import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../config/hooks";
import { addCoord, removeCoord } from "../reducer";

type SquareItemProps = {
  column: number;
  row: number;
}

export const SquareItem: FC<SquareItemProps> = ({ column, row }) => {

  const dispatch = useAppDispatch();
  const square = useAppSelector(state => state.square);

  const isFilled = () => {
    return square.filledSquares.find(item => {
      return item.column == column && item.row == row
    })
  }

  const handleClick = (e: any, column: number, row: number) => {
    let classList = [...e.target.classList];
    const id = +`${column}${row}`;
    const clickedItem = {
      id,
      column,
      row
    };
    classList.includes('filledSquare') ?
      dispatch(removeCoord(clickedItem))
      :
      dispatch(addCoord(clickedItem))
  }

  return (
    <div
      className={`squareItem ${isFilled() ? 'filledSquare' : ''}`}
      data-column={column}
      data-row={row}
      onClick={(e) => handleClick(e, column, row)}
    />
  )
}