import './navbar.css';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

const Menu = () => {

    return(
        <Navbar className="menu">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink as= {Link} class="btn btn-link" to="/categoria/laptop">Laptops</NavLink>
                    <NavLink as= {Link} class="btn btn-link" to="/categoria/impresora">Impresoras</NavLink>
                    <NavLink as= {Link} class="btn btn-link" to="/categoria/celular">Celulares</NavLink>
                    <NavLink as= {Link} class="btn btn-link" to="/categoria/desktop">Desktop</NavLink>
                    <NavLink as= {Link} class="btn btn-link" to="/categoria/tv">TV</NavLink>
                    <Nav.Link as= {Link} to="/descuentos">Descuentos</Nav.Link>
                    <Nav.Link as= {Link} to="/contacto">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as= {Link} className='btn btn-link' to='/cart'>
                        <CartWidget number = {'0'}/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;