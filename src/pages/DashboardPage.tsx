import LabeledInput from "@/components/custom/labeledInput";
import { cn } from "@/lib/utils";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

export default function DashboardPage() {
    const enum tStat {
        "ongoing" = "Ongoing",
        "complete" = "Complete",
        "pending" = "Pending",
        "notStarted" = "Not started",
    }
    const datasource = [
        {
            key: 1,
            name: "Olivia Mensah",
            tStat: tStat.ongoing,
            email: "olivia@mensah.com",
            condition: "aHUS",
        },
        {
            key: 2,
            name: "Papa Nii",
            tStat: tStat.notStarted,
            email: "papa@niiman.com",
            condition: "Cystinosis",
        },
        {
            key: 3,
            name: "Adam Sosu",
            tStat: tStat.pending,
            email: "adam@sosua.com",
            condition: "Kidney Stones",
        },
        {
            key: 4,
            name: "Olivia Mensah",
            tStat: tStat.complete,
            email: "olivia@mensah.com",
            condition: "aHUS",
        },
    ];
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text: string) => {
                return (
                    <>
                        <span className="p-2 rounded-full text-fuchsia-600 bg-fuchsia-100 font-semibold">
                            {text.split(" ")[0].at(0)}
                            {text.split(" ")[1].at(0)}
                        </span>
                        {"  "}
                        {text}
                    </>
                );
            },
        },
        ,
        {
            title: "Treatement Status",
            dataIndex: "tStat",
            key: "tStat",
            render: (text: string) => {
                return (
                    <span
                        className={cn(
                            "rounded-full p-1 px-3 text-xs font-medium bg-fuchsia-100 text-fuchsia-800",
                            text == tStat.ongoing
                                ? "text-amber-800 bg-amber-100"
                                : text == tStat.complete
                                ? "text-emerald-800 bg-emerald-100"
                                : text == tStat.pending
                                ? "text-gray-800 bg-gray-100"
                                : ""
                        )}>
                        {text}
                    </span>
                );
            },
        },
        {
            title: "Email address",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Condition",
            dataIndex: "condition",
            key: "condition",
            render: (condition: string) => (
                <span className="rounded-full p-1 px-3 text-xs bg-fuchsia-100 text-fuchsia-800">
                    {condition}
                </span>
            ),
        },
        {
            title: "",
            dataIndex: "",
            key: "name",
            render: (_, record: any) => {
                return <Link to={`patient/${record.key}`}> View </Link>;
            },
        },
    ];
    return (
        <div className="w-full container py-10 ">
            <section>
                <header className="mb-14">
                    <h1 className="text-2xl font-semibold text-neutral-600">KidneyHR</h1>
                    <p className="text-neutral-600">
                        Work on new patients, view all notifications from the system
                    </p>
                </header>

                <div className="flex gap-8 items-center">
                    <figure className=" min-w-[22rem] flex row shadow-md ring-1 ring-gray-200 px-6 py-4 rounded-sm ">
                        <figcaption>
                            <h4>Patients Reviewed</h4>
                            <p className="text-2xl font-bold text-neutral-600">2,420</p>
                            <p className="flex gap-2 items-center mt-6">
                                <span className="flex gap-0 items-center text-emerald-700 font-semibold text-sm">
                                    <FaArrowUp /> 40%
                                </span>{" "}
                                vs last month
                            </p>
                        </figcaption>
                    </figure>
                    <figure className=" min-w-[22rem] flex row shadow-md ring-1 ring-gray-200 px-6 py-4 rounded-sm ">
                        <figcaption>
                            <h4>Patients Reviewed</h4>
                            <p className="text-2xl font-bold text-neutral-600">145</p>
                            <p className="flex gap-2 items-center mt-6">
                                <span className="flex gap-0 items-center text-rose-700 font-semibold text-sm">
                                    <FaArrowDown /> 10%
                                </span>{" "}
                                vs last month
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="mt-8">
                <header className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-neutral-500">
                        Recent Patients
                    </h4>
                    <div className="w-80 text-neutral-400">
                        <LabeledInput
                            label="Search"
                            Icon={<IoSearch />}
                        />
                    </div>
                </header>

                <Table
                    className="mt-8"
                    columns={columns}
                    dataSource={datasource}
                    bordered
                />
            </section>
        </div>
    );
}
