import './ItemListContainer.css';
import Intro from '../Intro/Intro';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = ({greeting}) => {
    return(
        <div className="home">
            <Intro titulo="Tienda Libre" />
            <Container>
                <h1 className='texto-home'>{greeting}</h1>
                <h2>Productos Principales</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        Laptops
                    </Col>
                    <Col xs={12} sm={4}>
                        Mobiles
                    </Col>
                    <Col xs={12} sm={4}>
                        Desktop
                    </Col>
                </Row>
                <h2>Descuentos</h2>
                <ul className="articulos">
                    <li>Articulo 1</li>
                    <li>Articulo 2</li>
                </ul>
            </Container>

            <Link to="/contacto">Ir a contacto!</Link>
        </div>
    );
}

export default ItemListContainer;