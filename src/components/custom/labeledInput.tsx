import { Input } from "../ui/input";
import { useId } from "react";

export default function LabeledInput({
    label,
    Icon,
    type = "text",
    InputElement = <Input />,
}: {
    label?: string;
    Icon?: React.ReactNode;
    type?: "text" | "password" | "email" | "file";
    InputElement?: React.ReactNode;
}) {
    const id = useId();
    return (
        <label
            htmlFor={id}
            className="space-y-2">
            {label ? <p className="text-sm">{label}</p> : <></>}
            <div className="flex items-center">
                {InputElement ? (
                    InputElement
                ) : (
                    <Input
                        type={type}
                        id={id}
                        name={id}
                    />
                )}
                <span className="-ml-8 w-6 text-gray-400">{Icon ? Icon : <></>}</span>
            </div>
        </label>
    );
}
