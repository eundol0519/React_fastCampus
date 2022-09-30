import React from "react";

export default function List() {
  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Wash Car" },
    { id: 3, text: "Go to bed" },
    { id: 4, text: "Listen Lecture" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);
  // key는 자식 props로 전달되지 않는다 (오로지 고유성을 판단하는 용도이기 때문에).
  // 고유성 : 형제 사이에서만 고유하면 된다.

  return <div>{todoList}</div>;
}
