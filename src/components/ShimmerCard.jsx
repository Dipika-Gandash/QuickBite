const ShimmerCard = () => {
  return (
    <div className="w-[260px] bg-gray-100 rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-[200px] bg-gray-300" />

      <div className="p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-3" />

        <div className="flex justify-between mb-3">
          <div className="h-4 bg-gray-300 rounded w-1/4" />
          <div className="h-4 bg-gray-300 rounded w-1/3" />
        </div>

        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />

        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  );
};

export default ShimmerCard;
