import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectVisibleContacts } from "../../redux/selectors";

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length ?
        <ul className={css.contactList}>
          { contacts.map((contact) => <li key={contact.id}><Contact  contact={contact}/></li>)}
        </ul> : null
      }
    </>
  )
}

export default ContactList;