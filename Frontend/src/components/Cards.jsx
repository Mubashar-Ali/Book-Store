import React from "react";

function Cards({ item }) {
  return (
    <div className="my-4 p-4">
      <div className="card w-full md:w-80 h-full bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white dark:border rounded-lg">
        <figure className="overflow-hidden rounded-t-lg">
          <img
            src={item.image}
            alt="Product"
            className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold mb-2 flex justify-between items-center">
            {item.name}
            <div className="badge bg-blue-600 text-white px-2 py-1 text-xs rounded">{item.category}</div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{item.title}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline text-indigo-600 border-indigo-600 text-md">${item.price}</div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition-colors duration-300 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
