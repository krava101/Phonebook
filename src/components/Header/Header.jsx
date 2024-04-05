import SearchBox from '../SearchBox/SearchBox'
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div>
        <h1>Phonebook</h1>
        <SearchBox/>
      </div>
    </header>
  )
}