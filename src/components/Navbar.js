import { userData } from "../data";
import NavbarLink from "./NavbarLink";
import UserAvatar from "./UserAvatar";

// TODO: Don't import `userData` directly
// TODO: How to handle initial state -- className `active`? UPDATE -- rename `isActive`
const navbarLinks = [
  {
    url: "https://developer.mozilla.org",
    title: "Home",
    className: "active"
  },
  {
    url: "https://developer.mozilla.org",
    title: "Whites"
  },
  {
    url: "https://developer.mozilla.org",
    title: "Reds"
  },
  {
    url: "https://developer.mozilla.org",
    title: "Blends"
  }
];

const Navbar = ({ title }) => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>{title}</h1>
        <ul className="navigation-links">
          {navbarLinks.map((item) => (
            <NavbarLink item={item} />
          ))}
        </ul>
      </section>
      <section className="secondary-navigation">
        <UserAvatar user={userData} />
      </section>
    </nav>
  )
}

export default Navbar
