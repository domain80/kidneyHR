import Logo from "@/components/custom/logo";
import {Button} from "../components/ui/button";
import LabeledInput from "@/components/custom/labeledInput";
import {BiLockAlt} from "react-icons/bi";

export default function ResetPassword() {
  return (
    <>
      <div className="continaer h-screen mx-auto max-w-screen-xl py-8">
        <Logo />
        <div className="flex h-[97%] w-8/12 mx-auto  items-center">
          {/*  */}
          <section className="w-2/4 grid gap-12 ">
            <header>
              <h2 className="text-3xl text-neutral-800 font-bold">
                Reset Password
              </h2>
              <p className="text-base text-neutral-600">
                Enter and confirm your new password
              </p>
            </header>

            <form className="grid gap-7">
              <LabeledInput
                label="New Password"
                Icon={<BiLockAlt />}
                type="password"
              />
              <LabeledInput
                label="Confirm Password"
                Icon={<BiLockAlt />}
                type="password"
              />
              <Button type="submit" className="py-5 bg-pink-800">
                Reset Password
              </Button>
            </form>
          </section>
          <section className="w-2/4 flex justify-end">
            <img
              src="/kidney.svg"
              alt="Kidney Design"
              className="min-w-[4rem] w-2/3 mb-16"
            />
          </section>
        </div>
      </div>
    </>
  );
}
