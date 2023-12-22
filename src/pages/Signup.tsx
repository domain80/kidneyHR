import LabeledInput from "../components/custom/labeledInput";
import {Button} from "../components/ui/button";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {BiUser, BiLockAlt} from "react-icons/bi";

function App() {
  const navigate = useNavigate();
  function onSignIn() {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="continaer h-screen mx-auto max-w-screen-xl py-8">
        <figure className="flex gap-2 items-center ">
          <img src="/Logomark.svg" alt="logo" className="w-12" />
          <figcaption>
            <h3 className="text-2xl font-bold text-neutral-700">KidneyHr</h3>
          </figcaption>
        </figure>

        <div className="flex h-[97%] w-8/12 mx-auto  items-center">
          {/*  */}
          <section className="w-2/4 grid gap-12 ">
            <header>
              <h2 className="text-3xl text-neutral-800 font-bold">Sign in</h2>
              <p className="text-base text-neutral-600">
                Welcome back! Please enter your details
              </p>
            </header>

            <form className="grid gap-7">
              <LabeledInput Icon={<BiUser />} label="User ID" />
              <LabeledInput Icon={<BiLockAlt />} label="Password" />

              <Button
                type="submit"
                className="py-5 bg-pink-800"
                onClick={onSignIn}
              >
                Sign In
              </Button>
            </form>

            <Link
              to={"forgot-password"}
              className="font-semibold text-pink-700"
            >
              Forgot Password
            </Link>
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
