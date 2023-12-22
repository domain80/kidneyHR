import {FaCircleUser} from "react-icons/fa6";
import {FiHome} from "react-icons/fi";
import {IoNotificationsOutline, IoStatsChart} from "react-icons/io5";
import {NavLink} from "react-router-dom";

export default function SideNav() {
  return (
    <nav className="w-max px-2 sticky top-0 bg-gray-900 flex flex-col text-gray-50 items-center h-screen justify-between gap-6 py-8">
      <div className="flex flex-col gap-3">
        <NavItem Icon={<img src="/Logomark.svg" alt="logo" />} link="/" />
        <NavItem Icon={<FiHome />} name="Home" link="/dashboard" />
        <NavItem Icon={<IoStatsChart />} name="Report" link="/report" />
        <NavItem
          Icon={<IoNotificationsOutline />}
          name="Alerts"
          link="/alerts"
        />
      </div>
      <div className="flex flex-col gap-3">
        <NavItem Icon={<FaCircleUser className="w-12" />} link="/settings" />
      </div>
    </nav>
  );
}

function NavItem({
  link,
  Icon,
  name,
}: {
  link: string;
  Icon: React.ReactNode;
  name?: string;
}) {
  return (
    <NavLink
      to={link}
      className={({isActive}) =>
        isActive
          ? "bg-pink-600 text-gray-50 rounded-md p-2  "
          : "rounded-md p-2"
      }
    >
      <figure className="grid gap-0 justify-center items-center text-center">
        <span className="text-center flex items-center justify-center">
          {Icon}
        </span>
        {name ? (
          <figcaption className="text-xs pt-1">
            <span>{name}</span>
          </figcaption>
        ) : (
          <></>
        )}
      </figure>
    </NavLink>
  );
}
