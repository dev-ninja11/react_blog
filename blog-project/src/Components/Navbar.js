import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Blog React</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Users <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Users Details</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Post</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="#">Post Details</a>
      </li>
      
    </ul>
  </div>
</nav>
     );
}
 
export default Navbar;