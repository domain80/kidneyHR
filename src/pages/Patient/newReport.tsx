import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LabeledInput from "@/components/custom/labeledInput";
import TextArea from "antd/es/input/TextArea";

export default function NewReport() {
    const navigate = useNavigate();
    function onBackNavigate() {
        navigate(-1);
    }
    function onReportCompletion() {
        navigate(-1);
    }
    return (
        <>
            <div className="w-full container py-10 ">
                <section>
                    <header className="flex justify-between items-center mb-14">
                        <button
                            className="text-xl flex items-center gap-2"
                            onClick={onBackNavigate}>
                            <FaArrowLeft className="text-neutral-400 mt-1" /> New Report
                        </button>
                    </header>

                    <div className="flex justify-between items-center">
                        <figure className="flex gap-4 items-center">
                            <img
                                src="/avatar.png"
                                alt="avatar"
                                className="w-28"
                            />
                            <figcaption className="space-y-2">
                                <h2 className="text-2xl">Olivia Mensah</h2>
                                <span className="text-neutral-600">OR52052</span>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <hr />

                <section className="mt-8 flex gap-20">
                    <div className="w-full flex flex-col gap-8 max-w-sm">
                        <Input
                            placeholder="Report Name eg. Lab Report"
                            className="max-w-sm"
                        />

                        <LabeledInput
                            label="Medical Image"
                            type="file"
                        />
                    </div>
                    <div className="w-full max-w-sm">
                        <header className="mb-8">
                            <h4>Note</h4>
                            <p className="text-neutral-400 text-sm">
                                Type out your report
                            </p>
                        </header>
                        <TextArea
                            className="min-h-[9rem]"
                            rows={6}
                        />
                    </div>
                </section>
                <Button
                    onClick={onReportCompletion}
                    className="mt-8 ml-auto bg-pink-700 text-gray-50">
                    Complete Report
                </Button>
            </div>
        </>
    );
}
