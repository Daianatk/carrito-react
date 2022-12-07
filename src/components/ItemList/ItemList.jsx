import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    products.map( products => <Item key={products.id} products={products}/>
    )
  )
}

export default ItemList
