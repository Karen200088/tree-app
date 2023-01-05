import React, {FC} from 'react';
import showLess from "../../../assets/images/lessShow.svg";
import showMore from "../../../assets/images/moreShow.svg";
import {ShowMoreLessPageBtnStyles} from "./ShowMoreLessPageBtn.styles";

interface ShowMoreLessBtnProps {
  childrenVisible: boolean,
  setChildrenVisible: (arg: any) => void
}

const ShowMoreLessPageBtn:FC<ShowMoreLessBtnProps> = ({childrenVisible,setChildrenVisible}) => {

  const showMoreLessHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    setChildrenVisible(!childrenVisible);
  };

  return <ShowMoreLessPageBtnStyles onClick={showMoreLessHandler} src={childrenVisible ? showLess : showMore}/>
};

export default ShowMoreLessPageBtn;