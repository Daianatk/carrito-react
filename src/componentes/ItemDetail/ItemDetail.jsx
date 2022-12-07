import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({products}) => {
    const onAdd = (count)=> {
        console.log('La Cantidad seleccionada es: ', count)
      }

  return (
    <div className='card text-center m-5 p-5'>
      <div className="row">
        <div className="col">
          <img className='w-50' src={products.foto} alt="imagen de muestra" />
          <h3>Nombre: {products.name}</h3>
          <h3>Categoria: {products.categoria}</h3>
          <h3>Precio: {products.price}</h3>
        </div>
        <div className="col">
          <ItemCount 
                stock={10} 
                initial={1} 
                onAdd={onAdd}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
