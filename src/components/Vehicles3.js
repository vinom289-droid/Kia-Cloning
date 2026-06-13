import seltos from '../assest/seltos.avif'
function Vehicles3() {
    return (
        <section className="w-full object-cover relative">
            <img src={seltos} alt="seltos" className='w-full h-[450px] object-cover' />
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className='absolute top-16 left-[620px] text-white font-semibold text-[30px]'>
                <h1 className=''>2026 Seltos</h1>
            </div>
            <div className='flex absolute bottom-16 left-72 text-white gap-4'>
                <div className='border-r-[1px] border-white px-5 py-2 text-center'>
                    <h1 className='text-center'>As shown EPA-est. 27 MPG HWY*</h1>
                    <h1 className='text-center font-semibold text-[28px]'>EPA-est. 34 MPG HWY</h1>
                </div>
                <div className='border-r-[1px] border-white px-5 text-center'>
                    <h1>Standard driver- <br />assistance features</h1>
                    <h1 className='text-center font-semibold text-[28px]'>9</h1>
                </div>
                <div className=' text-center px-5'>
                    <h1>Available <br /> turbocharged*</h1>
                    <h1 className='text-center font-semibold text-[28px]'>190 hp</h1>
                </div>
            </div>

        </section>
    )
}
export default Vehicles3