import { MdOutlineStart } from "react-icons/md";
import { Link } from "react-router-dom";
import css from './Features.module.css';


export default function Features() {
  return (
    <section className={css.features}>
      <div className={css.container}>
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
        <Link to='/register' className={css.startAuthBtn}>Get started <MdOutlineStart/></Link>
      </div>
    </section>
  )
}