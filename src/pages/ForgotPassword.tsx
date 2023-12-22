import Logo from "@/components/custom/logo";
import {Button} from "../components/ui/button";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import LabeledInput from "@/components/custom/labeledInput";
import {LuMail} from "react-icons/lu";

function App() {
  const navigate = useNavigate();
  function onResetRequest() {
    navigate("/reset-password");
  }
  return (
    <>
      <div className="continaer h-screen mx-auto max-w-screen-xl py-8">
        <Logo />

        <div className="flex h-[97%] w-8/12 mx-auto  items-center">
          {/*  */}
          <section className="w-2/4 grid gap-12 ">
            <header>
              <h2 className="text-3xl text-neutral-800 font-bold">
                Forgot Password?
              </h2>
              <p className="text-base text-neutral-600">
                No worries... enter your KidneyHR email below to request a
                password reset
              </p>
            </header>

            <form className="grid gap-7">
              <LabeledInput label="Email" type="email" Icon={<LuMail />} />
              <Button
                type="submit"
                className="py-5 bg-pink-800"
                onClick={onResetRequest}
              >
                Request Reset
              </Button>
            </form>

            <p className="text-neutral-400">
              Remember now?{" "}
              <Link to={"/"} className="font-semibold text-pink-700">
                Sign In
              </Link>
            </p>
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

export default App;
