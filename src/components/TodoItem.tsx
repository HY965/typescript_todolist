import styled from "styled-components";
import { useTodoStore } from "../shared/store";
import { Todo } from "../types/todo-type";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { deleteTodo } = useTodoStore();

  const newDate = new Date(todo.deadline).toLocaleDateString("Ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  const handleDeleteTodoItem = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteTodo(todo.id);
      alert("삭제되었습니다.");
    } else {
      alert("취소");
    }
  };

  // const onClickToggleItem = () => {
  //   toggleTodo(todo.id, todo);
  // };

  return (
    <CardWrapper>
      <TextContent>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <time>{newDate}</time>
      </TextContent>
      <BtnSet>
        <CompleteBtn>{todo.isDone ? "취소" : "완료"}</CompleteBtn>
        <DeleteBtn onClick={handleDeleteTodoItem}>삭제</DeleteBtn>
      </BtnSet>
    </CardWrapper>
  );
};

export default TodoItem;

const TextContent = styled.article`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardWrapper = styled.div`
  width: 300px;
  padding: 1.2rem;
  margin: 5px;
  border: 3px solid #d8d8d8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const BtnSet = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DeleteBtn = styled.button`
  margin: 40px 0 0 0px;
  cursor: pointer;
  background-color: #e83828;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 0.6rem 2rem;
  &:hover {
    background-color: #ff0000;
    transition: all 0.2s ease 0s;
  }
`;

const CompleteBtn = styled.button`
  margin: 40px 0 0 0px;
  cursor: pointer;
  background-color: #0072d2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 0.6rem 2rem;
  &:hover {
    background-color: #0682f0;
    transition: all 0.2s ease 0s;
  }
`;
