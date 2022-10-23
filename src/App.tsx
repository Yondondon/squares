import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';
import { Square } from './features/Square/Square';
import { useAppSelector, useAppDispatch } from './config/hooks';
import { setSize } from './config/reducers/square';
import { CoordList } from './components/CoordList/CoordList';
import { ColorPalette } from './features/ColorPalette/ColorPalette';

const options = [
  {
    "name": "Select mode...",
    "field": 0
  },
  {
    "name": "Easy",
    "field": 5
  },
  {
    "name": "Normal",
    "field": 15
  },
  {
    "name": "Hard",
    "field": 25
  }
];


const App = () => {
  
  const dispatch = useAppDispatch();
  const square = useAppSelector(state => state.square);

  let currentSquareSize: number = 0;
  
  const selectChage = (e: any) => {
    currentSquareSize = +(e.target.value);
  }
  
  const handleStartBtn = () => {
    dispatch(setSize(currentSquareSize))
  }

  return (
    <div className="App">
      <ul className="centredList">
        <li>1. Select mode.</li>
        <li>2. Press "Start".</li>
        <li>3. Click on squares.</li>
        <li>Optional: change color.</li>
      </ul>

      <div style={{display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
        <Select options={options} onChange={selectChage} />
        <Button text="Start" onClick={handleStartBtn} />
      </div>
      <ColorPalette />
      <Square/>
      <h3>Filled squares</h3>
      <CoordList listItems={square.filledSquares}/>
    </div>
  );
}

export default App;
