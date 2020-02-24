import {computed, observable, autorun} from 'mobx';

class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        autorun(() => console.log(this.report));
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task, assignee) {
        this.pendingRequests++;

        setTimeout(() => {
            this.todos.push({
                task: task,
                completed: false,
                assignee
            });

            this.pendingRequests--;
        }, 3000);
    }
}

export default new ObservableTodoStore();