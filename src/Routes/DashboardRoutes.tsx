import { Navigate } from "react-router-dom";
import { AdminLayout } from "../pages/dashboard/layout/AdminLayout";
import { LazyRoute } from "../utils/helpers";
import { IModuleRouter } from "./index";

export const AdminDashRouter: IModuleRouter = {
  key: "dashboard",
  guard: (loggedIn) => loggedIn,
  layout: AdminLayout,
  routes: [
    {
      index: true,
      element: <Navigate to="/dashboard" />,
    },
    LazyRoute(
      {
        path: "/members",
      },
      () => import("../pages/dashboard/Members")
    ),
    LazyRoute(
      {
        path: "/attendance",
      },
      () => import("../pages/dashboard/Attendance")
    ),
    {
      path: "*",
      element: <div>Not found</div>,
    },
  ],
};
