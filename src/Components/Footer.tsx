export default function Footer() {
  return (
    <div className="dark:bg-Navy950 bg-Gray50 pb-[2rem] w-[100%] flex justify-center">
      <div className="flex justify-between px-[1.5rem] py-4 lg:py-5.5 rounded-b-lg dark:bg-Navy900 bg-Gray50 shadow-2xl w-[85%] lg:w-[50%]">
        <p className=" text-Navy850 font-semibold">x items left</p>

        <div className="flex justify-between items-center gap-2">
          <button className="bg-transparent border-none text-Navy850 font-semibold hover:text-Gray50">
            All
          </button>
          <button className="bg-transparent border-none text-Navy850 font-semibold hover:text-Gray50">
            Active
          </button>
          <button className="bg-transparent border-none text-Navy850 font-semibold hover:text-Gray50">
            Completed
          </button>
        </div>

        <button className="bg-transparent border-none text-Navy850 font-semibold hover:text-Gray50">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
