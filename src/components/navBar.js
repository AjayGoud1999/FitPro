import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navBar.css';
import { NavHashLink } from 'react-router-hash-link';

function CollapsibleExample() {
  const session=window.sessionStorage.getItem("useremail")
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" className='nav-bar-main' fixed='top'>
        <Container>
          <Navbar.Brand href="/homePage" className='navbar-brand'>Fit <span className='brand-span'>Pro</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavHashLink to="/homePage" className='nav-link'>Home</NavHashLink>
              <NavHashLink to="/exercise" className='nav-link'>Exercises</NavHashLink>
              <NavHashLink to="/contact" className='nav-link'>Contact</NavHashLink>
              {/* <NavHashLink onClick={() => {
                console.log('logoutclicked')
                window.sessionStorage.clear()
              }} to="/login" className='nav-link'>Logout</NavHashLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default CollapsibleExample;