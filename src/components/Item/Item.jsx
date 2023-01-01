import { memo } from 'react'
import { Link } from 'react-router-dom'

const Item = memo(

    ({ products }) => {
        console.log('item')

  return (
    <div style={{ marginLeft: 100}}
        className='col-md-3'
        key={products.id}>
            <div className="card w-100 m-2 card text-center">
                <div className="card-header">
                    {`${products.name} - ${products.categoria}`}
                </div>
                <div className="card-body">
                    <img src={products.foto} alt="imagen-referencial" className="w-100" />
                    {products.price}
                </div>
                <div className="card-footer">
                    <Link to= {`/detalle/${products.id}`}>
                        <button className='btn btn-warning btn-block'>
                        + Detalle del producto
                        </button>
                    </Link>
                </div>
            </div>

        </div>
  )
 }
)

export default Item
