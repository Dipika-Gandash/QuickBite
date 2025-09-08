const ShimmerCard1 = () => {
   return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-2xl animate-pulse">
        <div className="h-8 w-3/4 bg-gray-300 rounded mb-6"></div>
        <div className="h-5 w-1/2 bg-gray-200 rounded mb-8"></div>

        <div className="flex items-center space-x-6">
          <div className="h-32 w-32 bg-gray-300 rounded-lg"></div>

          <div className="flex-1 space-y-4">
            <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-5 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard1;
