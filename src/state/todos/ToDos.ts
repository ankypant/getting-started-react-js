import { fetchTodos, type TodoAPIResponse } from '../../apis/todo.api';
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

interface TodosState {
  data: TodoAPIResponse[];
  status: 'loading' | 'success' | 'error';
}

const initialState: TodosState = {
  data: [],
  status: 'loading',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(todosFetchAsync.pending, () => {
        console.log('Fetch todos is pending....');
        return {
          data: [],
          status: 'loading',
        };
      })
      .addCase(todosFetchAsync.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          status: 'success',
        };
      })
      .addCase(todosFetchAsync.rejected, () => {
        return {
          data: [],
          status: 'error',
        };
      });
  },
});

// createAsyncThunk is a function that creates a thunk action
// that can be used to fetch data from an API
// It returns a promise that resolves to the data
// and can be used to dispatch actions to the store
export const todosFetchAsync = createAsyncThunk(
  'todos/fetchTodosAsync',
  async () => {
    return await fetchTodos();
  }
);

// Export the actions to be used in the components
export const { toggleTodo } = todosSlice.actions;

// Export the reducer to be used in the store
export default todosSlice.reducer;
