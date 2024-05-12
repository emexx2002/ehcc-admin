import React, { useState } from "react";
import NotificationIcon from "../../components/common/NotificationIcon";
import NotificationSidebar from "../../components/common/NotificationSidebar";
import { IoNotificationsOutline } from "react-icons/io5";
import SearchInput from "../../components/FormInputs/SearchInput";
import { Link, useLocation } from "react-router-dom";

const _extractInitials = (val: string) => {
  const _first = val.split(" ")[0].slice(0, 1);
  const _second = val?.split(" ")[1]?.slice(0, 1);
  return `${_first.toLocaleUpperCase()}${_second && _second.toLocaleUpperCase() }`;
};

const DashboardHeader = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { pathname } = useLocation()

  console.log(pathname)


  const _openNav = () => {
    setIsNotificationOpen(true);
  };
  return (
    <header className="h-20 w-full sticky top-0 bg-white shadow-sm z-50 overflow-hidden">
      <div className="px-6 h-full flex justify-between items-center">
        <div>
         <h3 className="capitalize">{pathname.replace("/","")}</h3>
        </div>
        <div className="flex items-center">


          <div className="flex items-center gap-3 px-6">
            <NotificationSidebar
              setIsNotificationOpen={setIsNotificationOpen}
              isNotificationOpen={isNotificationOpen}
            />
            <div
              onClick={_openNav}
              className={`w-10 h-10 border rounded flex justify-center items-center  bg-opacity-20 cursor-pointer ${isNotificationOpen ? "bg-pc-lightblue" : "bg-transparent"
                } `}
            >
              <div className="relative p-2 ">
                <span className="w-2 h-2 absolute bg-red-500 rounded-full z-10 top-1 right-[0.45rem] "></span>
                <IoNotificationsOutline size={16} />
              </div>
            </div>
            <div className="h-[36px] border-r border-[#ECEDEE]" />
            <Link to="/profile" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-[#E8E5EF] text-[#111111] text-sm font-medium rounded-full flex items-center justify-center">
                {_extractInitials(`${"Demilade Olabode"} `)}
              </span>
              <div>
                <h3 className="text-sm">Deji Olabode</h3>
                <h3 className="text-xs text-[#978AAE]">Super Admin</h3>
              </div>
            </Link>



          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
