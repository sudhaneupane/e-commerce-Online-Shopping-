import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendURL, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);
  let accessToken = localStorage.getItem("token");

  const loadOrderData = async () => {
    try {
      if (!accessToken) {
        return null;
      } else {
        const response = await axios.get(
          `${backendURL}/api/order/userorders`,
          { headers: { Authorization: `${accessToken}` } },
          {}
        );
        if (response.status == 200) {
          let allOrdersItem = [];
          response.data.orders.map((order) => {
            order.items.map((item) => {
              item["status"] = order.status;
              item["payment"] = order.payment;
              item["paymentMethod"] = order.paymentMethod;
              item["date"] = order.date;
              allOrdersItem.push(item);
            });
          });
          setOrderData(allOrdersItem.reverse());
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    loadOrderData();
  }, [accessToken]);

  return (
    <div className=" min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-3xl font-bold mb-8 text-gray-800">
          <Title text1={"My"} text2={"Orders"} />
        </div>
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <div className="mt-2 text-gray-600 text-sm">
                    <p>
                      {currency}
                      {item.price} <span className="mx-2">|</span> Quantity:{" "}
                      {item.quantity}
                    </p>
                    <p>Size: {item.size}</p>
                  </div>
                  <div className="mt-2 text-gray-500 text-sm">
                    <p>
                      Date:{" "}
                      <span className="font-medium">
                        {new Date(item.date).toDateString()}
                      </span>
                    </p>
                    <p>
                      Payment:{" "}
                      <span className="font-medium">{item.paymentMethod}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex md:items-center md:gap-8 md:justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      item.status === "Delivered"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  ></span>
                  <p className="text-sm font-medium text-gray-700">
                    {item.status}
                  </p>
                </div>
                <button
                  onClick={loadOrderData}
                  className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md text-sm transition duration-200"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
