import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from "react";
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import * as Yup from "yup";

const initialValues = {
  email: '',
  password: ''
}

const ValidationSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required!'),
  password: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required!')
});

export default function Login() {
  const disptach = useDispatch()
  const emailId = useId();
  const pasId = useId();

  const handleSubmit = (values, actions) => {
    disptach(login(values))
    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
      <Form className={css.form}>
        <p>Log in</p>
        <Field type="email" name="email" id={emailId} placeholder='Email'/>
        <span className={css.error}><ErrorMessage name="email" as="span" /></span>
        <Field type="password" name="password" id={pasId} placeholder='Password'/>
        <span className={css.error}><ErrorMessage name="password" as="span" /></span>
        <button type="submit">Log in</button>
        <p className={css.toReg}>Don&apos;t have an account yet?
        <Link to='/registration'>Create a new one!</Link>
        </p>
      </Form>
    </Formik>
  )
}