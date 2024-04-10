import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { RestrictedRoute } from './RestrictedRoute';
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../../redux/auth/operations.js';
import LogoutModal from '../LogoutModal/LogoutModal';
import Layout from '../Layout/Layout';
import Modal from 'react-modal';
import css from './App.module.css';

const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const Registration = lazy(() => import('../../pages/Registration/Registration'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Login = lazy(() => import('../../pages/Login/Login'));

Modal.setAppElement('#root');

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {isRefreshing ? <p className={css.refresh}>Refreshing user, please wait...</p> :
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/contacts'
              element={<PrivateRoute component={<Contacts/>} redirectTo='/login'/>} />
            <Route
              path='/login'
              element={<RestrictedRoute component={<Login/>} redirectTo='/contacts'/>}/>
            <Route
              path='/register'
                element={<RestrictedRoute component={<Registration/>} redirectTo="/contacts" />} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </Suspense>}
        <LogoutModal/>
      </Layout>
    </>
  )
}

export default App;