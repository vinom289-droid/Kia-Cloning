import logo from '../assest/kia logo.png'
function Shop2(){
    return(
        <footer className="bg-[#05141f] h-[530px] relative flex justify-around">
            <img src={logo} alt="kia" className='absolute top-9 left-10 w-24 h-24' />
            <div className="text-white absolute top-32 left-[50px] font-bold text-[17px] h-[200px]">
                <ul className='flex flex-col gap-6 mt-6'>
                    <li><a href="V" className=''>Vehicles</a></li>
                    <li><a href="O" className=''>Offers</a></li>
                    <li><a href="C" className=''>Certified Pre-Owned</a></li>
                    <li><a href="W" className=''>Why Kia</a></li>
                    <li><a href="K" className=''>Kia Collective</a></li>
                    <li><a href="O" className=''>Owners</a></li>
                </ul>
            </div>
            <div className='absolute top-[155px] left-72  border-l-[1px] border-gray-600 pl-5 h-[300px]'>
                <h2 className='text-white font-medium'>About Our Vehicles</h2>
                <ul className='text-gray-400 mt-5 flex flex-col gap-2 text-[14px] font-semibold'>
                    <li><a href="S" className=''>SUV Family</a></li>
                    <li><a href="S" className=''>Sedan Family</a></li>
                    <li><a href="E" className=''>Electrified Vehicles</a></li>
                    <li><a href="K" className=''>Kia Connect</a></li>
                    <li><a href="A" className=''>Accessories</a></li>
                    <li><a href="R" className=''>Request a Brochure</a></li>
                    <li><a href="W" className=''>Warranty Information</a></li>
                </ul>
            </div>
            <div className='absolute top-[155px] left-[550px] border-l-[1px] border-gray-600 pl-5 h-[300px]'>
                <h2 className='text-white font-medium'>Corporate</h2>
                <ul className='text-gray-400 mt-5 flex flex-col gap-2 text-[14px] font-semibold'>
                    <li><a href="A" className=''>About Us</a></li>
                    <li><a href="C" className=''>Careers</a></li>
                    <li><a href="K" className=''>Kia Finance</a></li>
                    <li><a href="I" className=''>Investors</a></li>
                    <li><a href="C" className=''>Contact Us</a></li>
                    <li><a href="R" className=''>Recalls</a></li>
                    <li><a href="V" className=''>Vulnerability</a></li>
                    <li><a href="C" className=''>Communication Preferences</a></li>
                </ul>
            </div>
            <div className='absolute top-[155px] right-[400px]  border-l-[1px] border-gray-600 pl-5 h-[300px]'>
                <h2 className='text-white font-medium'>What's New</h2>
                <ul className='text-gray-400 mt-5 flex flex-col gap-2 text-[14px] font-semibold'>
                    <li><a href="F" className=''>Kia x FIFA</a></li>
                    <li><a href="G" className=''>Kia Gear</a></li>
                    <li><a href="K" className=''>Kia EasyBuy®</a></li>
                    <li><a href="C" className=''>Concept Vehicles</a></li>
                    <li><a href="S" className=''>Social Impact</a></li>
                    <li><a href="K1" className=''>Kia Media</a></li>
                    <li><a href="K" className=''>Kia Talent Lounge</a></li>
                </ul>
            </div>
            <div className='absolute top-[155px] right-16 border-l-[1px] border-gray-600 pl-5 h-[300px]'>
                <h2 className='text-white font-medium'>Legal</h2>
                <ul className='text-gray-400 mt-5 flex flex-col gap-2 text-[14px] font-semibold'>
                    <li><a href="P" className=''>Privacy</a></li>
                    <li><a href="T" className=''>Terms of Service</a></li>
                    <li><a href="M" className=''>MPG Disclaimer</a></li>
                    <li><a href="A" className=''>Accessibility</a></li>
                    <li><a href="C" className=''>Cookies Management</a></li>
                    <li><a href="Y" className=''>Your Privacy Choices</a></li>
                    <li><a href="U" className=''>Unsolicited Idea Submission Policy</a></li>
                </ul>
            </div>
            <div className='absolute bottom-8 left-12 flex gap-7'>
                <h3 className='text-white font-semibold border-r-[1px] border-gray-400 pr-6'>ESPAÑOL</h3>
                <h3 className='text-white font-semibold'>한글</h3>
            </div>
            <h3 className='absolute bottom-8 right-12 text-gray-400 text-[10px] font-semibold'>Copyright © 2026 Kia America, Inc.</h3>
        </footer>
    )
}
export default Shop2