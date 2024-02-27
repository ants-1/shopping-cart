import Banner from "./Banner";

function Checkout() {
  const bannerName: string = "Checkout";

  return (
    <>
      <Banner name={bannerName} />
      <div className="bg-gray-50 w-full flex flex-col">
        <div className="max-w-lg w-full m-auto px-6 py-6 sm:py-10">
          <p className="font-semibold mb-5">Card Information</p>
          <div className="mb-5">
            <label
              htmlFor="input-number"
              className="block text-sm font-medium mb-2"
            >
              Card number
            </label>
            <input
              type="text"
              id="input-number"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-yellow-500 focus:ring-yellow-500 placeholder-gray-300 shadow-sm"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <div className="mb-5">
              <label
                htmlFor="input-exp"
                className="block text-sm font-medium mb-2"
              >
                Expiration
              </label>
              <input
                type="text"
                id="input-exp"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-yellow-500 focus:ring-yellow-500 placeholder-gray-300 shadow-sm"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="input-cvc"
                className="block text-sm font-medium mb-2"
              >
                CVC
              </label>
              <input
                type="text"
                id="input-cvc"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-yellow-500 focus:ring-yellow-500 placeholder-gray-300 shadow-sm"
                placeholder="CVC"
              />
            </div>
          </div>
          <div className="mb-5 text-xs text-gray-400">
            By providing your card information, you allow Company to charge your
            card for future payments in accordance with their terms.
          </div>
          <div className="mb-5">
            <label
              htmlFor="input-name"
              className="block text-sm font-medium mb-2"
            >
              Cardholder name
            </label>
            <input
              type="text"
              id="input-name"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-yellow-500 focus:ring-yellow-500 placeholder-gray-300 shadow-sm"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-5">
            <p className="font-semibold mb-5">Billing address</p>
            <div className="mb-5">
              <label
                htmlFor="input-country"
                className="block text-sm font-medium mb-2"
              >
                Post Code
              </label>
              <input
                type="text"
                id="input-zip"
                className="py-3 px-4 block w-full border-gray-200 rounded-b-lg border-t-0 text-sm focus:border-yellow-500 focus:ring-yellow-500 placeholder-gray-300 shadow-sm"
                placeholder="SW09 1BS"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="input-country"
                className="block text-sm font-medium mb-2"
              >
                Post Code
              </label>
              <input
                type="text"
                id="input-zip"
                className="py-3 px-4 block w-full border-gray-200 rounded-b-lg border-t-0 text-sm focus:border-yellow-500 focus:ring-yellow-500 placeholder-gray-300 shadow-sm"
                placeholder="SW09 1BS"
              />
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between py-1 text-gray-700 font-medium">
              <div>Subtotal</div>
              <div>£9.99</div>
            </div>
            <div className="flex justify-between py-1 text-gray-700 font-medium">
              <div>Total</div>
              <div>£9.99</div>
            </div>
          </div>
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all"
          >
            Pay £9.99
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
