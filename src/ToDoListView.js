import React from 'react';
import {observer} from "mobx-react";

const ToDoListView = observer(({store, owner}) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:', 'coffee plz'), owner);
    };

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map(
                    (todo, idx) => <ToDoItemView todo={todo} key={idx}/>
                )}
            </ul>
            {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
            <button onClick={onNewTodo}>New Todo</button>
            <small> (double-click a todo to edit)</small>
        </div>
    );
});

export default ToDoListView;

const ToDoItemView = observer(({todo}) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    };

    const onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
    };

    return (
        <li onDoubleClick={onRename}>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            {todo.task} {todo.assignee ? <strong>{todo.assignee.name}</strong> : null}
        </li>
    );
});