import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {addNewPage} from "../../../redux/slices/treeSlice";
import {ITree} from "../../../interfaces/Page/Page.interface";
import {AddNewPageBtnStyles} from "./AddNewPageBtn.styles";

interface AddNewPageBtnProps {
  id: string,
  childrenLength: number
}

const AddNewPageBtn: FC<AddNewPageBtnProps> = ({id, childrenLength}) => {

  const dispatch = useDispatch();

  const addNewPageHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const newBlockIdGenerate = id.toString().concat(String(childrenLength + 1));

    const newPage: ITree = {
      id: newBlockIdGenerate,
      isActive: false,
      title: "new page",
      toDoList: ["New Block"],
      children: []
    }

    dispatch(addNewPage({
      id,
      newPage: newPage,
    }))
  };

  return <AddNewPageBtnStyles onClick={addNewPageHandler}>+</AddNewPageBtnStyles>
};

export default AddNewPageBtn;