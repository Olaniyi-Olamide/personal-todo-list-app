interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
  filter: string;
  darkTheme: boolean;
  name: string;
  open: boolean;
  loader: boolean;
  loadMain: boolean;
}

export type Action =
  | { type: "enteringName"; payload: string }
  | { type: "setOpen" }
  | { type: "loading"; payload: boolean }
  | { type: "loadingMain"; payload: boolean }
  | { type: "add"; payload: string }
  | { type: "toggle"; payload: number }
  | { type: "toggleTheme" }
  | { type: "remove"; payload: number }
  | { type: "clearCompleted"; payload: number }
  | { type: "remove"; payload: number }
  | { type: "setFilter"; payload: string };
