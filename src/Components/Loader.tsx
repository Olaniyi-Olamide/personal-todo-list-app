import { Spinner } from "./Ui/Spinner";

export default function Loader() {
  return (
    <div className="dark:text-Gray50  text-Navy900 text-[1.3rem] md:text-[2rem] font-semibold mt-[5rem] flex justify-center items-center gap-2">
      Please wait
      <span>
        <Spinner />
      </span>
    </div>
  );
}
