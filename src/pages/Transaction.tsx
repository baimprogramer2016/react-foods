import Title from "../components/Title";
import Layout from "../layouts/Layout";
import { daftar, transaksi } from "../data";
import { Link } from "react-router-dom";

export default function Transaction() {
  return (
    <Layout>
      <div className="w-6/12 min-h-screen px-4 py-2">
        <Title>Daftar Transaksi</Title>
        <div className="p-4 bg-white border rounded-lg shadow">
          <table className="w-full overflow-hidden bg-white rounded-md table-auto">
            <thead className="p-3 text-white text-md font-base btn-style">
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Tabel</th>
                <th>Status</th>
                <th>Total</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {transaksi.map((item) => (
                <tr className="cursor-pointer hover:bg-blue-200">
                  <td className="p-4">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.table}</td>
                  <td>{item.status}</td>
                  <td>{item.total}</td>
                  <td>
                    <Link to="/order/makanan">
                      <button className="text-white btn-style-2">Order</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
