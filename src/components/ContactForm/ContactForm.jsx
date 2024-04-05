import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';

const initialValues = {
  username: '',
  phone: ''
}

const ValidationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required!'),
  phone: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required!')
});

function ContactForm() {
  const nameId = useId();
  const telId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.username,
      number: values.phone,
    }
    dispatch(addContact(contact));
		actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
      <Form className={css.form}>
        <p>Add new contact</p>
        <Field type="text" name="username" id={nameId} placeholder='Name'/>
        <span className={css.error}><ErrorMessage name="username" as="span" /></span>
        <Field type="tel" name="phone" id={telId} placeholder='Phone'/>
        <span className={css.error}><ErrorMessage name="phone" as="span" /></span>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm;