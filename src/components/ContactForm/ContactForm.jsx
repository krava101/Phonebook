import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { IoMdAdd } from "react-icons/io";
import SearchBox from '../SearchBox/SearchBox';
import * as Yup from "yup";
import clsx from 'clsx';
import css from './ContactForm.module.css';

const initialValues = {
  username: '',
  phone: ''
}

const ValidationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too short!').max(16, 'Too long! Only 16 symbols!').required('This is required!'),
  phone: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('This is required!')
});

function ContactForm() {
  const [isMobileFromActive, setIsMobileFromActive] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    isMobileFromActive ? setActive(true) : null;
  }, [isMobileFromActive]);

  const form = clsx(css.form, active && (isMobileFromActive ? css.active : css.disable));
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

  const handleToggleMobileForm = () => {
    setIsMobileFromActive(!isMobileFromActive);
  }

  return (
    <div>
      <SearchBox/>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
      <Form className={form}>
        <button className={css.fromMobileTitle} onClick={handleToggleMobileForm} type='button'>Add new contact <IoMdAdd /></button>
        <p className={css.fromTitle}>Add new contact</p>
        <Field type="text" name="username" id={nameId} placeholder='Name'/>
        <span className={css.error}><ErrorMessage name="username" as="span" /></span>
        <Field type="tel" name="phone" id={telId} placeholder='Phone'/>
        <span className={css.error}><ErrorMessage name="phone" as="span" /></span>
        <button className={css.submitBtn} type="submit">Add contact</button>
      </Form>
      </Formik>
    </div>
  )
}

export default ContactForm;