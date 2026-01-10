import { useState, useReducer } from "react";
import Header from "./Header";
import OpeningPage from "./OpeningPage";
import Loader from "./Loader";
import MainPage from "./MainPage";

const initialState = {
  todos: [],
  filter: "all",
};

function reducer(state, action) {
  switch (action.type) {
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
  const [isDark, setIsDark] = useState(true);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const [loader, setLoader] = useState(false);
  const [loadMain, setLoadMain] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleToggleTheme() {
    setIsDark((dark) => !dark);
  }

  function addTodo(text) {
    dispatch({ type: "add", payload: text });
  }

  function toggleTodo(id) {
    dispatch({ type: "toggle", payload: id });
  }
  function removeTodo(id) {
    dispatch({ type: "remove", payload: id });
  }
  function clearCompletedTodo(id) {
    dispatch({ type: "clearCompleted", payload: id });
  }

  function handleContinueBtn() {
    if (!name) return;

    setOpen(false);

    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setLoadMain(true);
    }, 2000);
  }

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="bg-Gray50 dark:bg-Navy950 h-[100vh]">
        <Header onToggleTheme={handleToggleTheme} isDark={isDark} />

        {open && (
          <OpeningPage
            name={name}
            setName={setName}
            onContinueBtn={handleContinueBtn}
          />
        )}

        {loader && <Loader />}

        {loadMain && (
          <MainPage
            dispatch={dispatch}
            name={name}
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
