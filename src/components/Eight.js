import kit from '../assest/kit.png'
function Eight(){
    return(
        <section className="h-[200px] relative">
             <img src={kit} alt="kit" className='w-full h-[360px] object-cover'/>
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent h-[360px]"></div>
             <div className='absolute top-[80px] left-20'>
                <h2 className='text-white font-semibold text-[45px]'>Kia Gear</h2>
                <p className='text-white font-normal text-[15px]'>Designed for the drive, inspired by Kia. Explore our stylish hats, drinkware, <br />  bags and other branded merchandise.</p>
             </div>
            <button className='text-[#05141F] font-medium absolute top-[220px] left-20 p-3 px-14 bg-white text-[15px] hover:underline'>Shop Now</button>
        </section>
    )
}
export default Eight