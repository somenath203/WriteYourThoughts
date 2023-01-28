import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>@{new Date().getFullYear()} <NavLink to='/'>WriteYourThoughts</NavLink>. All Rights Reserved</p>
    </footer>
  )
};

export default Footer;