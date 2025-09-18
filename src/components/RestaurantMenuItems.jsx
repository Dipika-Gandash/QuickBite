const RestaurantMenuItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b border-gray-200 py-4 last:border-b-0">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold text-base">{item.card.info.name}</span>
              <span className="text-gray-700 text-sm">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </span>
              <p className="text-gray-500 text-sm mt-2">{item.card.info.description}</p>
            </div>
            {item.card.info.imageId && (
              <img
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 object-cover rounded-md"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItems;