import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

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