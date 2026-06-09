import Hybrid from '../assest/2027 hybrid.avif'
import K4 from '../assest/2026 K4.jpg'
import Sport from '../assest/sport.jpg'
function Third() {
    return (
        <section className="bg-[#05141F] py-16 relative">
            <div className="flex justify-center gap-8 max-w-7xl mx-auto px-6 ">
                <div className='relative overflow-hidden transition-transform duration-200 hover:scale-110'>
                    <img src={Hybrid} alt="Hybrid" className="w-[400px] h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className='absolute left-6 top-[360px]'>
                        <h3 className='text-white font-bold text-[10px]'>BUILT FOR POWER & SPACE</h3>
                        <p className='text-white font-semibold text-[20px]'>2027 Telluride Turbo-Hybrid</p>
                        <button className='bg-transparent mt-4 text-white border-[1px] p-4 font-semibold hover:bg-white hover:text-black transition- duration-300'>Meet Telluride Hybrid</button>
                    </div>
                </div>
                <div className='relative overflow-hidden transition-transform duration-200 hover:scale-110'>
                    <img src={K4} alt="K4" className="w-[400px] h-[500px] object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className='absolute left-6 top-[360px]'>
                        <h3 className='text-white font-bold text-[10px]'>AWE-INSPIRING AGILITY</h3>
                        <p className='text-white font-semibold text-[20px]'>2026 K4</p>
                        <button className='bg-transparent mt-4 text-white border-[1px] p-4 px-16 font-semibold  hover:bg-white hover:text-black transition duration-300'>Meet K4</button>
                    </div>
                </div>

                <div className='relative overflow-hidden transition-transform duration-200 hover:scale-110'>
                    <img src={Sport} alt="Sportage" className="w-[400px] h-[500px] object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
                    <div className='absolute left-6 top-[360px]'>
                        <h3 className='text-white font-bold text-[10px]'>RANGE MEETS CONFIDENCE</h3>
                        <p className='text-white font-semibold text-[20px]'>2026 Sportage Hybrid</p>
                        <button className='bg-transparent mt-4 text-white border-[1px] p-4 font-semibold  hover:bg-white hover:text-black transition- duration-300'>Meet Sportage Hybrid</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Third
