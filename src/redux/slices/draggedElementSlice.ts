import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IDraggedToDo {
  id: string,
  toDoIndex: number,
  toDoText: string
}

const initialState: IDraggedToDo = {
  id: "0",
  toDoIndex: 0,
  toDoText: ""
};

const draggedElementSlice = createSlice({
  name: 'draggedElementSlice',
  initialState,
  reducers: {
    addDragElement(state, action: PayloadAction<IDraggedToDo>) {
      state.id = action.payload.id;
      state.toDoIndex = action.payload.toDoIndex;
      state.toDoText = action.payload.toDoText;
    },
  }
});

export const {
  addDragElement
} = draggedElementSlice.actions;
export default draggedElementSlice.reducer;