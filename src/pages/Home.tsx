import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodoStore } from "../shared/store";
import styled from "styled-components";

const Home = () => {
  const { fetchTodos, setTodos, todos } = useTodoStore();
  console.log("todo1", todos);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortOrderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

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

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

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
