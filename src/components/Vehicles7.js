import star from '../assest/5star.png'
import warrant from '../assest/warrant.webp'
function Vehicles7() {
    return (
        <section className="bg-[#05141F] w-full h-[500px] relative">
            <h1 className="text-white text-3xl text-center pt-10">Reliability for the road ahead</h1>
            <div className='flex flex-row justify-between'>
                <img src={star} alt="s-star" className=' h-72' />
                <h1>NHTSA's 5-Star Safety Rating</h1>
                <p>The 2026 Seltos received the highest Overall Vehicle Score by meeting certain safety and performance criteria, so you can drive with greater peace of mind.1 </p>
                <img src={warrant} alt="warrant" className='h-52 mr-28 mt-8' />
                <h1>Industry-Leading Warranty</h1>
                <p>Drive with confidence knowing you're covered by Kia’s industry-leading 10-year/100,000-mile Limited Warranty.2</p>
            </div>
        </section>
    )
}
export default Vehicles7