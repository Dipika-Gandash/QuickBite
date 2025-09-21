import { useState } from "react";

const RestaurantMenuItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const info = item.card.info;
        const [showFull, setShowFull] = useState(false);

        return (
          <div
            key={info.id}
            className="flex justify-between gap-4 border-b border-gray-300 py-6 last:border-b-0"
          >
            {/* Left section: name, price, description */}
            <div className="flex-1">
              <span className="font-semibold text-base">{info.name}</span>
              <span className="block text-gray-700 text-sm mt-1">
                ₹{info.price / 100 || info.defaultPrice / 100}
              </span>

              {info.description && (
                <>
                  <p
                    className={`text-gray-500 text-sm mt-2 transition-all duration-200 ${
                      showFull ? "" : "line-clamp-2"
                    }`}
                  >
                    {info.description}
                  </p>
                  {info.description.length > 80 && (
                    <button
                      onClick={() => setShowFull(!showFull)}
                      className="text-blue-600 text-xs font-semibold mt-1 focus:outline-none"
                    >
                      {showFull ? "Read less" : "Read more"}
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Right section: image + add button */}
            {info.imageId && (
              <div className="flex flex-col items-center w-28">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fit/${info.imageId}`}
                  alt={info.name}
                  className="w-28 h-24 object-cover rounded-lg shadow-md"
                />
                <button
                  className="mt-2 px-4 py-1 text-sm font-semibold rounded-lg border border-green-600 text-green-600 hover:bg-green-50 transition"
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItems;
