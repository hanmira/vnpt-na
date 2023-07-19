import Footer from "./components/Footer";
import Search from "./components/Searchbar";
import Navbar from "./components/Navbar";
import NewItem from "./components/NewItem";
import ProductItem from "./components/ProductItem";
import FactoryItem from "./components/FactoryItem";
import Breadcrum from "./components/Breadcrum";
import Hero from "./components/Hero";
import Sidebar from "./components/SideBar";
import Filter from "./components/Filterbar";
import Tabs from "./components/Tabs";
import Carousel from "./components/Carousel";
import ProductDetail from "./components/ProductDetail";
import NewsDetail from "./components/NewsDetail";
import FactoryDetail from "./components/FactoryDetail";
import ProductList from "./components/ProductList";
import NewsList from "./components/NewsList";
import FactoryList from "./components/FactoryList";
import Login from "./components/Login";
import BreadcrumItem from "./components/BreadcrumItem";
import Images from "./components/Images";
import ImageGallery from "./components/ImageGallery";
import { useEffect } from "react";
import Home from "./components/Home";
import ScrollTopButton from "./components/ScrollTopBtn";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import MainLayout from "./components/MainLayout";
import { Fragment } from "react";
import { NavProvider } from "./components/NavContext";

function App() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar) {
          navbar.classList.add("bg-white");
          navbar.classList.remove("bg-transparent");
          navbar.classList.add("shadow-md");
          navbar.classList.remove("p-5");
          navbar.classList.add("text-black");
          navbar.classList.add("px-5", "py-2");
        }
      } else {
        if (navbar) {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove("bg-white");
          navbar.classList.remove("shadow-md");
          navbar.classList.remove("px-5", "py-2");
          navbar.classList.add("p-5");
          navbar.classList.remove("text-black");
        }
      }
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : MainLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>

      {/* //////////////////////// */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <ScrollTopButton /> */}
      {/* <Footer /> */}
      {/* <Home /> */}
      {/* <ImageGallery /> */}
      {/* <Images /> */}
      {/* <Login /> */}
      {/* <FactoryList /> */}
      {/* <NewsList /> */}
      {/* <ProductList /> */}
      {/* <FactoryDetail /> */}
      {/* <NewsDetail /> */}
      {/* <ProductDetail /> */}
      {/* <Carousel /> */}
      {/* <Sidebar /> */}
      {/* <Filter /> */}
      {/* <Tabs /> */}
      {/* <div className="breadcrum-group">
        <Breadcrum name="thong tin nong san" />
        <BreadcrumItem name={"cam"} />
      </div> */}
      {/* <NewItem /> */}
      {/* <ProductItem /> */}
      {/* <Search /> */}
      {/* <FactoryItem /> */}
    </div>
  );
}

export default App;
