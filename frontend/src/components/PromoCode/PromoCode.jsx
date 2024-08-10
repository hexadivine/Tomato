import './PromoCode.css'

function PromoCode() {
  return (
    <div className='promo-code'>
        <p>If you have a promo code, enter it here</p>
        <input type="text" placeholder='promo code' />
        <button>Submit</button>
    </div>
  )
}

export default PromoCode