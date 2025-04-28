export default function DiscountCode() {
  return (
    <div className="outline mt-4 p-3 rounded-lg">
      <label className="font-semibold point">
        輸入優惠碼
        <input
          type="text"
          className="ml-2 border-1 border-gray-400 w-40 xs:w-55 md:w-35"
        />
        <button className="button bg-gray-400 py-[1px] px-2 rounded-r-sm text-white font-normal cursor-pointer">
          使用
        </button>
      </label>
    </div>
  );
}
