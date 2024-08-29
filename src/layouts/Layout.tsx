import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start w-full bg-gray-100">
      <SideBar />
      <div id="content" className="w-full ">
        <Header />
        <div id="body" className="flex w-full overflow-auto h-4/5">
          {props.children}
        </div>
      </div>
    </div>
  );
}
