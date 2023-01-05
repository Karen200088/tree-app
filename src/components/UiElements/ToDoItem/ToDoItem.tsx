import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeToDo} from "../../../redux/slices/treeSlice";
import {addDragElement} from "../../../redux/slices/draggedElementSlice";
import DoCloseBtn from "../ToDoCloseBtn/ToDoCloseBtn";
import {ToDoItemStyles} from "./ToDoItem.styles";

interface ToDoItemProps {
  id: string,
  toDoText: string,
  isActive: boolean,
  toDoIndex: number,
}

const ToDoItem: FC<ToDoItemProps> = ({id, toDoText, isActive, toDoIndex}) => {

  const dispatch = useDispatch();

  const [isChangeable, setIsChangeable] = useState<boolean>(false);
  const [toDoInput, setToDoInput] = useState<string>(toDoText);

  const changeToDoUiState = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.stopPropagation();
    if (isActive) {
      setIsChangeable(true)
    }
  }

  const changeToDoValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoInput(event.target.value);
  }

  const onBlurHandler = () => {
    dispatch(changeToDo({
      toDoId: id,
      arrayItemIndex: toDoIndex,
      newValue: toDoInput
    }))
    if (isActive) {
      setIsChangeable(false)
    }
  }

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(addDragElement({id, toDoIndex, toDoText}));
  }

  return (
    <ToDoItemStyles
      isActive={isActive}
      onClick={changeToDoUiState}
      draggable={!isActive}
      onDragStart={onDragStartHandler}
    >
      {!isChangeable && isActive &&
          <>
              <div className="to-do-item">
                  <p>{toDoText}</p>
                  <DoCloseBtn
                      toDoId={id}
                      toDoIndex={toDoIndex}
                  />
              </div>
          </>
      }
      {!isActive &&
          <p className="to-do-item" onClick={isActive && !isChangeable ? changeToDoUiState : undefined}>
            {toDoText}
          </p>}
      {
        isActive && isChangeable &&
          <input
              type="text"
              className="to-do-input-change"
              value={toDoInput}
              onChange={changeToDoValue}
              onBlur={onBlurHandler}
          />
      }
    </ToDoItemStyles>

  );
};

export default ToDoItem;