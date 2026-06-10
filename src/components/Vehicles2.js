function Vehicles2() {
    return (
        <section className="relative">
            <nav className="bg-white w-full h-14">
                <div className="flex absolute top-4 gap-10 left-4 border-r-[1px] border-gray-500 px-7">
                    <h2 className="text-[#05141F] font-semibold">2026 Seltos</h2>
                    <h2 className="text-[#05141F] font-semibold">$23,790
                        Starting MSRP*</h2> 
                </div>

                <ul className="flex gap-10 ml-20 font-semibold text-[15px] text-[#05141F] absolute top-4 left-80">
                    <li><a href="/vehicles" className='hover:underline'>Trims</a></li>
                    <li><a href="/offers" className='hover:underline'>Offers</a></li>
                    <li><a href="/gallery" className='hover:underline'>Gallery</a></li>
                    <li><a href="/features" className='hover:underline'>Features</a></li>
                    <li><a href="/safety" className='hover:underline'>Safety</a></li>
                </ul>
                <div className="absolute flex top-2 right-12 gap-6">
                    <button className="bg-[#05141F] p-2 px-5 text-white font-medium hover:underline">View Inventory</button>
                    <button className="bg-white p-2 px-5 text-[#05141F] border-[1px] border-black font-medium hover:underline">Build Yours</button>
                </div>
            </nav>

        </section>
    )
}
export default Vehicles2