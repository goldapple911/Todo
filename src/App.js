import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup } from "react-bootstrap";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (event) => {
    event.preventDefault();
    const newTodoItem = {
      name: event.target.todoItem.value,
      completed: false,
    };
    setTodoItems([...todoItems, newTodoItem]);
    event.target.todoItem.value = "";
  };

  const toggleCompleted = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].completed = !updatedTodoItems[index].completed;
    setTodoItems(updatedTodoItems);
  };

  const deleteTodoItem = (index) => {
    const updatedTodoItems = [...todoItems];
    if (updatedTodoItems[index].completed === true) {
      updatedTodoItems.splice(index, 1);
      setTodoItems(updatedTodoItems);
    }
  };

  return (
    <div className="container mt-3">
      <h1>
        <string>ToDo List</string>
      </h1>

      <Form onSubmit={addTodoItem}>
        <div className="d-flex justify-content-between">
          <Form.Group controlId="todoItem">
            <Form.Control type="text" placeholder="Add item" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mx-3">
            Add
          </Button>
        </div>
      </Form>
      <ListGroup className="mt-3 d-flex justify-content-between">
        {todoItems.map((todoItem, index) => (
          <ListGroup.Item
            key={index}
            className={`d-flex justify-content-between align-items-center ${
              todoItem.completed ? "list-group-item-secondary" : ""
            }`}
          >
            <div className="">
              <Form.Check
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => toggleCompleted(index)}
                label={todoItem.name}
                className="mr-auto"
              />
            </div>
            <Button variant="danger" onClick={() => deleteTodoItem(index)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
