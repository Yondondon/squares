import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../config/hooks";
import { addCoord, removeCoord } from "../../../config/reducers/square";

type SquareItemProps = {
  column: number;
  row: number;
}

export const SquareItem: FC<SquareItemProps> = ({ column, row }) => {

  const dispatch = useAppDispatch();
  const square = useAppSelector(state => state.square);

  const isFilled = () => {
    return square.filledSquares.find(item => {
      return item.column === column && item.row === row
    })
  }

  const getSquareColor = () => {
    let sqaureColor = 'blue';
    square.filledSquares.find(item => {
      if(item.column === column && item.row === row) {
        sqaureColor = item.color;
      } return;
    })
    return sqaureColor;
  }

  const handleClick = (e: any, column: number, row: number) => {
    let classList = [...e.target.classList];
    const id = +`${column}${row}`;
    const clickedItem = {
      id,
      column,
      row,
      color: square.color
    };
    classList.includes('filledSquare') ?
      dispatch(removeCoord(clickedItem))
      :
      dispatch(addCoord(clickedItem))
  }

  return (
    <div
      className={`squareItem ${isFilled() ? `filledSquare ${getSquareColor()}` : ''}`}
      data-column={column}
      data-row={row}
      onClick={(e) => handleClick(e, column, row)}
    />
  )
}