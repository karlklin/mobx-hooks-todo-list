import React from 'react';
import * as mobx from 'mobx';
import './App.css';
import ToDoList from "./ToDoList";
import todoStore from "./ObservableTodoStore";
import Owner from "./Owner";

const ownerStore = mobx.observable(
    {name: 'Karol Pawelski'});

todoStore.addTodo('Learning Mobx', ownerStore);

function App() {
    return (
        <div className="App">
            <ToDoList store={todoStore}/>
            <Owner store={ownerStore}/>
        </div>
    );
}

export default App;
