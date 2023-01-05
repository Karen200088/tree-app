import React, {FC} from 'react';
import {ToDoCloseBtnStyles} from "./ToDoCloseBtn.styles";
import svgButton from "../../../assets/images/closeBtn.svg";
import {useDispatch} from "react-redux";
import {changeDeleteToDo} from "../../../redux/slices/treeSlice";

interface DoCLoseBtnProps {
  toDoId: string,
  toDoIndex: number
}

const DoCloseBtn: FC<DoCLoseBtnProps> = ({toDoId, toDoIndex}) => {

  const dispatch = useDispatch();

  const deleteToDo = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    dispatch(changeDeleteToDo({
      toDoId,
      arrayItemIndex: toDoIndex,
    }));
  }

  return <ToDoCloseBtnStyles src={svgButton} alt={"Delete To Do"} onClick={deleteToDo}/>

};

export default DoCloseBtn;