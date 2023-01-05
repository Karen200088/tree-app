import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITree} from "../../interfaces/Page/Page.interface";
import {
  IAddToDoPayload, IAddToNewPage,
  IChangeActivePayload, IChangePAgeNamePayload,
  IChangeToDoPayload, IDeleteToDoPayload, IMoveToDo,
} from "../../interfaces/Redux/Redux.interface";
import {findItemNested} from "../../helpers/sliceFilterFunc";

const initialState: ITree = {
  id: "0",
  isActive: false,
  title: "main page",
  toDoList: [
    "New block1", "Test block", "New block"
  ],
  children: [
    {
      id: "01",
      title: "2child page",
      isActive: false,
      toDoList: [
        "New block", "Test block"
      ],
      children: [],
    },
    {
      id: "02",
      title: "2child page",
      isActive: false,
      toDoList: [
        "block", "Test block"
      ],
      children: [],
    }
  ]
};

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    changeIsActive(state, action: PayloadAction<IChangeActivePayload>) {
      if (state.id === action.payload.pageId) {
        state.isActive = action.payload.newValue;
      } else {
        const res = findItemNested(state.children, action.payload.pageId);
        res.isActive = action.payload.newValue;
      }
    },
    addToNewDo(state, action: PayloadAction<IAddToDoPayload>) {
      if (state.id === action.payload.addToDoId) {
        state.toDoList = [...state.toDoList, action.payload.defaultText];
      } else {
        const res = findItemNested(state.children, action.payload.addToDoId);
        res.toDoList.push(action.payload.defaultText);
      }
    },
    changeToDo(state, action: PayloadAction<IChangeToDoPayload>) {
      if (state.id === action.payload.toDoId) {
        state.toDoList[action.payload.arrayItemIndex] = action.payload.newValue;
      } else {
        const res = findItemNested(state.children, action.payload.toDoId);
        res.toDoList[action.payload.arrayItemIndex] = action.payload.newValue;
      }
    },
    changeDeleteToDo(state, action: PayloadAction<IDeleteToDoPayload>) {
      if (state.id === action.payload.toDoId) {
        state.toDoList.splice(action.payload.arrayItemIndex, 1);
      } else {
        const res = findItemNested(state.children, action.payload.toDoId);
        res.toDoList.splice(action.payload.arrayItemIndex, 1);
      }
    },
    changePageName(state, action: PayloadAction<IChangePAgeNamePayload>) {
      if (state.id === action.payload.pageId) {
        state.title = action.payload.newName;
      } else {
        const res = findItemNested(state.children, action.payload.pageId);
        res.title = action.payload.newName;
      }
    },
    addNewPage(state, action: PayloadAction<IAddToNewPage>) {
      if (state.id === action.payload.id) {
        // @ts-ignore
        state.children.push(action.payload.newPage);
      } else {
        const res = findItemNested(state.children, action.payload.id);
        res.children.push(action.payload.newPage);
      }
    },
    deletePage(state, action: PayloadAction<string | number>) {
      const parentId = action.payload.toString().substring(0, action.payload.toString().length - 1);
      if (parentId === "0") {
        state.children.splice(state.children.findIndex((item) => item.id === action.payload), 1);
      } else {
        const res = findItemNested(state.children, parentId);
        res.children.splice(state.children.findIndex((item) => item.id === action.payload), 1);
      }
    },
    moveToDo(state, action: PayloadAction<IMoveToDo>) {
      if (action.payload.droppedPageId === action.payload.draggedPageId) {
        return state;
      }
      if (state.id === action.payload.droppedPageId) {
        const oldElement = findItemNested(state.children, action.payload.draggedPageId);
        oldElement.toDoList.splice([action.payload.draggedPageToDoIndex], 1);
        // @ts-ignore
        state.toDoList.push(action.payload.draggedPageToDoValue);
      }else if(state.id === action.payload.draggedPageId){
        const newElement = findItemNested(state.children, action.payload.droppedPageId);
        newElement.toDoList.push(action.payload.draggedPageToDoValue);
        state.toDoList.splice(action.payload.draggedPageToDoIndex, 1);
      }else {
        const oldElement = findItemNested(state.children, action.payload.draggedPageId);
        oldElement.toDoList.splice([action.payload.draggedPageToDoIndex], 1);
        const newElement = findItemNested(state.children, action.payload.droppedPageId);
        newElement.toDoList.push(action.payload.draggedPageToDoValue);
      }
    },
  },
});

export const {
  changeIsActive,
  addToNewDo,
  changeToDo,
  changeDeleteToDo,
  changePageName,
  addNewPage,
  deletePage,
  moveToDo
} = treeSlice.actions;
export default treeSlice.reducer;