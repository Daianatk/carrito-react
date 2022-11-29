import './cartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ({number}) => {
  return (
    <div style={{fontSize:"1.5em", color:'navy'}}>
      <FontAwesomeIcon icon={faShoppingBag} />
      <p className='text-number'>{number}</p>
    </div>
  )
}

export default CartWidget;
