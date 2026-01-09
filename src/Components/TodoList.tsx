import checkedIcon from "../assets/images/icon-check.svg";

export default function TodoList() {
  return (
    <div className="dark:bg-Navy950 bg-Gray50 w-[100%] flex flex-col justify-center items-center">
      <div className="flex gap-3 px-[1.5rem] py-4 lg:py-5.5 rounded-t-lg dark:bg-Navy900 bg-Gray50 w-[85%] lg:w-[50%] border-b-[1px] border-Purple700 shadow">
        <button className="bg-transparent flex items-center justify-center border-none">
          {/* <div className="rounded-full border-[1px] border-Navy850 px-2.5 py-2.5  bg-transparent"></div> */}

          <img
            src={checkedIcon}
            alt="checkedIcon"
            className="rounded-full bg-Blue500 px-1.5 py-1.5"
          />
        </button>

        <p className="text-Gray600 font-semibold line-through">
          text text text text text text tx
        </p>
      </div>
      <div className="flex gap-3 px-[1.5rem] py-4 lg:py-5.5  dark:bg-Navy900 bg-Gray50 w-[85%] lg:w-[50%] border-b-[1px] border-Purple700 shadow">
        <button className="bg-transparent flex items-center justify-center border-none">
          {/* <div className="rounded-full border-[1px] border-Navy850 px-2.5 py-2.5  bg-transparent"></div> */}

          <img
            src={checkedIcon}
            alt="checkedIcon"
            className="rounded-full bg-Blue500 px-1.5 py-1.5"
          />
        </button>

        <p className="text-Gray600 font-semibold line-through">
          text text text text text text tx
        </p>
      </div>
    </div>
  );
}
