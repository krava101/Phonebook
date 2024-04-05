import css from './App.module.css';
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps.js';
import { selectError, selectIsLoading } from '../../redux/selectors';


const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header/>
      <main className={css.wrapper}>
        <div>
          {error && <p className={css.error}>{error}</p>}
          {isLoading && <p className={css.loader}>Loading contacts...</p>}
          <ContactList />
        </div>
        <div>
          <Filter/>
          <ContactForm />
        </div>
      </main>
    </>
  )
}

export default App;