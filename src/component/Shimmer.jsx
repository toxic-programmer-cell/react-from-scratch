const Shimmer = () => {
  return (
    <div className="w-3xs rounded-2xl ease-in-out bg-white p-4 shadow-sm animate-pulse">
      {/* image */}
      <div className="h-40 w-full rounded-xl bg-gray-200" />

      {/* title */}
      <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

      {/* subtitle / cuisines */}
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />

      {/* rating + meta */}
      <div className="mt-4 flex items-center gap-3">
        <div className="h-3 w-14 rounded bg-gray-200" />
        <div className="h-3 w-16 rounded bg-gray-200" />
      </div>

      {/* button area */}
      <div className="mt-4 h-9 w-full rounded-lg bg-gray-200" />
    </div>
  );
};

export default Shimmer;
