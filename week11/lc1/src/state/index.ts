import { create } from 'zustand'

export type Todo = {
  id: string
  desc: string
  status: boolean
}

const store = create(set => ({
    todos: [],
    functions: {
      addTodo: (todo: Todo) => set(state => ({ ...state, todos: [ ...state.todos, todo ] })),
      deleteTodo: (id: string) => set(state => ({ ...state, todos: state.todos.filter(t => t.id !== id) })),
      finishTodo: (id: string) => set(state => {
        const todo = state.todos.find(t => t.id === id);
        if (!todo) return state;
        if (todo.status === 'finished') return state;

        const newTodos = state.todos.map(t => {
          if (t.id === id) {
            t.status = 'finished'
          }

          return t;
        })
  
        return { ...state, todos: newTodos };
      }),
    }
  })
)

export default store;
