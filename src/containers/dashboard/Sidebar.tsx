import clsx from "clsx";
import { NavLink, useMatch, useLocation, useResolvedPath } from "react-router-dom";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useContext } from "react";
import { useSingleState } from "../../hooks/useSingleState";
import { LogoutContext } from "../../context/LogoutContext";
import { sidebar } from "../../pages/dashboard/layout/AdminLayout";




export const DashboardSidebar = ({ items }: { items: SideItem[] }) => {
  const logout: any = useContext(LogoutContext)
  const collapsed = useSingleState(false);
  const hovered = useSingleState(false);
  const throttledHover = useRef(false);
  const isExpanded = hovered.get || !collapsed.get;
  const isCollapsed = !isExpanded;




  return (
    <aside
      className={clsx(
        "h-full md:flex hidden transition-[width,padding] text-white duration-300 flex-col overflow-y-hidden overflow-x-hidden bg-[#9662F2] relative",
        "w-[271px]" 
      )}
    >
      <div
        className={clsx(
          " py-8 transition-[padding] border-b border-[#FFFFFF1A]",
          isCollapsed ? "" : "px-4 w-full"
        )}
      >
        <img
          src={isCollapsed ? "/images/icon-logo.svg" : "/images/logo.svg"}
          className={clsx(
            isCollapsed ? "w-[72px]" : "w-[109px]",
            "transition-[width] h-auto "
          )}
          alt="yep_logo"
        />
      </div>
      <nav
        id="Sidebar-nav"
        onMouseEnter={() => {
          throttledHover.current = true;
          setTimeout(() => {
            if (throttledHover.current) {
              hovered.set(true);
            }
          }, 400);
        }}
        onMouseLeave={() => {
          hovered.set(false);
          throttledHover.current = false;
        }}
        className={clsx(
          isCollapsed ? "w-full" : "w-full",
          "flex-1 overflow-y-hidden hover:overflow-y-auto  custom-scrollbar"
        )}
      >

        <SidebarItem />


        <div className="absolute w-full bottom-0 h-16 pl-4 gap-3.5 bg-[#9662F2] flex items-center">
          <div className="w-full flex cursor-pointer items-center gap-3.5">
            <img
              src={`/icons/sidebar/logout.svg`}
              className={clsx("h-6 w-6")}
              alt="log_out"
            />

            <span
              onClick={() => logout?.toggleLogout()}
              className={`whitespace-nowrap pc-text-danger ${isCollapsed ? "hidden" : ""
                }`}
            >
              Log Out
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export interface SideItem {
  name: string;
  path?: any;
  iconName?: string;
  children?: SideItem[];
}

export const SidebarItem = ({
  className
}: {
  className?: any;
}) => {


  return (
    <div className="mb-8 border-b border-[#FFFFFF1A] ">
      {sidebar.map((items, index) =>
        <div className="w-full my-[18px] px-3">
          {items.children ?
            <SubItem key={items.name} items={items} />
            :
            <NavLink to={items.path ?? "/"} className={({ isActive }) =>
              clsx(
                "flex items-center gap-3  px-3 py-2 text-sm",
                isActive ? "bg-primary rounded " : ""

              )
            }>
              {({ isActive }) => <>
                <img className={clsx(
                  isActive ? "invert-[100%] brightness-0 " : ""
                )} src={`/icons/sidebar/${items.iconName}.svg`} alt={items.path} />

                <h3 className={clsx("capitalize", isActive ? "text-white" : "")}>{items.name}</h3>
              </>}

            </NavLink>}

        </div>
      )
      }

    </div >


  );
};

export const SubItem = ({ items }: { items: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      <div
        onClick={toggleMenu}
        className={

          clsx(
            "flex items-center gap-3 cursor-pointer text-sm  px-3 py-2",
            pathname.includes(items.path) ? "bg-primary rounded  " : ""

          )
        }>
        <img className={clsx(
          pathname.includes(items.path) ? "invert-[100%] brightness-0 h-4 w-4" : ""
        )} src={`/icons/sidebar/${items.iconName}.svg`} alt={items.path} style={{ objectFit: "contain" }} />
        <h3 className={clsx("capitalize", pathname.includes(items.path) ? "text-white" : "")}>{items.name}</h3>

        <img src="/icons/arrow-down.svg" alt="" className={clsx("capitalize ml-auto", isOpen && "rotate-180", pathname.includes(items.path) ? "invert-[100%] brightness-0" : "")} />
      </div>
      {isOpen && <>
        {items.children.map((item: any) =>
          <>
            <NavLink to={item.path ?? "/"} className={({ isActive }) =>
              clsx(
                "flex items-center gap-3  my-2 px-3 py-2 text-xs",
                isActive ? "bg-[#EDE6F3] rounded " : ""

              )
            }>
              {({ isActive }) => <>
                <img className={clsx(
                  isActive ? "" : "invert-[100%] brightness-0"
                )} alt="" /> <h3 className={clsx("capitalize", isActive ? " " : "")}>{item.name}</h3>
              </>}

            </NavLink>
          </>
        )}
      </>}



    </div>
  )
}