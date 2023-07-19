import FactoryList from "../components/FactoryList";
import Home from "../components/Home";
import Images from "../components/Images";
import Login from "../components/Login";
import MainLayout from "../components/MainLayout";
import NewsList from "../components/NewsList";
import ProductList from "../components/ProductList";

const publicRoutes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/san-pham", component: ProductList, layout: MainLayout },
  { path: "/tin-tuc", component: NewsList, layout: MainLayout },
  { path: "/co-so-san-xuat", component: FactoryList, layout: MainLayout },
  { path: "/hinh-anh-su-kien", component: Images, layout: MainLayout },
  { path: "/dang-nhap", component: Login, layout: null },
];

export { publicRoutes };
