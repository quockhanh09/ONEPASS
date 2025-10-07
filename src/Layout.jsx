import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div>
      <Header />
      
      <main>
        <Outlet /> {/* nội dung trang con sẽ render ở đây */}
      </main>
      <Countdown />
      <Footer />
    </div>
  );
}

export default Layout;
