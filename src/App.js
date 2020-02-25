import React from 'react';
import * as mobx from 'mobx';
import './App.css';
import ToDoListView from "./ToDoListView";
import todoStore from "./ToDoStore";
import OwnerView from "./OwnerView";

const ownerStore = mobx.observable(
    {name: 'Karol Pawelski'});

todoStore.addTodo('Learning Mobx', ownerStore);

function App() {
    return (
        <div className="App">
            <ToDoListView store={todoStore} owner={ownerStore}/>
            <OwnerView store={ownerStore}/>
        </div>
    );
}

export default App;
