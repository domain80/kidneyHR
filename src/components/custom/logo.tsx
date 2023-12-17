import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to={"/"}>
      <figure className="flex gap-2 items-center ">
        <img src="/Logomark.svg" alt="logo" className="w-12" />
        <figcaption>
          <h3 className="text-2xl font-bold text-neutral-700">KidneyHr</h3>
        </figcaption>
      </figure>
    </Link>
  );
}
