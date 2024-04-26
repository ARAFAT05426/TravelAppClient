import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Sections/Footer";

const Root = () => {
  return (
    <main>
      <section className="h-16">
        <Navbar />
      </section>
      <section className="min-h-[100vh-64px]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Root;
