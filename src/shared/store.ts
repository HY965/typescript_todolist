import { create } from "zustand";
import { addTodo, deleteTodo, getTodos } from "../api/todo-api";
import { Todo } from "../types/todo-type";
// import { devtools, persist } from "zustand/middleware";

interface TodoState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  fetchTodos: () => Promise<void>;
  addTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, todo: Todo) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  fetchTodos: async () => {
    const todos = await getTodos();
    set({ todos });
  },
  addTodo: async (todo: Todo) => {
    const nextTodo = await addTodo(todo);
    set((state) => ({ todos: [nextTodo, ...state.todos] }));
  },
  deleteTodo: async (id: string) => {
    const deleteTodos = await deleteTodo(id);
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== deleteTodos),
    }));
  },
  toggleTodo: async (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      ),
    }));
  },

  // devtools(
  //   persist(
  //     (set) => ({

  //       toggleTodo: () => set((state) => ({ todos: state.todos.map((todo)=> todo.id === id ? {...todo, isDone: !todo.isDone}: todo) })),
  //     }),
  //     {
  //       name: 'bear-storage', // persist key
  //     }
  //   )
  // ),

  //   toggleTodo: async (id: string, todo: Todo) => {
  //     //미들웨어 어케사용함 .. 서버업데이트해야함
  //   },
}));

//날짜순으로 정렬(sort)해서 가져오기
