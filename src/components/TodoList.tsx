import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoStore } from "../shared/store";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <CardWrapper>
      <section>
        <IsDoneName>🔥해야할일🔥</IsDoneName>
        <CardList>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </CardList>
      </section>
      <section>
        <IsDoneName>🍖완료했음🍖</IsDoneName>
        <CardList>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </CardList>
      </section>
    </CardWrapper>
  );
};

export default TodoList;

const CardWrapper = styled.div`
  margin-top: 3rem;
`;

const CardList = styled.div`
  display: flex;
  margin-top: 20px;
`;

const IsDoneName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;
