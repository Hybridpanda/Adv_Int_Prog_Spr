import React, { Fragment, useState } from "react";

const editTodo = ({ todo }) => {
  //edit text function

  const editText = async (id) => {
    try {
      const body = { description };
      const res = await fetch("http://localhost:5000/todos/${id}", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={"#id${todo.todo_id}"}
      >
        Edit
      </button>
    </Fragment>
  );
};
