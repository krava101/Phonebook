import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectFilter);
  const handleSearch = (e) => dispatch(changeFilter(e.target.value));
  
  return (
    <div className={css.searchBox}>
      <input className={css.search} type="text" value={search.search} onChange={handleSearch} placeholder='Search contact'/>
    </div>
  )
}

export default SearchBox;