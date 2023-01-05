import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {deletePage} from "../../../redux/slices/treeSlice";
import svgButton from "../../../assets/images/closeBtn.svg";
import {DeletePageBtnStyles} from "./DeletePageBtn.styles";

interface DeletePageBtnProps {
  id: string,
  isActive: boolean
}

const DeletePageBtn: FC<DeletePageBtnProps> = ({id, isActive}) => {

  const dispatch = useDispatch();

  const deletePageHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    dispatch(deletePage(id))
  };

  if (id === "0" || !isActive) {
    return null;
  }

  return <DeletePageBtnStyles
      alt="Delete Button"
      src={svgButton}
      onClick={deletePageHandler}
    />
};

export default DeletePageBtn;