import { useState } from "react";
import { SidebarWithSearch } from "../../components/Sidebar/SidebarWithSearch";
import { StickyNavbar } from "../../components/Navbar/StickyNavbar";
import { TableWithSearch } from "../../components/Table/TableWithSearch";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const openDrawer = () => setOpen(!open);
  console.log(open);
  console.log(open);
  return (
    <div className="flex flex-col">
      <StickyNavbar isOpen={openDrawer} />
      <div className={`flex flex-row`}>
        <div
          className={`flex ${open
            ? "max-h-full w-[22rem] duration-500"
            : "w-0 h-0 scale-0 duration-700"}`}
        >
          {/* <NavbarSimple isOpen={openDrawer}/> */}
          <SidebarWithSearch />
        </div>
        <div className="flex flex-1 flex-row gap-x-10 z-0">
            <TableWithSearch />
        </div>
      </div>
    </div>
  );
}
