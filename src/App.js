import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase";
import Todo from "./Todo";
import db from "./Firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([""]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  });

  const addTodo = (event) => {
    //run add TODO button is clicked
    event.preventDefault(); // stop page from auto reload
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); //clear up the input after clicking the button
  };

  return (
    <div className="app">
      <form className="app__form">
        <FormControl className="app__input">
          <InputLabel>Add Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          className="app__button"
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add TODO
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
