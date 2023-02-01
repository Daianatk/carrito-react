import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import CartFinal from '../CartFinal/CartFinal'
import GetOrder from '../util/GetOrder/GetOrder'

export const CardFinalContainers = () => {
    const [orderData, setOrderData] = useState({})
    const [loadingOrder, setLoadingOrder] = useState(true)
    const { idOrder } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetOrder(idOrder)
            .then(info => {
                info.exists()?
                    setOrderData({ id: info.id, ...info.data() })
                    :
                    navigate('/')
            })
            .catch(err => console.log(err))
            .finally(() => {
                window.scrollTo(0, 0)
                setLoadingOrder(false)
            })
    }, [])

  return (
    <div className='container '>
    {
        loadingOrder ?
            < Loading text={'Cargando los datos del pedido'} />
            :
            < CartFinal order={orderData} />
    }
    </div>
  )
}

export default CardFinalContainers
