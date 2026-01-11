import { useReducer } from "react";
import Header from "./Header";
import OpeningPage from "./OpeningPage";
import Loader from "./Loader";
import MainPage from "./MainPage";
import type { State, Action } from "../interfaces";

const initialState = {
  todos: [],
  filter: "all",
  darkTheme: true,
  name: "",
  open: true,
  loader: false,
  loadMain: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "enteringName":
      return {
        ...state,
        name: action.payload,
      };

    case "setOpen":
      return {
        ...state,
        open: !state.open,
      };

    case "loading":
      return {
        ...state,
        loader: action.payload,
      };

    case "loadingMain":
      return {
        ...state,
        loadMain: action.payload,
      };

    case "toggleTheme":
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    case "add":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "clearCompleted":
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.id !== action.payload ? !todo.completed : todo
        ),
      };

    case "setFilter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleToggleTheme() {
    dispatch({ type: "toggleTheme" });
  }

  function addTodo(text: string) {
    dispatch({ type: "add", payload: text });
  }

  function toggleTodo(id: number) {
    dispatch({ type: "toggle", payload: id });
  }
  function removeTodo(id: number) {
    dispatch({ type: "remove", payload: id });
  }
  function clearCompletedTodo(id: number | number[]) {
    dispatch({ type: "clearCompleted", payload: id });
  }

  function handleContinueBtn(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    if (!state.name) return;

    dispatch({ type: "setOpen" });

    dispatch({ type: "loading", payload: true });
    setTimeout(() => {
      dispatch({ type: "loading", payload: false });
      dispatch({ type: "loadingMain", payload: true });
    }, 1500);
  }

  return (
    <div className={`${state.darkTheme && "dark"}`}>
      <div className="bg-Gray50 dark:bg-Navy950 h-[100vh]">
        <Header onToggleTheme={handleToggleTheme} isDark={state.darkTheme} />

        {state.open && (
          <OpeningPage
            name={state.name}
            dispatch={dispatch}
            onContinueBtn={handleContinueBtn}
          />
        )}

        {state.loader && <Loader />}

        {state.loadMain && (
          <MainPage
            dispatch={dispatch}
            name={state.name}
            todos={state.todos}
            onAddTodo={addTodo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
            filter={state.filter}
            onClearCompleted={clearCompletedTodo}
          />
        )}
      </div>
    </div>
  );
}
