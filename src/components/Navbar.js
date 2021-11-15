import NavbarLink from "./NavbarLink";
import UserAvatar from "./UserAvatar";

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

const Navbar = ({ title, userDetails }) => {
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
        <UserAvatar userDetails={userDetails} />
      </section>
    </nav>
  )
}

export default Navbar
