export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center pt-[20px]">
      <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent shadow-md" />
      <h2 className="mt-2 text-gray-400">Loading</h2>
    </div>
  );
}
