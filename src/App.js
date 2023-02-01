import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Descuentos from './components/Descuentos/Descuentos';
import CardFinalContainers from './components/CardFinalContainers/CardFinalContainers';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import CartFinal from './components/CartFinal/CartFinal';

function App() {

  let saludo = 'Bienvenidos a la tienda'

  return ( 
    <BrowserRouter>
        <CartContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element= {< ItemListContainer greeting = {saludo} />} />
          <Route path="/categoria/:id" element= {< ItemListContainer greeting = {saludo} />} />
          <Route path="/descuentos" element= {< Descuentos />} />
          <Route path="/contacto" element= {< Contacto />} />
          <Route path="/detalle/:idProducts" element= {< ItemDetailContainer />} />
          <Route path="/cart" element= {<Cart />} />
          <Route path='/cartfinal/:idOrder' element={< CardFinalContainers />} />
        </Routes>
        <Footer />
        </CartContextProvider>
    </BrowserRouter>    
  );
}

export default App;
