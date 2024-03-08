import { useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodoStore } from "../shared/store";

const Home = () => {
  const { fetchTodos } = useTodoStore();
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export default Home;
