import CartTotal from '../../components/CartTotal/CartTotal'
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo'
import './Order.css'

function Order() {
  return (
    <div className='order-page'>
        <DeliveryInfo />
        <CartTotal  />
    </div>
  )
}

export default Order