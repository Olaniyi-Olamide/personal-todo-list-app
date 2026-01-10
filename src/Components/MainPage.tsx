import CreateTodo from "./CreateTodo";
import Footer from "./Footer";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

interface Props {
  name: string;
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
        <h2 className="text-Gray50 text-[1.8rem] lg:text-[2.3rem]">
          Hello, {name}
        </h2>
        <p className="text-Gray50 text-[1rem] lg:text-[1.2rem] font-semibold">
          What's on your todo list today?
        </p>
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
          onChange={(filter) =>
            dispatch({ type: "setFilter", payload: filter })
          }
          onClearCompleted={onClearCompleted}
        />
      )}
    </div>
  );
}
