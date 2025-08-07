import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/blog",
      element: <Blog />
    },
    {
      path: "/pages",
      element: <Pages />
    },
    {
      path: "/elements",
      element: <Elements />
    },
    {
      path: "/cart",
      element: <Cartpage />
    },
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "/user",
      element: <User />
    },
    {
      path: "/order",
      element: <Order />
    },
    {
      path: "/addproduct",
      element: <Addproduct />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);
  return <RouterProvider basename="/react-live-app" router={router} />
}

export default App;
