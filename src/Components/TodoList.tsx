import checkedIcon from "../assets/images/icon-check.svg";

export default function TodoList({ todos, onToggle }) {
  return (
    <div className="dark:bg-Navy950 bg-Gray50 w-[100%] flex flex-col justify-center items-center">
      {todos.map((todos) => (
        <div
          className="flex gap-3 px-[1.5rem] py-4 lg:py-5.5 rounded-t-lg dark:bg-Navy900 bg-Gray50 w-[85%] lg:w-[50%] border-b-[0.8px] dark:border-Purple700 border-Gray600 shadow"
          key={todos.id}
        >
          <button
            className="bg-transparent flex items-center justify-center border-none"
            onClick={() => onToggle(todos.id)}
          >
            {!todos.completed && (
              <div className="rounded-full border-[1px] border-Navy850 px-2.5 py-2.5  bg-transparent"></div>
            )}

            {todos.completed && (
              <img
                src={checkedIcon}
                alt="checkedIcon"
                className="rounded-full bg-Blue500 px-1.5 py-1.5"
              />
            )}
          </button>

          <p
            className={`dark:text-Gray600 text-Purple800 font-semibold ${
              todos.completed ? "line-through opacity-[0.6]" : ""
            }`}
          >
            {todos.text}
          </p>
        </div>
      ))}
    </div>
  );
}
