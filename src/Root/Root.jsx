import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

const Root = () => {
  return (
    <main>
      <section className="h-16">
        <Navbar />
      </section>
      <section className="min-h-[100vh-64px]">
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
