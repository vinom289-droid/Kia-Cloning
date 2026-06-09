import come1 from '../assest/coming-2.avif'
import come2 from '../assest/coming-1.avif'

function Fifth(){
    return(
        <section className="bg-[#05141F] w-full h-[700px] relative">
            <h3 className="text-white font-semibold text-center text-[32px] p-14">Coming soon</h3>
            <div className="flex mx-16 gap-11 ">
                <div>
                    <img src={come1} alt="come1"/>
                    <h2 className='text-white text-center text-[18px] font-medium mt-3'>All-new 2027 Seltos Family</h2>
                    <p className='text-white text-center text-[15px] mt-2 font-normal'>Introducing the all-new Seltos, arriving with capable technology, expansive space, and a brand new hybrid powertrain to give you more ways to move.</p>
                    <button className='bg-white px-14 py-3 mt-5 mx-auto block text-[#05141F] font-medium hover:underline'>Learn more</button>
                </div>
                <div>
                    <img src={come2} alt="come2"/>
                    <h2 className='text-white text-center text-[18px] font-medium mt-3'>All-new 2027 Kia EV3</h2>
                    <p className='text-white text-center text-[15px] mt-2 font-normal'>The all-new EV3 expands Kia's electric lineup with long-range capability, modern design, and an accessible way to step into all-electric driving.</p>
                    <button className='bg-white px-14 py-3 mt-5 mx-auto block text-[#05141F] font-medium hover:underline'>Learn more</button>
                </div>
            </div>
        </section>
    )
}
export default Fifth