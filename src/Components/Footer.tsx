export default function Footer({ todos, filter, onChange }) {
  const itemsLeft = todos.filter((todo) => !todo.completed);

  return (
    <div className="dark:bg-Navy950 bg-Gray50 pb-[2rem] w-[100%] flex justify-center">
      <div className="flex justify-between px-[1rem] py-3 lg:py-5.5 rounded-b-lg dark:bg-Navy900 bg-Gray50 shadow-2xl w-[85%] lg:w-[50%]">
        <p className=" text-Navy850 font-semibold">
          {itemsLeft.length} items left
        </p>

        <div className="flex justify-between items-center lg:gap-2 gap-1  text-[0.8rem]">
          <button
            className={`bg-transparent border-none font-semibold hover:dark:text-Gray50 hover:text-Navy900 ${
              filter === "all" ? "text-Blue500" : "text-Navy850"
            }`}
            onClick={() => onChange("all")}
          >
            All
          </button>
          <button
            className={`bg-transparent border-none font-semibold hover:dark:text-Gray50 hover:text-Navy900 ${
              filter === "active" ? "text-Blue500" : "text-Navy850"
            }`}
            onClick={() => onChange("active")}
          >
            Active
          </button>
          <button
            className={`bg-transparent border-none font-semibold hover:dark:text-Gray50 hover:text-Navy900 ${
              filter === "completed" ? "text-Blue500" : "text-Navy850"
            }`}
            onClick={() => onChange("completed")}
          >
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
