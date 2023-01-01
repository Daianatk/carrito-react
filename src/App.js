import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Descuentos from './components/Descuentos/Descuentos';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';

function App() {

  let saludo = 'Bienvenidos a la tienda'

  return ( 
    <BrowserRouter>
        <CartContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting = {saludo} />} />
          <Route path="/categoria/:id" element= {<ItemListContainer greeting = {saludo} />} />
          <Route path="/descuentos" element= {<Descuentos />} />
          <Route path="/contacto" element= {<Contacto />} />
          <Route path="/detalle/:idProducts" element= {<ItemDetailContainer />} />
          <Route path="/cart" element= {<Cart />} />
        </Routes>
        <Footer />
        </CartContextProvider>
    </BrowserRouter>    
  );
}

export default App;
