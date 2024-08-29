import { daftar } from "../data";
import Title from "./Title";

export default function Menus() {
  return (
    <div className="w-9/12 px-4 py-2">
      <Title>Daftar Menu</Title>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg">
        {daftar.map((item) => (
          <div
            className="relative flex flex-col p-2 bg-white border rounded shadow sm:h-40"
            key={item.id}
          >
            <div className="flex items-start w-full ">
              <div className="overflow-hidden border rounded">
                <img className="object-cover h-20 w-36" src={item.img} alt="" />
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
  );
}
