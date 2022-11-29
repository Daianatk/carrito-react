import './navbar.css';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    return(
        <Navbar className="menu">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Descuentos">Descuentos</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget number = {'1'}/>
            </Container>
        </Navbar>
    );
}

export default Menu;