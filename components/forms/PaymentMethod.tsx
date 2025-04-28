export default function PaymentMethod() {
  return (
    <div>
      <h1 className="font-semibold">付款方式</h1>
      <div className="flex flex-col px-4 gap-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="COD"
              className="cursor-pointer"
            />{" "}
            貨到付款
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="card"
              className="cursor-pointer"
            />{" "}
            信用卡/金融卡
          </label>
        </div>
      </div>
    </div>
  );
}
