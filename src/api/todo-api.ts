import axios from "axios";
import { Todo } from "../types/todo-type";

export const todoList = axios.create({
  baseURL: "http://localhost:5000/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = async () => {
  const { data } = await todoList.get("/");
  return data;
};

export const addTodo = async (todo: Todo) => {
  await todoList.post("/", todo);
  return todo;
};

export const deleteTodo = async (id: string) => {
  await todoList.delete(`/${id}`);
  return id;
};

export const updateTodo = async (id: string, todo: Todo) => {
  await todoList.patch(`/${id}`, todo);
  return id;
};
