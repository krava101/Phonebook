import css from './Layout.module.css';
import {Toaster} from "react-hot-toast";

export default function Layout({children}) {
  return (<main className={css.wrapper}>{children}<Toaster/></main>)
}