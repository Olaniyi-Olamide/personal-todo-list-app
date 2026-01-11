import { useState } from "react";

interface Props {
  onAddTodo: (param: string) => void;
}

export default function CreateTodo({ onAddTodo }: Props) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value.trim()) return;

    onAddTodo(value);
    setValue("");
  }

  return (
    <div className="flex gap-3 px-[1.5rem] py-4 lg:py-5.5 rounded-lg dark:bg-Navy900 bg-Gray50 shadow-2xl w-[85%] lg:w-[50%] mt-[2rem] lg:mt-[3rem] mb-[2rem]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-2.5"
      >
        <button className="bg-transparent">
          <div className="rounded-full border-[1px] border-Navy850 px-2.5 py-2.5  bg-transparent"></div>
        </button>

        <input
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent border-none text-Gray600 font-semibold outline-none lg:text-[1.3rem] w-[100%]"
        />
      </form>
    </div>
  );
}
