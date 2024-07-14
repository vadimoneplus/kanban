import { BsThreeDotsVertical } from "react-icons/bs";
import s from './header.module.scss'

export const Header = () => {
  return (
    <section className={s.header}>
      <h2>Admin</h2>
      <div className={s.boxBtn}>
        <button className={s.addBtn}>+Add new Task</button>
        <button className={s.dotsBtn}><BsThreeDotsVertical /></button>
      </div>
    </section>
  );
};

