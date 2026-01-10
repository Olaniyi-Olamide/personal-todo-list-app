import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "../Components/Ui/Card";

interface Props {
  name: string;
  setName: (param: string) => void;
  onContinueBtn: () => void;
}
export default function OpeningPage({ name, setName, onContinueBtn }: Props) {
  return (
    <div className="mt-[-6rem] md:flex justify-center items-center px-[1.5rem]">
      <Card className="border dark:border-white/40 border-black/60 md:w-[50%]">
        <CardHeader>
          <h1 className="dark:text-Gray300 text-Navy950 font-bold text-[1.2rem]  text-center md:text-[2rem] ">
            Welcome to your personal todo list app!
          </h1>
        </CardHeader>

        <CardContent className="mt-[-0.8rem]">
          <form className="px-[0.5rem]" onSubmit={onContinueBtn}>
            <label
              htmlFor=""
              className="font-semibold dark:text-Gray300 text-Navy950"
            >
              Enter your name to continue
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="border dark:border-white/40 border-black/60 dark:text-Gray300 text-Navy950 py-2 lg:py-3 rounded-lg  w-[100%] px-4 mt-1.5"
            />
          </form>
        </CardContent>
        <CardFooter className="flex  justify-end">
          <button
            className="dark:bg-Gray50 bg-Navy900 dark:text-Navy900 text-Gray50 border-none rounded-lg w-[50%] py-2 font-semibold"
            onClick={() => onContinueBtn()}
          >
            Continue
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
