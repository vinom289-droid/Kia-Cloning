import { useState } from "react"
function Vehicles4() {
    const [zipcode, setZipcode] = useState("")
    const [errorDisp, setErrorDisp] = useState(null)
    console.log("Zip Code:", zipcode);
    return (
        <section className="bg-[#e4e4e4] w-full h-screen m-0 flex flex-col justify-center items-center gap-6">
            <h1 className="text-[#05141F] text-4xl">Explore local offers.</h1>
            <p className="text-[#05141F] text-[17px]">Enter your ZIP code below to see local offers.</p>
            <div>
                <input type="text" placeholder="Enter ZIP Code" value={zipcode} onChange={(e) => {

                    if (true)
                        setZipcode(e.target.value)
                    else
                        setErrorDisp("It is invalid")

                }} className="w-44 text-center h-14 border border-gray-400 outline-none bg-white" />
            </div>
            {
                errorDisp && <p className="text-red-700 font-semibold">{errorDisp}</p>
            }
        </section>
    )
}
export default Vehicles4