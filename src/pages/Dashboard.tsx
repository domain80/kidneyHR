import { Outlet } from "react-router-dom";
import SideNav from "@/components/custom/sideNav";

export default function Dashboard() {
    return (
        <div className="flex ">
            <SideNav />
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}
