import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./Todo.css";
import db from "./Firebase";

function Todo(props) {
  return (
    <div className="todo">
      <div className="todo__data">
        <List className="todo__list">
          <ListItem>
            <ListItemText primary={props.todo.todo} secondary="deadline" />
          </ListItem>
        </List>
      </div>
      <div className="todo__delete">
        <Button>
          <DeleteIcon
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          />
        </Button>
      </div>
    </div>
  );
}

export default Todo;
