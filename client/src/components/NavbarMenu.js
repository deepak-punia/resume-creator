import { Nav, Navbar, Container } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {logout} from '../actions/auth';
import {Link} from 'react-router-dom';

const NavbarMenu = () => {

  const dispatch = useDispatch();
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(logout());
  }

  const state = useSelector(state=>state.auth.isAuthenticated);
  
  if(!state){
    return (
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Resume Creator</Navbar.Brand>
    <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="#" >Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
  }

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Resume Creator</Navbar.Brand>
    <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="#" onClick={handleLogout}>Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarMenu;