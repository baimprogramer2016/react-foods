export default function Header() {
  return (
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
  );
}
