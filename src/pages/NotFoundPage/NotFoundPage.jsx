import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css';


export default function NotFoundPage(){
  return (
    <>
      <div className={css.wrapper}>
        <p>Page not found</p>
        <Link to={'/'}>Back to the homepage</Link>
      </div>
    </>
  )
}