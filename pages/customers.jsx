import React from "react";
import { placeholderdata } from "@/data/data";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const customers = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-between p-4">
        <h2></h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="grid my-3 p-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer">
            <span className="text-purple-800 font-medium">Name</span>
            <span className="sm:text-left text-right first-line:text-purple-800 font-medium">
              Email
            </span>
            <span className="hidden md:grid text-purple-800 font-medium">
              Last Order
            </span>
            <span className="hidden sm:grid text-purple-800 font-medium">
              Method
            </span>
          </div>
          <ul>
            {placeholderdata.map((order, id) => (
              <li
                key={id}
                className="text-gray-600 bg-gray-100 hov er:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple300 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">{`${order.name.first} ${order.name.last}`}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">{`${order.name.first}@gmail.com`}</p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
