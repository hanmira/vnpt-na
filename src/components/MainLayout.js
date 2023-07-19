import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ScrollTopButton from "./ScrollTopBtn";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollTopButton />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
