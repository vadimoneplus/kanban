import { useState } from 'react';
import { useActions } from '../../hooks/action';
import s from './switch.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const Switch = () => {
  const { toggleDark } = useActions()
  const { isDark } = useAppSelector(state => state.kanban)
  const handleOnChange = () => {
    toggleDark(isDark)
  }

  return (
    <label className={s.switch}>
      <input type="checkbox" onChange={handleOnChange} />
      <span className={s.move}></span>
    </label>
  );
};

