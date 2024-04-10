import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import css from './Contacts.module.css';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <section className={css.contacts}>
      <div className={css.container}>
        <div>
          {error && <p className={css.error}>{error}</p>}
          {isLoading && <p className={css.loader}>Loading contacts...</p>}
          <ContactList />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}