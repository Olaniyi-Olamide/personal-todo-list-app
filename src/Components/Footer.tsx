export default function Footer() {
  return (
    <div className="dark:bg-Navy950 bg-Gray50 pb-[2rem] w-[100%] flex justify-center">
      <div className="flex justify-between px-[1rem] py-3 lg:py-5.5 rounded-b-lg dark:bg-Navy900 bg-Gray50 shadow-2xl w-[85%] lg:w-[50%]">
        <p className=" text-Navy850 font-semibold">x items left</p>

        <div className="flex justify-between items-center lg:gap-2 gap-1  text-[0.8rem]">
          <button className="bg-transparent border-none text-Navy850 font-semibold hover:dark:text-Gray50 hover:text-Navy900">
            All
          </button>
          <button className="bg-transparent border-none text-Navy850 font-semibold hover:dark:text-Gray50 hover:text-Navy900">
            Active
          </button>
          <button className="bg-transparent border-none text-Navy850 font-semibold hover:dark:text-Gray50 hover:text-Navy900">
            Completed
          </button>
        </div>

        <button className="bg-transparent border-none text-Navy850 font-semibold hover:dark:text-Gray50 hover:text-Navy900 text-[0.8rem]">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
