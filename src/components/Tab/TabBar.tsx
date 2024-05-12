import React, { useState } from 'react'


interface TabBarITF {
    tabs:string[],
    onChange?: (e: any) => void;
}

const TabBar = ({tabs} : TabBarITF) => {
    const [active,setActive] = useState<string>(tabs[0])

    const handleTabChange = (val:string | any) => {
        setActive(val)
    }
  return (
    <div className='flex h-[40px] border-b items-center gap-6'>
        {
            tabs.map((items:string) =>  <Tab active={active} label={items} onClick={() => handleTabChange(items)} />)
        }
       
    </div>
  )
}

const Tab = ({ active, label, onClick }: { active: string, label: string, onClick: (param:any) => void }) => {

    return (
      <button onClick={() => onClick(label)} className={`${active === label ? " h-full text-xs min-w-[84px] text-[#6839BB] flex border-b border-[#6839BB]  items-start justify-center font-medium lg:text-sm shadow-sm px-2 lg:px-3 capitalize" : "h-[40px] min-w-[84px] text-xs lg:text-sm flex rounded-b-sm bg-white text-[#9CA3AF] font-medium items-start justify-center px-2 lg:px-3 capitalize"}`}>
        {label}
      </button>
    )
  }

export default TabBar