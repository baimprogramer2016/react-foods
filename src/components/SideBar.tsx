import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      id="categories"
      className="w-3/12 px-2 py-4 bg-white border border-r md:w-1/12"
    >
      <ul className="flex flex-col font-semibold tracking-tighter text-white gap-y-2">
        <Link to="/order/makanan">
          <li className="btn-style">Makanan</li>
        </Link>
        <Link to="/order/minuman">
          <li className="btn-style">Minuman</li>
        </Link>
        <Link to="/order/cemilan">
          <li className="btn-style">Cemilan</li>
        </Link>
        <Link to="/transaction">
          <li className="btn-style-2">Transaksi</li>
        </Link>
      </ul>
    </div>
  );
}
