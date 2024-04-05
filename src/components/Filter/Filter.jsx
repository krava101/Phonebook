import { useDispatch } from "react-redux";
import { filterStatus } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from './Filter.module.css';
import { useState } from "react";
import clsx from "clsx";


export default function Filter() {
  const [activeBtn, setActiveBtn] = useState('b1');
  const dispatch = useDispatch();

  return (
    <div className={css.filter}>
      <button 
        className={clsx(css.filterBtn, activeBtn === 'b1' && css.active)} 
        type="button" 
        onClick={() => { dispatch(setStatusFilter(filterStatus.all)); setActiveBtn('b1'); }}>
        Contacts
      </button>
      <button 
        className={clsx(css.filterBtn, activeBtn === 'b2' && css.active)} 
        type="button" 
        onClick={() => { dispatch(setStatusFilter(filterStatus.favorite)); setActiveBtn('b2'); }}>
        Favorite
      </button>
    </div>
  )
}