import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "../Components/Ui/Card";

import { motion } from "motion/react";

interface Props {
  name: string;
  onContinueBtn: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  dispatch: (param: { type: "enteringName"; payload: string }) => void;
}
export default function OpeningPage({ name, onContinueBtn, dispatch }: Props) {
  return (
    <div className="mt-[-6rem] md:flex justify-center items-center px-[1.5rem]">
      <Card className="border dark:border-white/40 border-black/60 md:w-[50%]">
        <CardHeader>
          <motion.h1
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="dark:text-Gray300 text-Navy950 font-bold text-[1.2rem]  text-center md:text-[2rem] "
          >
            Welcome to your personal todo list app!
          </motion.h1>
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
              onChange={(e) =>
                dispatch({ type: "enteringName", payload: e.target.value })
              }
              placeholder="Your Name"
              className="border dark:border-white/40 border-black/60 dark:text-Gray300 text-Navy950 py-2 lg:py-3 rounded-lg  w-[100%] px-4 mt-1.5"
            />
          </form>
        </CardContent>
        <CardFooter className="flex  justify-end">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="dark:bg-Gray50 bg-Navy900 dark:text-Navy900 text-Gray50 rounded-lg w-[50%] py-2 font-semibold lg:hover:bg-transparent dark:lg:hover:border-Gray50 dark:lg:hover:text-Gray50 lg:hover:border-Navy900 lg:hover:text-Navy900 lg:hover:border-[1px]"
            onClick={(e) => onContinueBtn(e)}
          >
            Continue
          </motion.button>
        </CardFooter>
      </Card>
    </div>
  );
}
