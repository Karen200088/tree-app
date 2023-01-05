import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {addToNewDo, moveToDo} from "../../../redux/slices/treeSlice";
import ToDoItem from "../ToDoItem/ToDoItem";
import {ToDoControlStyles} from "./ToDoControl.styles";

interface ToDoControlProps {
  id: string,
  toDoList: string[],
  isActive: boolean
}

const ToDoControl: FC<ToDoControlProps> = ({id, toDoList, isActive}) => {

  const dispatch = useDispatch();

  const draggedElement = useSelector((state: RootState) => state.draggedElementSlice)

  const addToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(
      addToNewDo({
        addToDoId: id,
        defaultText: "New Block"
      })
    )
  }
  const onDragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const dragPayload = {
      draggedPageId: draggedElement.id,
      draggedPageToDoIndex: draggedElement.toDoIndex,
      draggedPageToDoValue: draggedElement.toDoText,
      droppedPageId: id,
    }
    dispatch(moveToDo(dragPayload));
  }

  return (
    <ToDoControlStyles>
      {isActive && <button className="addToDoListBtn" onClick={addToDo}>+</button>}

      <div
        className="toDoList"
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
      >
        {
          toDoList && toDoList.map((item, index) => {
            return <ToDoItem
              id={id}
              key={item + index}
              toDoText={item}
              isActive={isActive}
              toDoIndex={index}
            />
          })
        }
      </div>
    </ToDoControlStyles>
  );
};

export default ToDoControl;