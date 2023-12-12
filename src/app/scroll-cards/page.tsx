export default function Page() {
  return (
    <div className="mx-auto max-w-md px-8">
      <div className="no-scrollbar edge-mask -mx-8 grid min-h-[350px] max-w-3xl snap-x snap-mandatory grid-cols-[repeat(4,100%)] gap-4 overflow-auto px-8 py-4">
        <div className="snap-center snap-always rounded-2xl border bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">Card title 1</h3>
          <p className="text-gray-600">Card description</p>
        </div>
        <div className="snap-center snap-always rounded-2xl border bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">Card title 2</h3>
          <p className="text-gray-600">Card description</p>
        </div>
        <div className="snap-center snap-always rounded-2xl border bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">Card title 3</h3>
          <p className="text-gray-600">Card description</p>
        </div>
        <div className="snap-center snap-always rounded-2xl border bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">Card title 4</h3>
          <p className="text-gray-600">Card description</p>
        </div>
      </div>
    </div>
  );
}
