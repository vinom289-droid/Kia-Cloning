import cr from '../assest/crr-logo.jpg'
function Vehicles5() {
    return (
        <section className="bg-white w-full h-[400px] p-3">
            <div className="flex justify-between items-center">
                <div className="mt-28 ml-16">
                    <h1 className="text-[#05141F] text-3xl font-medium ">Trusted by consumers</h1>
                    <p>The 2026 Kia Seltos is named one of Consumer Report Recommended CUVs of 2026.*</p>
                </div>
                <div className="relative w-[601px] mt-10">

                    <img src={cr} alt="Consumer Reports" className="w-full" />

                    <div className="absolute left-0 right-0 bg-green-500 py-3 px-6 flex justify-end">
                        <a href="view" className="text-black text-2xl">
                            Learn More →
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Vehicles5