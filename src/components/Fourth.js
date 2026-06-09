import stadium from '../assest/fourthSec.png'
import road from '../assest/road.png'
import cr from '../assest/crr-logo.jpg'
function Fourth() {
    return (
        <section className='bg-[#05141F] relative'>
            <div className='relative'>
                <img src={stadium} alt="kia" className='w-full h-[350px] object-cover mt-0' />
                <div className='absolute top-20 left-20 text-start'>
                    <h3 className='text-white font-semibold text-[42px]'>Inspiration connects us all</h3>
                    <h2 className='text-[15px] text-white mt-2'>Kia powers the FIFA World Cup 2026™ bringing fans, cities, and the global <br></br> game together through innovative mobility and shared passion.</h2>
                    <button className='bg-white p-7 py-4 mt-4 font-medium hover:underline'>Explore Kia x FIFA</button>
                </div>
                <div>
                    <img src={road} alt="road" className='w-full h-[150px] object-cover mt-10 opacity-35' />
                </div>
                <div className='absolute top-[420px] left-20'>
                    <h3 className='text-white font-semibold text-4xl'>Trusted by consumers.</h3>
                    <p className='text-white font-normal mt-3'>Explore Kia models that made customer<br></br>Reports' Recommended list for 2026</p>
                </div>
            </div>
            <div className='absolute top-[420px] left-[700px]'>
                <img src={cr} alt="Consumer Reports" className='w-[300px]'/>
            </div>
            <div className='absolute top-[500px] right-10'>
                <a href='view'className='text-white text-[17px] font-normal hover:underline'> View Recommended</a>
            </div>
        </section>
    )
}
export default Fourth