import { assets } from '../../assets/assets'
import './AppPromotion.css'

function AppPromotion() {
  return (
    <div className='app-promotion'>
        <p>For Better Experience Download</p>
        <p>Tomato App</p>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
  )
}

export default AppPromotion