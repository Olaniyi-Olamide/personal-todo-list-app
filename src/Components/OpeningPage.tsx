import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "../Components/Ui/Card";

export default function OpeningPage() {
  return (
    <div className="mt-[-6rem] flex justify-center items-center">
      <Card className="border border-white/40 text-Gray300 md:w-[50%]">
        <CardHeader>
          <h1 className="text-Gray300 font-bold text-[1.2rem]  text-center md:text-[2rem] ">
            Welcome to your personal todo list app!
          </h1>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="" className="font-semibold text-Gray300">
              Enter your name to Continue
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-white/40 text-Gray300 py-2 lg:py-3 rounded-lg  w-[90%] px-4"
            />
          </form>
        </CardContent>
        <CardFooter className="flex  justify-end">
          <button className="bg-Gray50 text-Navy900 border-none rounded-lg w-[50%] py-2 font-semibold">
            Continue
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
