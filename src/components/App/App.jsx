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
const Registration = lazy(() => import('../Registration/Registration'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Login = lazy(() => import('../Login/Login'));

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
            <Route path='/' element={<Home />} />
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