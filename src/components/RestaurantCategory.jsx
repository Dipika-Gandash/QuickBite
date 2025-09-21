import RestaurantMenuItems from "./RestaurantMenuItems";
import { useState } from "react";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  isNested = false,
}) => {
  const [nestedShowIndex, setNestedShowIndex] = useState(null);
  const handleToggle = () => {
    setShowIndex();
  };

  const isNestedCategory = Object.hasOwn(data, "categories");
  return (
    <div
      className={`w-full bg-gray-100 shadow-md p-6 my-4 rounded-lg cursor-pointer ${
        isNested ? "ml-4" : ""
      }`}
    >
      <div className="flex justify-between items-center" onClick={handleToggle}>
        <span className="font-bold text-lg">
          {data.title} (
          {isNestedCategory ? data.categories.length : data.itemCards.length})
        </span>
        <span className="text-2xl transition-transform duration-300 transform">
          {showItems ? "-" : "+"}
        </span>
      </div>

      {showItems && (
        <div className="mt-4">
          {isNestedCategory ? (
            <div>
              {data.categories.map((nestedCategory, index) => (
                <RestaurantCategory
                  key={nestedCategory.title + index}
                  data={nestedCategory}
                  showItems={index === nestedShowIndex}
                  setShowIndex={() =>
                    setNestedShowIndex(index === nestedShowIndex ? null : index)
                  }
                  isNested={true}
                />
              ))}
            </div>
          ) : (
            <RestaurantMenuItems items={data.itemCards} />
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
