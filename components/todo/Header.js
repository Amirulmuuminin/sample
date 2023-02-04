import { HiMenuAlt4 } from "react-icons/hi"
import { MdOutlineNotificationsActive } from "react-icons/md"

const Header = () => {
  return (
    <div className=" p-5">
        <div className=" flex justify-between w-full text-base">
            <HiMenuAlt4 />
            <MdOutlineNotificationsActive />
        </div>
        <h1 className=" font-mono font-semibold mt-5">/Nama/Murid</h1>
    </div>
  )
}

export default Header