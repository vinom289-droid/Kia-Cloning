import vehikia from '../assest/vehi-kia.avif'
function Vehicles6() {
    return (
        <section className="relative bg-gray-100 w-full h-[700px]">
            <div className='absolute top-36 right-6 w-[670px]'>
                <img src={vehikia} alt="kia" className='h-96 object-cover w-full' />
            </div>
            <div className='flex flex-col absolute top-16 left-10'>
                <h1 className='text-[#05141F] font-medium text-[15px]'>EX W/ SUNROOF PACKAGE</h1>
                <h1 className='text-[#05141F] font-semibold text-5xl'>Be unstoppable.</h1>
                <p className='mt-6 text-[#05141F] leading-6 w-[450px] text-[18px]'>The 2026 Seltos EX w/ Sunroof Package offers a blend of comfort, style, and performance. With versatile cargo space, high-utility roof rails, and a suite of standard driver-assistance technologies, the EX is built to accompany the adventure ahead. </p>

            </div>
            <div className='flex flex-col absolute top-[300px] left-10 gap-3'>
                <h1 className='font-medium text-[#05141F] text-[18px]'>Exclusive EX w/ Sunroof Package features include:</h1>
                <ul className='list-disc pl-5 text-[#05141F] ml-6 text-[17px]'>
                    <li>Power sunroof for enhanced ambiance and airy driving sensation</li>
                    <li>New, uniquely designed 17-in. alloy wheels w/ gloss black finish</li>
                </ul>
            </div>
            <div className='flex flex-col absolute bottom-24 left-10 gap-3'>
                <h1 className='font-medium text-[#05141F] text-[18px]'>Standard EX features also include:</h1>
                <ul className='list-disc pl-5 text-[#05141F] ml-6 text-[17px]'>
                    <li>Dual Panoramic Display w/ Navigation</li>
                    <li>SynTex seat trim & heated front seats</li>
                    <li>Power driver's seat w/ power lumbar adjustment</li>
                    <li>Wireless phone charger</li>
                    <li>Rear parking sensors</li>
                    <li>Available all-wheel drive (AWD) w/ Lock Mode for enhanced traction & control</li>
                </ul>
            </div>
            <div className='absolute bottom-8 left-10 border-b-[1px] border-[#05141F]'>
                <a href="disclaimer">Disclaimers</a>
            </div>


        </section>
    )
}
export default Vehicles6