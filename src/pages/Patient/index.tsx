import {Link, useNavigate} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa6";
import {Button} from "@/components/ui/button";
import LabeledInput from "@/components/custom/labeledInput";
import {Table} from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dashboard() {
  const navigate = useNavigate();
  function onBackNavigate() {
    navigate(-1);
  }
  return (
    <>
      <div className="w-full container py-10 ">
        <section>
          <header className="flex justify-between items-center mb-14">
            <button
              className="text-xl flex items-center gap-2"
              onClick={onBackNavigate}
            >
              <FaArrowLeft className="text-neutral-400 mt-1" />
              Overview
            </button>
            <Link
              to={"newReport"}
              className=" rounded-md py-2 bg-pink-700 text-gray-50 px-8"
            >
              New Report
            </Link>
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
              <p className="text-gray-300">Not Available</p>
            </ul>
            <ul className="list-disc list-inside">
              <h3 className="font-semibold text-lg text-neutral-600">
                Genetic Conditions
              </h3>
              <p className="text-gray-300">Not Available</p>
            </ul>
          </div>
        </section>
        <div className="shadow-md ring-1 ring-gray-300 p-4 py-8 mt-12 rounded-md">
          <h4 className="font-semibold">Past Diagnosis and Reports</h4>
          <Table />
        </div>
      </div>
    </>
  );
}
