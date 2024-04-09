import { useSelector, useDispatch } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import css from './ContactsPage.module.css';
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn ? dispatch(fetchContacts()): null
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.contactsWrapper}>
      <div>
        {error && <p className={css.error}>{error}</p>}
        {isLoading && <p className={css.loader}>Loading contacts...</p>}
        <ContactList />
      </div>
      <ContactForm />
    </div>
  )
}