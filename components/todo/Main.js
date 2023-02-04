import { MdDateRange } from "react-icons/md"



const Main = () => {
  return (
        <div className=" flex justify-around">

            <h1 className=" self-center py-3 px-5 min-w-fit w-28 text-center bg-[#ff9f74] text-white rounded-3xl rotate-90 -ml-6 font-semibold">Al-Qur'an</h1>

            <div className="bg-[#ffc6ac] p-5 rounded-2xl border-l-8 border-[#fc9f73]">
                <span className=" text-[#fc9f73]"><MdDateRange />Selasa, 03-feb-2023</span>
                <ul className="text-white">
                    <li>M: /Al-Baqarah/ ayat /16-35/</li>
                    <li>H: /Al-Baqarah/ ayat /16-35/</li>
                </ul>
            </div>

        </div>
  )
}

export default Main