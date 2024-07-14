import { useGetBoardsQuery, useGetTasksQuery } from '../../store/common/common.api';
import s from './main.module.scss'



export const Main = () => {
 
  // const newTheme = theme === "light" ? "dark" : "light"
  // settheme(newTheme)
  // document.body.dataset.theme = theme

  const { isLoading: isLoadingBoard, isError: isErrorBoard, data: dataBoard } = useGetBoardsQuery(22486)
  const boardId = dataBoard ? +dataBoard[0].id : 0
  const { isLoading: isLoadingTasks, isError: isErrorTasks, data: dataTasks } = useGetTasksQuery(boardId)


  return (
    <section className={s.main}>
      {dataBoard && dataBoard[0].columns?.map(column => (
        <div className={s.column}>
          <div className={s.title}>
            <h4>{column.title}</h4>
            <p>({column.id})</p>
          </div>

          {dataTasks?.map(task => (task.columnId == column.id &&
            <div className={s.task}>
              <h4>{task.text}</h4>
              <p>{task.description}</p>
            </div>))}
        </div>
      ))}
      <div className={s.newColumn}>
        <button>+New Column</button>
      </div>
    </section>
  );
};

