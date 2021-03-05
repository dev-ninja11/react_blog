import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
      <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link className="nav-link active" to="/">Homepage</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/posts">Posts</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/forms">Sign In</Link>
        </li>
        
  
</ul>
     );
}
 
export default Navbar;