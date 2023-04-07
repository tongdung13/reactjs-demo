import Login from "../pages/auth/Login";

export const ADMIN_ROUTE = "/cms";
export const routeName = {
  LOGIN: "/login",
};

const routesAuth = [
  {
    path: routeName.LOGIN,
    component: Login,
  },
  {
    path: "/",
    component: Login,
  },
];
export { routesAuth };
