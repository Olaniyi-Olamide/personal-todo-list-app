export default function CreateTodo() {
  return (
    <div className="flex gap-3 px-[1.5rem] py-4 lg:py-5.5 rounded-lg dark:bg-Navy900 bg-Gray50 shadow-2xl w-[85%] lg:w-[50%] mt-[2rem] lg:mt-[3rem]">
      <button className="bg-transparent">
        <div className="rounded-full border-[1px] border-Navy850 px-2.5 py-2.5  bg-transparent"></div>
      </button>

      <input
        type="text"
        placeholder="Create a new todo..."
        className="bg-transparent border-none text-Gray600 font-semibold outline-none lg:text-[1.3rem]"
      />
    </div>
  );
}
