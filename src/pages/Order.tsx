import Cart from "../components/Cart";
import Menus from "../components/Menus";
import Layout from "../layouts/Layout";

export default function Order() {
  return (
    <Layout>
      <Menus />
      <Cart />
    </Layout>
  );
}
