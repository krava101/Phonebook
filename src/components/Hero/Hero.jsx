import { Link } from "react-router-dom";
import css from './Hero.module.css';


export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook!</h1>
        <p className={css.authInfo}><Link to='/login'>Log in</Link> to your account or <Link to='/register'>create a new one</Link> to start using our phonebook.</p>
      </div>
    </section>
  )
}