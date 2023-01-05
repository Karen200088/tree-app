import {ITree} from "../Page/Page.interface";

export interface IChangeActivePayload {
  pageId: string,
  newValue: boolean
}

export interface IAddToDoPayload {
  addToDoId: string,
  defaultText: string
}

export interface IChangeToDoPayload {
  toDoId: string,
  arrayItemIndex: number,
  newValue: string
}

export interface IDeleteToDoPayload {
  toDoId: string,
  arrayItemIndex: number,
}

export interface IChangePAgeNamePayload {
  pageId: string,
  newName: string,
}

export interface IMoveToDo {
  draggedPageId: string,
  draggedPageToDoIndex: number,
  draggedPageToDoValue: string,
  droppedPageId: string,
}

export interface IAddToNewPage {
  id: string,
  newPage: ITree
}
