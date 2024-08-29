import { daftar } from "./data";

export default function App() {
  return (
    <div className="flex justify-start w-full bg-gray-100">
      <div
        id="categories"
        className="w-3/12 px-2 py-4 bg-white border border-r md:w-1/12"
      >
        <ul className="flex flex-col font-semibold tracking-tighter text-white gap-y-2">
          <li className="btn-style">Makanan</li>
          <li className="btn-style">Minuman</li>
          <li className="btn-style">Cemilan</li>
          <li className="btn-style-2">Transaksi</li>
        </ul>
      </div>
      <div id="content" className="w-full ">
        <header className="flex justify-between px-2 py-4 bg-white border-b">
          <div className="flex justify-center w-6/12 ">
            <input
              type="text"
              placeholder="Cari Menu Anda disini"
              className="w-full border-gray-300 border px-3 rounded shadow-sm bg-slate-100 text-md"
            />
            <button className="px-6 py-2 ml-3 text-white bg-pink-600 rounded-r ">
              Cari
            </button>
          </div>
          <div className="flex items-center justify-center px-6 py-2 gap-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-red-100 border rounded-full border-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
            <h1>
              <span className="font-semibold st-icon-pandora">Markonah</span>
              <code className="text-xs text-gray-700"> Admin</code>
            </h1>
          </div>
        </header>
        <div id="body" className="flex w-full overflow-auto">
          <div className="w-9/12 px-4 py-2">
            <h1 className="mb-4 text-xl font-semibold text-dark-600">
              Daftar Menu
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg">
              {daftar.map((item) => (
                <div
                  className="relative flex flex-col p-2 bg-white border rounded shadow sm:h-40"
                  key={item.id}
                >
                  <div className="flex items-start w-full ">
                    <div className="overflow-hidden border rounded">
                      <img
                        className="object-cover h-20 w-36"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="px-2">
                      <h1 className="font-bold tracking-tighter text-gray-600">
                        {item.name}
                      </h1>
                      <p className="text-sm tracking-tighter text-slate-400">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 flex items-end justify-between w-full p-2 bottom-2">
                    <div className="font-bold tracking-tighter text-blue-800">
                      Rp. {item.price}
                    </div>
                    <div className="flex items-center p-2 bg-gray-100 border rounded-lg shadow gap-x-6">
                      <div className="flex items-center justify-center p-3 font-bold text-white bg-pink-600 rounded-full shadow cursor-pointer border-sm w-9 h-9">
                        -
                      </div>
                      <div>
                        <span className="font-semibold text-md">2</span>
                      </div>
                      <button className="flex items-center justify-center text-white bg-indigo-600 rounded-full w-9 h-9">
                        <span className="material-icons">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-3/12 p-4 bg-white border-l ">
            <h1 className="mb-4 text-xl font-semibold text-dark-600">
              Pesanan
            </h1>
            <div className="w-full p-1 overflow-auto bg-slate-100 h-80">
              {daftar.slice(0, 5).map((item) => (
                <div
                  className="flex pb-3 border-b items-evenly gap-x-2"
                  key={item.id}
                >
                  <img
                    src={item.img}
                    className="object-cover w-full h-16 "
                    alt=""
                  />
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
        </div>
      </div>
    </div>
  );
}
