import CreateTodo from "./CreateTodo";
import Footer from "./Footer";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

import { motion } from "motion/react";

import type { Todo } from "../interfaces";

interface Props {
  name: string;
  dispatch: (param: { type: "setFilter"; payload: string }) => void;
  todos: Todo[];
  onAddTodo: (param: string) => void;
  onToggle: (param: number) => void;
  onRemove: (param: number) => void;
  filter: string;
  onClearCompleted: (param: number | number[]) => void;
}

export default function MainPage({
  name,
  dispatch,
  todos,
  onAddTodo,
  onToggle,
  onRemove,
  filter,
  onClearCompleted,
}: Props) {
  return (
    <div className="text-center mt-[-8rem] lg:mt-[-10rem] flex flex-col items-center justify-center">
      <Welcome>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-Gray50 text-[1.8rem] lg:text-[2.3rem]"
        >
          Hello, {name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-Gray50 text-[1rem] lg:text-[1.2rem] font-semibold"
        >
          What's on your todo list today?
        </motion.p>
      </Welcome>

      <CreateTodo onAddTodo={onAddTodo} />

      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        filter={filter}
      />
      {todos.length >= 1 && (
        <Footer
          todos={todos}
          filter={filter}
          onChange={(filter: string) =>
            dispatch({ type: "setFilter", payload: filter })
          }
          onClearCompleted={onClearCompleted}
        />
      )}
    </div>
  );
}
