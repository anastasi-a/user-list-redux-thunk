import {Link} from "react-router-dom";

const Header = (props) => {
  return(
    <div className="header">
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  )
}

export default Header;
