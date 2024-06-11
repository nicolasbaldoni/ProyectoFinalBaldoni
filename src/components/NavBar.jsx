import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../assets/callejon_diagon.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand to='/' as={Link}><img src={Logo} width='300' height='60' alt=''></img></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link to='/' as={Link} >Home</Nav.Link>
            <NavDropdown title='Productos' id='basic-nav-dropdown'>
              <NavDropdown.Item to='/category/Collares' as={Link}>Collares</NavDropdown.Item>
              <NavDropdown.Item to='/category/Varitas' as={Link}>Varitas</NavDropdown.Item>
              <NavDropdown.Item to='/category/Túnicas' as={Link}>Túnicas</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar