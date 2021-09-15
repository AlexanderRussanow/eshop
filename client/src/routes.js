import { ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./consts"
import AdminDashboard from "./pages/AdminDashboard"
import Auth from "./pages/Auth"
import Cart from "./pages/Cart"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"

export const privateRoutes = [
   {
      path: ADMIN_ROUTE,
      Component: AdminDashboard
   },
   {
      path: CART_ROUTE,
      Component: Cart
   },
   {
      path: SHOP_ROUTE,
      Component: Shop
   },
   {
      path: DEVICE_ROUTE + '/:id',
      Component: DevicePage
   }
]

export const publicRoutes = [
   {
      path: SHOP_ROUTE,
      Component: Shop
   },
   {
      path: LOGIN_ROUTE,
      Component: Auth
   },
   {
      path: REGISTRATION_ROUTE,
      Component: Auth
   },
   {
      path: DEVICE_ROUTE + '/:id',
      Component: DevicePage
   }
]