import { FaThreeDotsVertical, FaShoppingBag } from "react-icons/fa";
import { placeholderdata } from "@/data/data";
import { BsThreeDots } from "react-icons/bs";
const orders = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className=" flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h2>Welcome Back</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm::grid-cols-3 grid-cols-2 items-center justify-between">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden md:grid">Method</span>
          </div>
          <ul>
            {placeholderdata.map((order, id) => (
              <li className="bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                <div className="flex items-center">
                  <div className="bg-purple-200 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-600" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-700 font-semibold">{`£${order.total.toLocaleString()}`}</p>
                    <p className="text-gray-700 font-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 flex items-center sm:text-left text-right">
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-orange-400 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-green-600 text-white p-2 rounded-lg"
                        : "bg-yellow-300 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex ">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDots />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
