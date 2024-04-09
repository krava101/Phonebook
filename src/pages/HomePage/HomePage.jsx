import { NavLink } from "react-router-dom";
import { MdOutlineStart } from "react-icons/md";
import css from './HomePage.module.css';


export default function HomePage() {
  return (
    <>
      <section className={css.hero}>
        <h1 className={css.title}>Welcome to Phonebook!</h1>
        <p className={css.homeInfo}><NavLink to='/login'>Log in</NavLink> to your account or <NavLink to='/registration'>create a new one</NavLink> to start using our phonebook.</p>
      </section>
      <section className={css.features}>
        <p className={css.featuresTitle}>Explore our main features</p>
        <ul className={css.featuresList}>
          <li>
            <p>Contact list:</p>
            <ul>
              <li>- Browse your list of contacts.</li>
              <li>- Easily manage them.</li>
              <li>- Quickly find the ones you need.</li>
            </ul>
          </li>
          <li>
            <p>Add, edit and remove:</p>
            <ul>
              <li>- Easily add new contact to your list.</li>
              <li>- Update information for existing contacts as needed.</li>
              <li>- Remove contacts that you no longer require.</li>
            </ul>
          </li>
          <li>
            <p>Logout:</p>
            <p>- Log out of your account anytime to ensure the security of your data.</p>
          </li>
        </ul>
        <NavLink to='/registration' className={css.start}>Get started <MdOutlineStart/></NavLink>
      </section>
    </>
  )
}