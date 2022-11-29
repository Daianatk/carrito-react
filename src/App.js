import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Descuentos from './componentes/Descuentos/Descuentos';
import Contacto from './componentes/Contacto/Contacto';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting = {'Bienvenidos a la tienda'} />
          </Route>
          <Route exact path="/Descuentos">
            <Descuentos />
          </Route>
          <Route exact path="/Contacto">
            <Contacto />
          </Route>
        </Switch>
        <Footer />
    </BrowserRouter>    
  );
}

export default App;
