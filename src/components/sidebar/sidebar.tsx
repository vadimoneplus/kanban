import { TbLayoutBoardSplit } from "react-icons/tb";
import s from './sidebar.module.scss'
import { Switch } from "../switch/switch";

export const Sidebar = () => {
  return (
    <section className={s.sidebar}>
      <div className={s.header}>
        <div className={s.logo}>
          <span></span>
          <h1>Kanban</h1>
        </div>
        <div className={s.boxBtn}>
          <div>
            <h3>All boards</h3>
          <span>(1)</span>
          </div>
          <button><TbLayoutBoardSplit />Admin</button>
          <button><TbLayoutBoardSplit />+Create new board</button>
        </div>
      </div>
      <div className={s.footer}>
       <Switch/>
      </div>
    </section>
  );
};

