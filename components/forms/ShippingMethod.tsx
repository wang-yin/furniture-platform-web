export default function ShippingMethod() {
  return (
    <div>
      <h1 className="font-semibold">寄送方式</h1>
      <div className="flex flex-col px-4 gap-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="Shipping"
              value="AAAstore"
              className="cursor-pointer"
            />{" "}
            AAA超商取貨
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="Shipping"
              value="BBBstore"
              className="cursor-pointer"
            />{" "}
            BBB超商取貨
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="Shipping"
              value="CCCstore"
              className="cursor-pointer"
            />{" "}
            CCC超商取貨
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="Shipping"
              value="Home"
              className="cursor-pointer"
            />{" "}
            宅配到家
          </label>
        </div>
      </div>
    </div>
  );
}
