// blueprint

class Car {
    model = '2015'
    brand = 'fiat'
    
    constructor(model) {
        this.model = model;
    }

    turnLeft() {}
    turnRight() {}
    stop() {}
}

const car1 = new Car();
delete car1;
// Car car1; -> stackte 1 Car classi olustur

// functional programming, oop -> object oriented programming

const arr1 = [1,2,3];
arr1.pop()

// stack, heap/free store

function doSomething() {
    const x = 5;
}

const y = 5; // stack -> siliniyor
const z = new Number(5); // heap -> program sonuna kadar veya siz silene kadar hafizada kalir

doSomething();

// observer

import Todos from './state/Todos'

const TodoView = ({ todo }) => (
    // const { finishedTodos } = Todos;
    
    <li>
        <input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
        {todo.title}
    </li>
)

export default observer(TodoView);

class Todo {
    data = []
    current = 'tr'
    locales = { en, tr }

    constructor() {
        makeObservable(this, {
            data: observable,
            current: observable,
            locales: observable,
            changeLanguage: action,
            fetchTodos: action,
            addTodo: action,
            deleteTodo: action,
            finishTodo: action,
        })
    }

    changeLanguage(code: 'tr' | 'en') {
        this.current = code;
    }

    async fetchTodos() {
        const response = await axios({
            method: 'GET',
            baseURL: 'https://jsonplaceholder.typicode.com/todos',
        })

        this.data = response.data;
    }

    addTodo() {}
    deleteTodo() {}
    finishTodo() {}
}

export const todoStore = new Todo()

// navigation stack conditional rendering
