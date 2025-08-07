import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Blog } from "./pages/Blog";
import { Pages } from "./pages/Pages";
import { Elements } from "./pages/Elements";
import { Cartpage } from "./pages/Cartpage";
import { Admin } from "./admin/Admin";
import { User } from "./admin/User";
import { Order } from "./admin/Order";
import { Addproduct } from "./admin/Addproduct";
import { LoginPage } from "./components/Loginpage";
import { Register } from "./components/Register";

const App = () => {
  return <>
    <BrowserRouter basename="/react-live-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
