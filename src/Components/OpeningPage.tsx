import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "../Components/Ui/Card";

export default function OpeningPage() {
  return (
    <div className="mt-[-6rem] mx-[0.8rem]">
      <Card className="border border-white/40 text-Gray300">
        <CardHeader>
          <h1 className="text-Gray300 font-bold text-[1.4rem]  text-center">
            Welcome to your personal todo list app!
          </h1>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="" className="ml-[-2rem] font-semibold text-Gray300">
              Enter your name to Continue
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-white/40 text-Gray300 py-2 rounded-lg  w-[90%] px-4"
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
