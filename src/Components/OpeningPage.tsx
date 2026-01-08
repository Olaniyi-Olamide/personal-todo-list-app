import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "../Components/Ui/Card";

interface Props {
  isDark: boolean;
}
export default function OpeningPage({ isDark }: Props) {
  return (
    <div className="mt-[-6rem] md:flex justify-center items-center px-[1.5rem]">
      <Card className="border dark:border-white/40 border-black/60 md:w-[50%]">
        <CardHeader>
          <h1 className="dark:text-Gray300 text-Navy950 font-bold text-[1.2rem]  text-center md:text-[2rem] ">
            Welcome to your personal todo list app!
          </h1>
        </CardHeader>
        <p className="font-semibold dark:text-Gray300 text-Navy950  ml-[1.8rem] md:ml-[1.5rem] lg:ml-[4rem] ">
          Enter your name to Continue
        </p>
        <CardContent className="mt-[-1rem]">
          <form className="flex flex-col justify-center items-center gap-2">
            {/* <label
              htmlFor=""
              className="font-semibold dark:text-Gray300 text-Navy950"
            >
              Enter your name to Continue
            </label> */}
            <input
              type="text"
              placeholder="Your Name"
              className="border dark:border-white/40 border-black/60 dark:text-Gray300 text-Navy950 py-2 lg:py-3 rounded-lg  w-[90%] px-4"
            />
          </form>
        </CardContent>
        <CardFooter className="flex  justify-end">
          <button className="dark:bg-Gray50 bg-Navy900 dark:text-Navy900 text-Gray50 border-none rounded-lg w-[50%] py-2 font-semibold">
            Continue
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
