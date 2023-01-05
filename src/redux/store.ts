import {combineReducers, configureStore} from "@reduxjs/toolkit";
import treeReducer from "./slices/treeSlice";
import draggedElementSlice from "./slices/draggedElementSlice";

const rootReducer = combineReducers({
  treeReducer,
  draggedElementSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
