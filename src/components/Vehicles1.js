import pin from '../assest/pin-1.png'
import logo from '../assest/kia logo.png'
import search from '../assest/search.png'   
function Vehicles1(){
    return(
        <header className="parent">
            <nav className="top-0 left-0 w-full z-50 flex items-center justify-between bg-[#05141F] text-white h-14">
                <div className="flex items-center">
                    <img src={logo} alt="gps" className='ml-4 w-[74px] h-[74px]' />
                    <ul className="flex gap-10 ml-20 font-semibold text-[13px]">
                        <li><a href="/vehicles" className='hover:border-b'>Vehicles</a></li>
                        <li><a href="shop" className='hover:border-b'>Shopping Assist</a></li>
                        <li><a href="inventory" className='hover:border-b'>Inventory</a></li>
                        <li><a href="kia" className='hover:border-b'>Kia Innovation</a></li>
                        <li><a href="kia" className='hover:border-b'>Owners</a></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="flex ">
                        <img src={pin} alt="gps" className='w-fit h-8 mr-[-5px]' />
                        <h4 className="font-semibold mt-1 text-[13px] h-fit mr-[50px] hover:border-b">Find a Dealer</h4>
                    </div>
                    <div className="bg-gray-700 relative flex text-white px-14 py-[14px] cursor-pointer hover:bg-slate-600 transition">
                        <img src={search} alt="icon" className='w-7 p-0 ' />
                        <span className="font-semibold text-[14px] ">Search</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Vehicles1