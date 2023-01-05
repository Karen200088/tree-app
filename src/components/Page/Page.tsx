import React, {ChangeEvent, FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {changePageName, changeIsActive} from "../../redux/slices/treeSlice";
import {ITree} from "../../interfaces/Page/Page.interface";
import ToDoControl from "../UiElements/ToDoController/ToDoControl";
import AddNewPageBtn from "../UiElements/AddNewPageBtn/AddNewPageBtn";
import DeletePageBtn from "../UiElements/DeletePageBtn/DeletePageBtn";
import ShowMoreLessPageBtn from "../UiElements/ShowMoreLessPageBtn/ShowMoreLessPageBtn";
import {PageStyles} from "./Page.styles";

const Page: FC<ITree> = ({id, title, isActive, toDoList, children}) => {

  const dispatch = useDispatch();

  const [pageNameInput, setPageNameInput] = useState<string>(title);
  const [inputChangeable, setInputChangeable] = useState<boolean>(false);
  const [childrenVisible, setChildrenVisible] = useState<boolean>(true);

  const stateChangeHandler = (event: React.MouseEvent<HTMLHeadElement>) => {
    event.stopPropagation();
    if (isActive) {
      setInputChangeable(true)
    }
  }

  const changePageValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPageNameInput(event.target.value);
  }

  const inputStopPropagation = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  }

  const onInputBlurHandler = () => {
    dispatch(
      changePageName({
        pageId: id,
        newName: pageNameInput,
      }))
    if (isActive) {
      setInputChangeable(false)
    }
  }

  const changePageActive = () => {
    dispatch(changeIsActive(
      {
        pageId: id,
        newValue: !isActive
      }))
  };

  return (
    <>
      <PageStyles>
        <div className={`page-wrapper 
            ${children.length === 1 && childrenVisible ? `parent-component` : `many-child-component`}
            ${!childrenVisible && "not-child-component"}
            ${children.length === 0 && `not-child-component`}
            ${isActive ? `pageActive` : `pageNotActive`}
          `}
          onClick={changePageActive}
        >
          <DeletePageBtn id={id} isActive={isActive}/>

          {!isActive &&
              <h3 className="page-title">{title}</h3>
          }

          {isActive && !inputChangeable &&
              <h3 className="page-title" onClick={stateChangeHandler}>{title}</h3>
          }

          {isActive && inputChangeable &&
              <input
                  className="to-do-input"
                  type="text"
                  value={pageNameInput}
                  onChange={changePageValue}
                  onBlur={onInputBlurHandler}
                  onClick={inputStopPropagation}
              />
          }

          <ToDoControl
            id={id}
            toDoList={toDoList}
            isActive={isActive}
          />

          <AddNewPageBtn id={id} childrenLength={children.length}/>
          {children.length !== 0 &&
              <ShowMoreLessPageBtn
                  childrenVisible={childrenVisible}
                  setChildrenVisible={setChildrenVisible}
              />
          }
        </div>

        <div className="children">
          {
            children && childrenVisible && children.map((tree) => {
              return (
                <Page
                  key={tree.id}
                  id={tree.id}
                  title={tree.title}
                  isActive={tree.isActive}
                  toDoList={tree.toDoList}
                  children={tree.children}
                />
              )
            })
          }
        </div>
      </PageStyles>
    </>
  );
};

export default Page;