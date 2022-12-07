import './navbar.css';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

const Menu = () => {

    return(
        <Navbar className="menu">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink class="btn btn-link" href="/categoria/laptop">Laptops</NavLink>
                    <NavLink class="btn btn-link" href="/categoria/impresora">Impresoras</NavLink>
                    <NavLink class="btn btn-link" href="/categoria/celular">Celulares</NavLink>
                    <NavLink class="btn btn-link" href="/categoria/desktop">Desktop</NavLink>
                    <NavLink class="btn btn-link" href="/categoria/tv">TV</NavLink>
                    <Nav.Link href="/descuentos">Descuentos</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className='btn btn-link' href='/cart'>
                        <CartWidget number = {'0'}/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;