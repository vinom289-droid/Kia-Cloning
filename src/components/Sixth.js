import grid from '../assest/grid.png'
import gps from '../assest/location.png'
import money from '../assest/money.png'
import price from '../assest/price.png'
import note from '../assest/note.png'
function Sixth() {
    return (
        <section className="flex w-full h-[600px]">
            <div className="w-1/2 grid grid-cols-2">
                <div className="border flex flex-col items-center justify-center gap-6 bg-gray-100 hover:bg-gray-200">
                    <img src={gps} alt="gps" className='object-cover w-[120px] h-12 overflow-hidden transition-transform duration-200 hover:scale-110 '/>
                    <a href="find" className="text-[20px] text-center text-[#05141F] font-normal hover:underline decoration-[1px] underline-offset-2 cursor-pointer">Find a Dealer</a>
                </div>
                <div className="border flex flex-col items-center justify-center gap-6 bg-gray-100 hover:bg-gray-200">
                    <img src={money} alt="gps" className='object-cover w-[140px] h-12 overflow-hidden transition-transform duration-200 hover:scale-110 ' />
                    <a href="find" className="text-[20px] text-center text-[#05141F] font-normal hover:underline decoration-[1px] underline-offset-2 cursor-pointer">Offers and <br />Incentives</a>
                </div>
                <div className="border flex flex-col items-center justify-center gap-6 bg-gray-100 hover:bg-gray-200">
                    <img src={price} alt="gps" className='object-cover w-[130px] h-28 overflow-hidden transition-transform duration-200 hover:scale-110 ' />
                    <a href="find" className="text-[20px] text-center text-[#05141F] font-normal hover:underline decoration-[1px] underline-offset-2 cursor-pointer">Get a Local<br />Price</a>
                </div>
                <div className="border flex flex-col items-center justify-center gap-6 bg-gray-100 hover:bg-gray-200">
                    <img src={note} alt="gps" className='object-cover mt-3 w-[220px] h-28 p-0 overflow-hidden transition-transform duration-200 hover:scale-110 ' />
                    <a href="find" className="text-[20px] text-center text-[#05141F] font-normal hover:underline decoration-[1px] underline-offset-2 cursor-pointer">Certified Pre-<br />Owned</a>
                </div>
            </div>

            <div className="w-1/2 relative">
                <img src={grid} alt="" className='h-full'/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent"></div>
                <div className='absolute top-36 left-52 border-t-4 border-b-4 '>
                    <h2 className='font-bebas [letter-spacing:-3px] text-[95px] leading-none text-white'>10-YEAR</h2>
                    <h2 className="font-bebas [letter-spacing:-3px] text-[87px] leading-[65px] text-white">100,000-</h2>
                    <h2 className='font-bebas [letter-spacing:-2px] text-center text-[46px] leading-[85px] text-white'>MILE WARRANTY</h2>
                </div>
                <div className="absolute bottom-[90px] left-10">
                    <h2 className="text-white text-[13px] font-medium leading-[13px] text-start">
                        INDUSTRY-LEADING WARRANTY
                    </h2>

                    <h2 className="text-white text-[40px] font-semibold leading-none [letter-spacing:-2px] -ml-1">
                        Drive with peace of mind
                    </h2>
                </div>
                <div className='absolute bottom-8 left-10'>
                    <button className='text-white border-[1px] font-medium p-2 px-9 hover:bg-white hover:text-[#05141F] transition duration-300'>Learn more</button>
                </div>
            </div>

        </section>
    )
}
export default Sixth