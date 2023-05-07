import Link from "next/link";
import Image from "next/image";
import { FaHome, FaDashcube } from "react-icons/fa";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-600 text-white p-3 rounded-lg inline-block">
              <FaHome size={20} />
            </div>
          </Link>
          <span className=" border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 p-3 my-4 rounded-lg inline-block hover:bg-gray-200 cursor-pointer">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 p-3 my-4 rounded-lg inline-block hover:bg-gray-200 cursor-pointer">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 p-3 my-4 rounded-lg inline-block hover:bg-gray-200 cursor-pointer">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 p-3 my-4 rounded-lg inline-block hover:bg-gray-200 cursor-pointer">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link href=""></Link>
        </div>
      </div>
      <main className="w-full ml-20">{children}</main>
    </div>
  );
};

export default Sidebar;
