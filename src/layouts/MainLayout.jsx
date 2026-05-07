import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {children}

    </div>
  );
}

export default MainLayout;