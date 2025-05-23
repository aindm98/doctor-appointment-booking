import { ReactNode } from "react";
import Sidebar from "./sidebar";
// import { ThemeSwitcher } from "./../theme-switcher";
// import User from "./user";
// import { Badge, Button } from "@nextui-org/react";
// import { Bell } from "lucide-react";
// import NavHeading from "./nav-heading";
const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="scrollbar-thin max-h-screen w-full overflow-y-scroll">
        <nav className="sticky mx-auto top-0 z-10  flex w-full items-center justify-between border-b bg-white px-3 py-4 dark:bg-dark md:py-5 ">
          {/* <NavHeading />
          <div className="flex items-center gap-3">
            <Badge content="5" size="lg" color="primary">
              <Bell className="text-zinc-500 dark:text-zinc-400" />
            </Badge>
            <ThemeSwitcher />
            <User />
          </div> */}
          Dashboard
        </nav>
        <main className="mx-auto min-h-[calc(100vh_-_90px)] max-w-7xl flex-1 px-3 py-4">
          {children}
        </main>
      </div>
     
    </div>
  );
};
export default Navbar;
