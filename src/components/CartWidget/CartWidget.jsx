import './cartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div style={{fontSize:"1.5em", color:'navy'}}>
      <FontAwesomeIcon icon={faShoppingBag} />
            { cantidadTotal() !== 0 && cantidadTotal()}
    </div>
  )
}

export default CartWidget;
