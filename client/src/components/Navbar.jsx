import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Pet</Link>
    </nav>
  );
};

export default Navbar;
