import { daftar } from "../data";

export default function Cart() {
  return (
    <div className="flex flex-col w-3/12 p-4 bg-white border-l ">
      <h1 className="mb-4 text-xl font-semibold text-dark-600">Pesanan</h1>
      <div className="w-full p-1 overflow-auto bg-slate-100 h-80">
        {daftar.slice(0, 5).map((item) => (
          <div
            className="flex pb-3 border-b items-evenly gap-x-2"
            key={item.id}
          >
            <img src={item.img} className="object-cover w-full h-16 " alt="" />
            <div className="flex flex-col w-full">
              <h1 className="text-sm font-semibold tracking-tighter">
                {item.name}
              </h1>
              <p>2x</p>
              <p className="text-xs text-gray-600">Lorem ipsum dolor,</p>
            </div>
            <div className="flex flex-col justify-between w-full pr-2">
              <p className="font-semibold text-right">Rp. 32.000</p>
              <button className="flex items-center justify-center p-1 text-sm text-white bg-red-600 rounded cursor-pointer font-base hover:bg-red-700">
                Batal
              </button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <h1 className="mt-2 mb-4 text-sm font-semibold text-dark-600">
        Total Pembayaran
      </h1>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Sub Total </span>
        <span>Rp. 230.000</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Pajak </span>
        <span>Rp. 23.000</span>
      </div>
      <div className="flex justify-between text-sm font-semibold text-gray-600">
        <span>Total </span>
        <span>Rp. 263.000</span>
      </div>
      <div className="flex items-center justify-between mt-4 gap-x-2">
        <button className="w-full px-4 py-2 text-white bg-green-400 rounded">
          Tunai
        </button>
        <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded">
          Qris
        </button>
        <button className="w-full px-4 py-2 text-white bg-yellow-400 rounded">
          Debet
        </button>
      </div>
    </div>
  );
}
