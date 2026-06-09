import Kia from '../assest/kia-3.jpg'
import { useNavigate } from 'react-router-dom'
function Second() {
    const nav = useNavigate()

    return (
        <section className='relative'>
            <img src={Kia} alt="kia" className='w-100 h-100' />
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className='absolute top-[63%] left-14'>
                <h1 className='text-5xl font-semibold text-white'>Kia Summer Sticker 
                    <br />Sales Event</h1>
                <p className='mt-3 text-x1 font-normal text-white'>(K4 excluded from sales event)</p>
                <button onClick={()=> nav ('/shopOffers')} className="mt-2 bg-white text-black px-16 py-4 font-medium">
                    <span className="border-b-2 border-transparent hover:border-black">
                        Shop Offers
                    </span>
                </button>
            </div>


        </section>
    )
}
export default Second
