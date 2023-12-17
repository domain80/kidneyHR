import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import LabeledInput from "@/components/custom/labeledInput";
import { Table } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dashboard() {
  return (
    <div className="flex ">
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
      <div className="w-full container py-10 ">
        <section>
          <header className="flex justify-between items-center mb-14">
            <h1 className="text-xl">Overview</h1>
            <Button className=" bg-pink-700 text-gray-50 px-8">
              New Report
            </Button>
          </header>

          <div className="flex justify-between items-center">
            <figure className="flex gap-4 items-center">
              <img src="/avatar.png" alt="avatar" className="w-28" />
              <figcaption className="space-y-2">
                <h2 className="text-2xl">Olivia Rhye</h2>
                <span className="text-neutral-600">OR52052</span>
              </figcaption>
            </figure>
            <Button variant={"outline"} className="flex items-center gap-2">
              Edit info
            </Button>
          </div>
        </section>
        <hr />

        <section className="mt-8">
          <header>
            <h2 className="text-2xl font-medium text-neutral-600">Summary</h2>
            <p className="text-neutral-400">View patients medical History</p>
          </header>

          <div className="grid grid-cols-2 gap-20 gap-y-12">
            <section className="mt-10">
              <header className="mb-8">
                <h3 className="font-semibold text-lg text-neutral-600">
                  Basic Information
                </h3>
              </header>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <LabeledInput type="text" label="Name" />
                <LabeledInput type="text" label="Contact" />
                <LabeledInput type="text" label="Age" />
                <LabeledInput type="text" label="Weight -- Kg" />
                <LabeledInput type="text" label="Height -- Ft" />
                <LabeledInput
                  label="Sex"
                  InputElement={
                    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  }
                />
              </div>
            </section>
            <section className="mt-10">
              <header className="mb-8">
                <h3 className="font-semibold text-lg text-neutral-600">
                  Vitals
                </h3>
              </header>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <LabeledInput
                  type="text"
                  label="Breathing Rate -- air per minute"
                />
                <LabeledInput type="text" label="Blood Preassure --mmHg" />
                <LabeledInput type="text" label="Temperature -- Celcius" />
                <LabeledInput type="text" label="Heart Rate -- bpm" />
                <LabeledInput type="text" label="Oxygen Saturation -- %" />
              </div>
            </section>

            <ul className="list-disc list-inside">
              <h3 className="font-semibold text-lg text-neutral-600">
                Current Medical Condition
              </h3>
              <li>Hepatits B</li>
              <li>Interstitial nephritis</li>
            </ul>
            <ul className="list-disc list-inside">
              <h3 className="font-semibold text-lg text-neutral-600">
                Genetic Conditions
              </h3>
              <li>G6PD full defect</li>
              <li>Sickle cell</li>
            </ul>
          </div>
        </section>
        <div className="shadow-md ring-1 ring-gray-300 p-4 py-8 mt-12 rounded-md">
          <h4 className="font-semibold">Past Diagnosis and Reports</h4>
          <Table />
        </div>
      </div>
    </div>
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
      className={({ isActive }) =>
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
