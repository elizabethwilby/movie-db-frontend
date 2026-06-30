import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Top Movies</NavLink>
      <NavLink to='/movies'>All Movies</NavLink> 
      <NavLink to='/add-movie'>Add Movie</NavLink>
    </nav>
  );
}

export default NavBar;