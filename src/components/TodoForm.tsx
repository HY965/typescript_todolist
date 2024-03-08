// import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useTodoStore } from "../shared/store";

const TodoForm = () => {
  const { addTodo } = useTodoStore();
  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");
  // const [deadline, setDeadline] = useState<string>("");

  // const titleOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  // const contentOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setContent(e.target.value);
  // };

  // const deadlineOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setDeadline(e.target.value);
  // };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const deadline = formData.get("deadline") as string;

    if (!title || !content || !deadline) {
      return alert("필수값을 입력해주세요");
    }
    const nextTodo = {
      id: uuid(),
      title,
      content,
      deadline,
      isDone: false,
    };
    addTodo(nextTodo);
    formData.delete("title");
    formData.get("title");

    //폼리셋시키는방법무엇일까
    // setTitle("");
    // setContent("");
    // setDeadline("");
  };

  return (
    <InputWrapper>
      <Form onSubmit={onSubmit}>
        <InputTitle>제목</InputTitle>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요"
          // onChange={titleOnChangeHandler}
          // value={title}
        />
        <InputTitle>내용</InputTitle>
        <input
          type="text"
          name="content"
          placeholder="할일을 입력해주세요"
          // onChange={contentOnChangeHandler}
          // value={content}
        />
        <InputTitle>마감날짜</InputTitle>
        <input
          type="date"
          name="deadline"
          // onChange={deadlineOnChangeHandler}
          // value={deadline}
        />
        <button type="submit">추가하기</button>
      </Form>
    </InputWrapper>
  );
};

export default TodoForm;

const InputWrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  padding: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  & input {
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    outline: none;
    border: 1px solid #cfcfcf;
    &:focus {
      border-color: gray;
    }
  }
  & button {
    margin-left: 80px;
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
  }
`;

const InputTitle = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 10px;
`;
