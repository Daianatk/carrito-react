import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Descuentos from './componentes/Descuentos/Descuentos';
import Contacto from './componentes/Contacto/Contacto';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let saludo = 'Bienvenidos a la tienda'

  return ( 
    <BrowserRouter>
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
    </BrowserRouter>    
  );
}

export default App;
