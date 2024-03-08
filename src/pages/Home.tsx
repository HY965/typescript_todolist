import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodoStore } from "../shared/store";
import styled from "styled-components";

const Home = () => {
  const { fetchTodos, setTodos } = useTodoStore();
  const todos = useTodoStore((state) => state.todos);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortOrderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    if (sortOrder === "asc") {
      setTodos(
        [...todos].sort(
          (a, b) =>
            new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        )
      );
    } else {
      setTodos(
        [...todos].sort(
          (a, b) =>
            new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
        )
      );
    }
  }, [sortOrder, setTodos]);

  return (
    <main>
      <TodoForm />
      <SortOrder value={sortOrder} onChange={sortOrderHandler}>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </SortOrder>
      <TodoList />
    </main>
  );
};

export default Home;

const SortOrder = styled.select`
  margin: 1rem;
`;
