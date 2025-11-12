import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchTodos, type TodoAPIResponse } from '../apis/todo.api';

type TodosStore = {
  data: TodoAPIResponse[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
  fetchTodos: () => Promise<void>;
  toggleTodo: (id: number) => void;
};

// useTodosStore is a custom hook that allows us to access the todos store
export const useTodosStore = create<TodosStore>()(
  // devtools middleware is used to inspect the state of the store
  devtools(
    (set) => ({
      // initial state
      data: [],
      status: 'idle',
      error: null,

      // actions
      fetchTodos: async () => {
        set({ status: 'loading', error: null }, false, 'fetchTodos/loading');
        try {
          const todosResponse = await fetchTodos();
          set(
            { data: todosResponse, status: 'success' },
            false,
            'fetchTodos/success'
          );
        } catch (error) {
          set(
            {
              status: 'error',
              error:
                error instanceof Error
                  ? error.message
                  : 'Failed to fetch todos',
            },
            false,
            'fetchTodos/error'
          );
        }
      },

      toggleTodo: (id: number) => {
        set((state) => ({
          data: state.data.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
    }),
    { name: 'TodosStore' }
  )
);
