import wire from '../assest/wire.webp'
import phone from '../assest/phone.jpg'
import bar from '../assest/bar.jpg'
function Seventh() {
    return (
        <section className="bg-white h-[700px] relative">
            <div className="absolute top-96 flex mx-16 gap-[100px]">
                <div className="text-center flex flex-col">
                    <img src={wire} alt="wire" className='absolute bottom-72 w-80 h-52 object-cover'/>
                    <h2 className="text-[27px] text-[#05141F] font-medium">EV, hybrid, and beyond</h2>
                    <h2 className="text-[18px] text-[#05141F] font-normal mt-2">Discover which Kia electric,<br/> hybrid, or plug-in hybrid vehicle is right for you.</h2>
                    <button className="bg-[#05141F] text-white font-medium p-3 mt-10 hover:bg-white hover:text-[#05141F] hover:border-[1px] border-[#05141F] transition duration 400">Discover your ride</button>
                </div>
                <div className="text-center">
                    <img src={phone} alt="wire" className='absolute bottom-72 right-[525px] w-52 h-52 object-cover' />
                    <h2 className="text-[27px] text-[#05141F] font-medium">Kia Connect</h2>
                    <h2 className="text-[18px] text-[#05141F] font-normal mt-2">Use Kia Access for vehicle <br/>connectivity, boosting security, convenience, and comfort.</h2>
                    <button className="bg-[#05141F] text-white font-medium p-3 px-9 mt-10 hover:bg-white hover:text-[#05141F] hover:border-[1px] border-[#05141F] transition duration 400">Get Connected</button>
                </div>
                <div className="text-center">
                    <img src={bar} alt="wire" className='absolute bottom-72 w-80 h-52 object-cover mt-2' />
                    <h2 className="text-[27px] text-[#05141F] font-medium">Level up your ride</h2>
                    <h2 className="text-[18px] text-[#05141F] font-normal mt-2">Discover genuine Kia accessories <br/> designed to add performance, style, and functionality.</h2>
                    <button className="bg-[#05141F] text-white font-medium p-3 px-9 mt-10 hover:bg-white hover:text-[#05141F] hover:border-[1px] border-[#05141F] transition duration 400">Explore Accessories</button>
                </div>
            </div>
        </section>
    )
}
export default Seventh