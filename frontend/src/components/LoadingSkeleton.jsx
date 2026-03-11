function LoadingSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 animate-pulse">

      <div className="h-6 w-40 bg-gray-200 rounded mb-6"></div>

      <div className="space-y-4">

        {[1,2,3,4,5].map((i) => (
          <div key={i} className="grid grid-cols-4 gap-4">

            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default LoadingSkeleton;