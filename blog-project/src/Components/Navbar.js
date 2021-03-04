import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
      <nav className="navbar">
        <h1>The Blogs</h1>
        <div className='links'></div>
        <Link href='/'>Forms</Link>
        <Link href='/users'>Users</Link>
      </nav>
      
      
      
    
     );
}
 
export default Navbar;