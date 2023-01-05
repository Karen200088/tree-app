import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Page from "../Page/Page";
import {MainPageStyles} from "./MainPage.styles";

const MainPage: FC = () => {

  const tree = useSelector((state: RootState) => state.treeReducer);

  return (
    <MainPageStyles>
      <Page
        id={tree.id}
        title={tree.title}
        isActive={tree.isActive}
        toDoList={tree.toDoList}
        children={tree.children}
      />
    </MainPageStyles>
  );
};

export default MainPage;