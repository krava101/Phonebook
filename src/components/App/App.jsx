import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { lazy, Suspense, useEffect } from "react";
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { RestrictedRoute } from './RestrictedRoute.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import Header from '../Header/Header';
import Layout from '../Layout/Layout.jsx';
import Modal from 'react-modal';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistPage = lazy(() => import('../../pages/RegistPage/RegistPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
import css from './App.module.css';
import LogoutModal from '../LogoutModal/LogoutModal.jsx';

Modal.setAppElement('#root');

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout>
        {isRefreshing ? <p className={css.refresh}>Refreshing user, please wait...</p> :
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/contacts'
              element={<PrivateRoute component={<ContactsPage/>} redirectTo='/'/>} />
            <Route
              path='/login'
              element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
            <Route
              path='/registration'
                element={<RestrictedRoute component={<RegistPage />} redirectTo="/contacts" />} />
              <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </Suspense>}
        <LogoutModal/>
      </Layout>
    </>
  )
}

export default App;