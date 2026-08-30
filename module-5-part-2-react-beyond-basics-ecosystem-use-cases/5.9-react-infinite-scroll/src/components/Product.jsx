export default function Product({ title, thumbnail, price }) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm md:max-w-[478px]">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden md:h-56">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Title */}
        <h2 className="flex items-center gap-2 text-sm font-medium text-gray-600 md:text-base">
          <span>{title}</span>
        </h2>

        {/* Price + Button */}
        <div className="my-3 flex items-center justify-between">
          <p className="text-lg font-medium text-gray-600">
            ${price}
          </p>

          <button
            type="button"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}