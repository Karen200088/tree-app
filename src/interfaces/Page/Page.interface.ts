export interface ITree {
  id: string,
  title: string,
  isActive: boolean,
  toDoList: string[] | []
  children: Array<ITree> | []
}
