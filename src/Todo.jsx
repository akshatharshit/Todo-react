import { useState } from "react";
import { v4 as uuid } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuid(), isDone: false }]);
    let [newTod, setNewTod] = useState("");

    let addNewTask = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTod, id: uuid(), isDone: false}];
        });

        setNewTod("");
    };

    let updateTodo = (event) => {
        setNewTod(event.target.value);
    };

    let delTodo = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
    };

    let upperCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };



    let lowerCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toLowerCase(),
                };
            })
        );
    };

    let upperCaseOne = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;

                }
            })
        );
    };

    let lowerCaseOne = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toLowerCase(),
                    };
                } else {
                    return todo;

                }
            })
        );
    };

    let MarkAsDoneAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        );
    }

    let MarkAsDone = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;

                }
            })
        );
    }

    let Undone = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone: false,
                };
            })
        );
    }



    return (
        <>
            <div>
                <input type="text" placeholder="Add a Task" value={newTod} onChange={updateTodo} name="" id="" />
                <br />
                <button onClick={addNewTask}>Add Task</button>
                <br /><br /><br /><br />
                <hr />
                <h4>Task Todo</h4>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.key}>
                                <span style={todo.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                    {todo.task}
                                </span>
                                &nbsp;  &nbsp;  &nbsp;  &nbsp;
                                <button onClick={() => { delTodo(todo.id) }}>del</button> &nbsp;  &nbsp;
                                <button onClick={() => { upperCaseOne(todo.id) }}>upperOne</button> &nbsp;  &nbsp;
                                <button onClick={() => { lowerCaseOne(todo.id) }}>lowerOne</button> &nbsp;  &nbsp;
                                <button onClick={() => { MarkAsDone(todo.id) }}>MarkAsDone</button> &nbsp;  &nbsp;  &nbsp;
                            </li>
                        ))
                    }
                    <hr />
                </ul><br />
                <button onClick={upperCaseAll}>UPPERCASE</button>&nbsp;  &nbsp;  &nbsp;  &nbsp;
                <button onClick={lowerCaseAll}>lowercase</button> &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <button onClick={MarkAsDoneAll}>MarkAsDoneAll</button> &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <button onClick={Undone}>Undo</button> &nbsp;  &nbsp;  &nbsp;  &nbsp;
            </div>
        </>
    )
}