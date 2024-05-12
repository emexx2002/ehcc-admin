
import { SideItem } from "../../../containers/dashboard/Sidebar";
import { DashboardWrapper } from "../../../containers/dashboard/DashboardWrapper";
import { LayoutOutlet } from "../../../containers/dashboard/LayoutWrapper";

export const AdminLayout = () => {
  return (
    <DashboardWrapper sidebar={sidebar}>
      <LayoutOutlet />
    </DashboardWrapper>
  );
};
export const sidebar: SideItem[] = [
  { name: "Members", path: "/members", iconName: "members" },
  { name: "Attendance", path: "/attendance", iconName: "attendance" },
 
];
