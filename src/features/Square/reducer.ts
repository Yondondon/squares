import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../config/store'

// Define a type for the slice state
interface SquareState {
  size: number,
  filledSquares: any[]
}

// Define the initial state using that type
const initialState: SquareState = {
  size: 0,
  filledSquares: [],
}

export const squareSlice = createSlice({
  name: 'square',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload
      state.filledSquares = []
    },
    addCoord: (state, action: PayloadAction<{id: number; column: number, row: number}>) => {
      state.filledSquares = [action.payload, ...state.filledSquares]
    },
    removeCoord: (state, action: PayloadAction<{id: number; column: number, row: number}>) => {
      state.filledSquares = state.filledSquares.filter(item => item.id !== action.payload.id)
    },
  },
})

export const { setSize, addCoord, removeCoord } = squareSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSquare = (state: RootState) => state.square

export default squareSlice.reducer