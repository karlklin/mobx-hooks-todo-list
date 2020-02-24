import React from 'react'
import {observer, useLocalStore} from 'mobx-react' // 6.x or mobx-react-lite@1.4.0

export const TodoList = observer (
    ({initialTodos}) => {
        const todoRef = React.useRef()
        const store = useLocalStore(() => ({
            todos: createTodos(initialTodos),
            get pendingTodos() {
                return Object.keys(store.todos).filter(
                    todo => store.todos[todo] === false,
                )
            },
            get doneTodos() {
                return Object.keys(store.todos).filter(
                    todo => store.todos[todo] === true,
                )
            },
            addTodo: () => {
                store.todos[todoRef.current.value] = false
                todoRef.current.value = ''
            },
            toggleTodo: todo => {
                store.todos[todo] = !store.todos[todo]
            },
        }));

        const renderTodo = done => todo => (
            <Todo key={todo} done={done} text={todo} onToggle={store.toggleTodo}/>
        );

        return (
            <form onSubmit={store.addTodo}>
                {store.pendingTodos.map(renderTodo(false))}
                {store.doneTodos.map(renderTodo(true))}
                <br/>
                <input ref={todoRef}/>
                <button>Add todo</button>
            </form>
        )
    }
);